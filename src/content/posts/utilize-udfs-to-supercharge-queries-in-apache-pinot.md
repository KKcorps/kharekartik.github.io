---
title: "Utilize UDFs to Supercharge Queries in Apache Pinot"
summary: "Groovy Functions"
publishedOn: 2020-09-29
tags:
  - analytics
  - software-development
  - sql
  - real-time-analytics
  - programming
featured: false
---

> Originally published on Medium: [Utilize UDFs to Supercharge Queries in Apache Pinot](https://medium.com/apache-pinot-developer-blog/utilize-udfs-to-supercharge-queries-in-apache-pinot-e488a0f164f1?source=rss-2c9d8b2edb6e------2)

![](https://cdn-images-1.medium.com/max/1024/0*VtswFI-HcaXyyjhK)
_Photo by [Shahadat Rahman](https://unsplash.com/@hishahadat?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)_

Apache Pinot is a realtime distributed OLAP datastore that can answer hundreds of thousands of queries with millisecond latencies. You can head over to [https://pinot.apache.org/](https://pinot.apache.org/) to get started with Apache Pinot.

While using any database, we can come across a scenario where a function required for the query is not supported out of the box. In such time, we have to resort to raising a pull request for a new function or finding a tedious workaround.

Pinot aims to solve this particular pain-point by giving users the power to add their functions with almost zero lines of code. The 0.5.0 release comes bundled with two such features —

-   Support for Scalar Functions that allow users to write and add their functions as a plugin.
-   Support for inline [Apache Groovy](https://groovy-lang.org/) scripts in SQL queries.

In this article, we’ll be focusing on Scalar functions.

### What are Scalar Functions?

Scalar functions in Pinot are stateless functions which transform input A into output A. e.g. upper , lower , length etc. are scalar functions. However, sum , count are non-scalar functions.

[https://medium.com/media/f8baf0b4217a1c8fa06303a707af948c/href](https://medium.com/media/f8baf0b4217a1c8fa06303a707af948c/href)

You can take a look at the scalar functions supported out of the box in [official repository](https://github.com/apache/incubator-pinot/tree/master/pinot-common/src/main/java/org/apache/pinot/common/function/scalar).

### Implement a scalar function

Let’s create a maven java project. We’ll call this project scalar-function-example.

Scalar functions require @ScalarFunction annotation. This annotation is present in pinot-spi package. You can add the package dependency in maven as follows —

<dependency>  
  <groupId>org.apache.pinot</groupId>  
  <artifactId>pinot-spi</artifactId>  
  <version>0.11.0</version>  
  <scope>provided</scope>  
</dependency>

Let’s create a class CustomScalarFunctions that will contain all of our functions. Let’s write a java method that converts latitude and longitude to [geohash encoding](https://www.movable-type.co.uk/scripts/geohash.html). Generally, Geohash encoders are not available out of the box in most of the database.

[https://medium.com/media/a485475fbb32282326c40e673bf71105/href](https://medium.com/media/a485475fbb32282326c40e673bf71105/href)

Now, you need to annotate this function with @ScalarFunction. The annotation supports the following arguments —

-   **name** — The name of the function to be used while querying. e.g., the Java method name can be calculateLength , but the query name can be calculate\_length\_str. The default is the same as the method name.
-   **enable** — Boolean value indicating whether this function should be registered or not for the usage. This can be used in particular scenarios where you may require to disable a function because of some error or duplicate methods.

Finally, the class should be present in the package name, which follows the following pattern — org.apache.pinot.\*.function.\*

This is because we find the custom methods using reflection, and currently, only the packages with the mentioned pattern are considered for the search. The final code should look as follows

[https://medium.com/media/83e698483985079ba619c7755cfe601e/href](https://medium.com/media/83e698483985079ba619c7755cfe601e/href)

### Register the Scalar Function

Once you have written the code, just compile the code into a JAR file.

Next, if you haven’t downloaded Pinot, you can do that from [our website](https://pinot.apache.org/download/).

Note that scalar functions are supported only in releases 0.5.0 and above.

Now, copy the JAR in theplugins or lib directory of the Pinot binary distribution and restart the Pinot cluster.

### Use the Scalar Function

Now you can use the registered function as follows

[https://medium.com/media/b4128b9a97cb1919d335692950f13362/href](https://medium.com/media/b4128b9a97cb1919d335692950f13362/href)

All of the arguments can either be literal constants or column names. An exception will be thrown if the column’s data type doesn’t match the input data type.

![](https://cdn-images-1.medium.com/max/1024/1*xjGd7yem6IUsMaq4T8KzkQ.png)
_custom function demo_

### RoadMap

We saw how easy it is to add your methods to Pinot for various use cases. The current implementation has few limitations —

-   Only the following data types are supported in Input and output — Integer, Long, Float, Double, String, and Bytes. Objects such as Lists, Map are not supported currently.
-   You can return only a single value.
-   No support for multi-valued columns.
-   Only Java methods are supported as of the moment.

We are working on removing most of these limitations in future releases.

#### Groovy Functions

Pinot also supports Apache Groovy script in SQL which you can use to write custom functions. It requires no additional code from the user. You can directly use the scripts in the query as follows —

[https://medium.com/media/d860f71824e9e7aa0997779ded695ee3/href](https://medium.com/media/d860f71824e9e7aa0997779ded695ee3/href)

Read [our official documentation](https://docs.pinot.apache.org/users/user-guide-query/scalar-functions) for more info on both Groovy and Scalar functions.

You can find the complete demo code in [the pinot-examples repository.](https://github.com/KKcorps/pinot-examples)

If you liked this article, head over to [https://pinot.apache.org](https://pinot.apache.org/) and try it out today.

You can head over to [our slack workspace](https://communityinviter.com/apps/apache-pinot/apache-pinot) for any queries or discussions.
