---
title: "Leverage Plugins to Ingest Parquet Files from S3 In pinot"
summary: "One of the primary advantages of using Pinot is its pluggable architecture. The plugins make it easy to add support for any third-party system which can be an execution framework, a filesystem, or input format."
publishedOn: 2020-08-18
tags:
  - distributed-systems
  - pinot
  - s3
  - spark
  - big-data
featured: false
---

> Originally published on Medium: [Leverage Plugins to Ingest Parquet Files from S3 In pinot](https://medium.com/apache-pinot-developer-blog/leverage-plugins-to-ingest-parquet-files-from-s3-in-pinot-decb12e4d09d?source=rss-2c9d8b2edb6e------2)

### Leverage Plugins to Ingest Parquet Files from S3 in Pinot

![](https://cdn-images-1.medium.com/max/1024/0*afbs7azGt-GpSVeP)
_Photo by [Feelfarbig Magazine](https://unsplash.com/@feelfarbig?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)_

One of the primary advantages of using Pinot is its [pluggable architecture](https://docs.pinot.apache.org/developers/plugin-architecture). The plugins make it easy to add support for any third-party system which can be an execution framework, a filesystem, or input format.

In this tutorial, we will use three such plugins to easily ingest data and push it to our Pinot cluster. The plugins we will be using are -

-   pinot-batch-ingestion-spark
-   pinot-s3
-   pinot-parquet

You can check out [Batch Ingestion](https://docs.pinot.apache.org/basics/data-import/batch-ingestion), [File systems](https://docs.pinot.apache.org/basics/data-import/pinot-file-system), and [Input formats](https://docs.pinot.apache.org/basics/data-import/pinot-input-formats) for all the available plugins.

### Setup

We are using the following tools and frameworks for this tutorial -

-   [Apache Spark 2.2.3](https://spark.apache.org/) (Although any spark 2.X should work)
-   [Apache Parquet 1.8.2](https://parquet.apache.org/)
-   [Amazon S3](https://aws.amazon.com/s3/)
-   [Apache Pinot 0.4.0](https://pinot.apache.org/)

![](https://cdn-images-1.medium.com/max/1024/1*cqBLpHon_ahLTYyiY8vEOQ.png)
_Pinot Ingestion and Query flow_

### Input Data

We need to get input data to ingest first. For our demo, we’ll just create some small Parquet files and upload them to our S3 bucket. The easiest way is to create CSV files and then convert them to Parquet. CSV makes it human-readable and thus easier to modify the input in case of some failure in our demo. We will call this file students.csv

[https://medium.com/media/e256508414f18acbc73a490fd115d8f1/href](https://medium.com/media/e256508414f18acbc73a490fd115d8f1/href)

Now, we’ll create Parquet files from the above CSV file using Spark. Since this is a small program, we will be using the Spark shell instead of writing a full-fledged Spark code.

[https://medium.com/media/a6befbea3dac0936aea4acd638d0eaa7/href](https://medium.com/media/a6befbea3dac0936aea4acd638d0eaa7/href)

The .parquet files can now be found in /path/to/batch\_input directory. You can now upload this directory to S3 either using their UI or running the following command

aws s3 cp /path/to/batch\_input s3://my-bucket/batch-input/ --recursive

### Create Schema and Table

We need to create a table to query the data that will be ingested. All tables in Pinot are associated with a schema. You can check out [Table configuration](https://docs.pinot.apache.org/configuration-reference/table) and [Schema configuration](https://docs.pinot.apache.org/configuration-reference/schema) for more details on creating configurations.

For our demo, we will have the following schema and table configs

[https://medium.com/media/6ed4882ad7cefba1bb131f58aa7fa522/href](https://medium.com/media/6ed4882ad7cefba1bb131f58aa7fa522/href)[https://medium.com/media/c30625884adfa8fcd3534b986d09a057/href](https://medium.com/media/c30625884adfa8fcd3534b986d09a057/href)

We can now upload these configurations to Pinot and create an empty table. We will be using pinot-admin.sh CLI for this purpose.

pinot-admin.sh AddTable -tableConfigFile /path/to/student\_table.json -schemaFile /path/to/student\_schema.json -controllerHost localhost -controllerPort 9000 -exec

You can check out [Command-Line Interface (CLI)](https://docs.pinot.apache.org/operators/cli) for all the available commands.

Our table will now be available in the [Pinot data explorer](https://docs.pinot.apache.org/basics/components/exploring-pinot)

### Ingest Data

Now that our data is available in S3 as well as we have the Tables in Pinot, we can start the process of ingesting the data. Data ingestion in Pinot involves the following steps -

-   Read data and generate compressed segment files from input
-   Upload the compressed segment files to the output location
-   Push the location of the segment files to the controller

Once the location is available to the controller, it can notify the servers to download the segment files and populate the tables.

The above steps can be performed using any distributed executor of your choice such as Hadoop, Spark, Flink, etc. For this demo, we will be using Apache Spark to execute the steps.

Pinot provides runners for Spark out of the box. So as a user, you don’t need to write a single line of code. You can write runners for any other executor using our provided interfaces.

First, we will create a job spec configuration file for our data ingestion process.

[https://medium.com/media/53e10cd29a50237011da34bf56e7abd2/href](https://medium.com/media/53e10cd29a50237011da34bf56e7abd2/href)

In the job spec, we have kept the execution framework as spark and configured the appropriate runners for each of our steps. We also need a temporary stagingDir for our spark job. This directory is cleaned up after our job has executed.

We also provide the S3 Filesystem and Parquet reader implementation in the config to use. You can refer [Ingestion Job Spec](https://docs.pinot.apache.org/configuration-reference/job-specification) for a complete list of configurations.

We can now run our Spark job to execute all the steps and populate data in Pinot.

[https://medium.com/media/f337f2cc2118c6284abd33bfb3deec5e/href](https://medium.com/media/f337f2cc2118c6284abd33bfb3deec5e/href)

In the command, we have included the JARs of all the required plugins in the Spark’s driver classpath. In practice, you only need to do this if you get a ClassNotFoundException.

Voila! Now our data is successfully ingested. Let’s try to query it from Pinot’s broker.

bin/pinot-admin.sh PostQuery -brokerHost localhost -brokerPort 8000 -queryType sql -query "SELECT \* FROM students LIMIT 10"

If everything went right, you should receive the following output

[https://medium.com/media/023e9cd6c05f1d210dd1022e56ec3e69/href](https://medium.com/media/023e9cd6c05f1d210dd1022e56ec3e69/href)

You can also view the results in the Data explorer UI.

![](https://cdn-images-1.medium.com/max/1024/1*h4mL3HcILKHjmTRdo2grHg.png)

Pinot’s powerful pluggable architecture allowed us to successfully ingest parquet records from S3 with just a few configurations. The process described in this article is highly-scalable and can be used to ingest billions of records with minimal latency.

You can check out Pinot on [the official website](https://pinot.apache.org/). Refer to [our documentation](https://docs.pinot.apache.org/) to get started with the setup and in the case of any issues, the community is there to help on the [official slack channel](http://apache-pinot.slack.com/).
