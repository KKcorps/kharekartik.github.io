---
title: "Learning Multi-dimensional indices: The next big thing in OLAP DBs"
summary: "Flood"
publishedOn: 2020-04-09
tags:
  - big-data
  - database
  - software-development
  - machine-learning
  - programming
featured: false
---

> Originally published on Medium: [Learning Multi-dimensional indices: The next big thing in OLAP DBs](https://medium.com/data-science/learning-multi-dimensional-indices-a7aaa2044d8e?source=rss-2c9d8b2edb6e------2)

![](https://cdn-images-1.medium.com/max/1024/0*yVYLjTnCafgm7o7M)
_Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)_

The overflow of data in the world opened up a multitude of opportunities to learn and analyze the behavior of people all around the world. Most analyses require at least a few days of data if not more which results in a need of a fast queryable storage engine. OLAP databases exist to serve this purpose only i.e. to make huge amounts of data easily queryable with minimal latencies.

To minimize the latency, all databases have indices created on data. The index is generally a tree-based structure such as B-tree, R-Tree, etc. which based on some fixed key will directly provide you the row or the block containing the data rather than having you scan all the rows.

The unique issue with OLAP databases is that the queries can be done on multiple columns at once e.g. a query to get a total number of orders by users, date, and city. Technically, you can create indices on multiple dimensions as well but you will have to make assumptions on what query patterns the user will follow. You also have to assume the amount of data each column will hold to make an effective indexing decision.

What if the database itself adapted its index according to the data inserted? Learned Multi-dimensional Indexes are an effort to answer this particular problem. In this blog, we are going to take a look at one of those algorithms.

#### Flood

Flood algorithm has been designed for in-memory indexes. It can be modified to use in the OLTP databases as well. There are two key ideas behind Flood:

1.  Use a sample query filter workload to determine how often certain dimensions are used, which ones are used together and which ones are more selective than others. Based on this info, customize the entire layout to optimize performance.
2.  Use empirical CDF models to flatten multi-dimensional skewed data into a uniform space.

Let us assume an index needs to be created on d-dimensional data. In such data, there is no natural sort order. So, the algorithm first chooses a dimension that will be used for sorting. The algorithm then creates a d-1 dimensional grid where each dimension is divided into equally spaced columns. Each cell in such a grid contains multiple data points.

![](https://cdn-images-1.medium.com/max/832/1*K0QKG5C3l1Z25CGTBuHwHg.png)

To ensure that data points are distributed uniformly, they are normalized using the min and max value of the particular dimension. The last dimension is used for sorting the data within each cell.

#### Query

A query generally consists of k dimensions where k < d. Since the query already contains the range of values for each dimension that need to be queried, we can simply select all the cells which lie within that range along with cells that have partial overlap. This step is known as Projection.

For the cells which have partial overlap, we can use the fact that the data in them is sorted and select the relevant data using binary search. This is only possible when you have the sort dimension as a part of the query. This step is known as Refinement.

Once we have all the data, we can refine it further to check if any out of range data is there or not and then return the result to the user. This step is known as Scan.

![](https://cdn-images-1.medium.com/max/1024/1*EBjT-_ImbRcOT-oBfuVIVw.png)

#### Layout optimization

The primary strength of FLOOD lies in its ability to optimize the data layout to minimize the query latency. To minimize the latency, you first need a proxy to determine the query performance. The algorithm uses a custom cost function to serve the purpose. The cost function is composed of three parts:

-   _wpNc_, where wp is the average time to perform refinement on a cell and Nc, is the total number of cells in the grid.
-   _wrNc_ where wr is the average time to perform refinement on a cell and Nc is the total number of cells in the grid.
-   _wsNs_, where ws is the average time to perform each scan and Ns, is the total number of scanned data points.

The model for query time then can be calculated as -

wpNc + wrNc + wsNs

The next step is to calculate the weights wp, wr, and ws. For this Flood uses a simple model that takes features such as the total number of cells, the mean, median and tail quantile of the sizes of filterable cells, the number of dimensions, etc. Flood only trains the weight model once and re-uses it for multiple data layouts.

The final step is to optimize the layout which consists of fiddling with the dimensions for the sort dimension and the number of columns in each dimension.

![](https://cdn-images-1.medium.com/max/1024/1*pQS0OuCGe-0JFCoeNTGdng.png)

In each iteration, the algorithm chooses one of the d dimensions as the sort dimension. Rest all the dimensions are used to create the d-1 dimensional grid. Then, it runs a gradient descent algorithm to determine the number of columns that minimizes the query time.

Flood re-tunes the data layout for each new workload. Since it is not possible by DB administrator to generate most probable queries to provide as an input to the model, Flood itself generates queries for training by randomizing some dimensions for grouping, others for filtering and leaving the rest. The group by aggregate functions are also randomized.

#### Conclusion

Flood algorithm marks a significant milestone on a path of self-learning indices. It is highly practical and can be used in a real-world database as demonstrated in the paper. Flood however still suffers from drawbacks that need to be fixed to make it a completely generic algorithm. Some of those drawbacks are -

-   It doesn’t support the insertion of new data. The whole dataset needs to be fitted again in case a new data arrives. The current version is meant to be used only for read-only workloads.
-   It is single-threaded and can’t support concurrency in its current implementation.
-   Although Flood re-tunes itself to a new workload, it still struggles to determine when has the workload changed enough for a retune operation to be triggered.

In the end, I am hopeful that these issues will be fixed in the future and OLAP databases will end up becoming at least an order of magnitude faster as demonstrated in the paper.

You can use to following references to learn more about Learned data structures and indices:

-   [Learning Multi-dimensional Indexes by Vikram Nathan, Jialin Ding, Mohammad Alizadeh, Tim Kraska](https://arxiv.org/abs/1912.01668)
-   [The Case for Learned Index Structures by Tim Kraska, Alex Beutel, Ed H. Chi, Jeffrey Dean, Neoklis Polyzotis](https://arxiv.org/abs/1712.01208)
