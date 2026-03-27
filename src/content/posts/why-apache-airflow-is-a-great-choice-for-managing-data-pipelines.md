---
title: "Why Apache Airflow Is a Great Choice for Managing Data Pipelines"
summary: "A glimpse at capabilities which makes Airflow better than its predecessors"
publishedOn: 2020-01-20
tags:
  - data
  - big-data
  - data-engineering
  - programming
  - software-engineering
featured: false
---

> Originally published on Medium: [Why Apache Airflow Is a Great Choice for Managing Data Pipelines](https://medium.com/data-science/why-apache-airflow-is-a-great-choice-for-managing-data-pipelines-48effcce3e41?source=rss-2c9d8b2edb6e------2)

![](https://cdn-images-1.medium.com/max/1024/0*OcvSZKbjlPSW2mZN)
_Photo by [Seika I](https://unsplash.com/@seiseisei?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)_

[Apache Airflow](https://airflow.apache.org/) is an open-source scheduler to manage your regular jobs. It is an excellent tool to organize, execute, and monitor your workflows so that they work seamlessly.

Apache Airflow solved a lot of problems that the predecessors faced. Let’s first understand the architecture, and then we’ll take a look at what makes Airflow better.

#### DAGs

DAGs (Directed Acyclic Graphs) represent a workflow in Airflow. Each node in a DAG represents a task that needs to be run. The user mentions the frequency at which a particular DAG needs to be run. The user can also specify the trigger rule for each task in a DAG. e.g., You may want to trigger an alert task right after one of the previous tasks fails.

Let us try to understand the various components of Airflow.

#### Core components

Airflow primary consists of the following components -

1.  Scheduler
2.  Webserver
3.  Executor
4.  Backend

#### Scheduler

It is responsible for scheduling your tasks according to the frequency mentioned. It looks for all the eligible DAGs and then puts them in the queue. If a DAG failed and retry is enabled, the scheduler will automatically put that DAG up for retry. The number of retries can be limited on a DAG level.

#### Webserver

The webserver is the frontend for Airflow. Users can enable/disable, retry, and see logs for a DAG all from the UI. Users can also drill down in a DAG to see which tasks have failed, what caused the failure, how long did the task run for, and when was the task last retried.

This UI makes Airflow superior to its competitors. e.g., In Apache Oozie, seeing logs for non-MR (map-reduce) jobs is a pain.

#### Executor

It is responsible for actually running a task. Executor controls on which worker to run a task, how many tasks to run in parallel, and update the status of the task as it progress.

You can run your task on multiple workers managed by Celery or Dask or Kubernetes.

The tasks are pulled from a queue, which can be either Redis or RabbitMQ.

By default, Airflow uses SerialExecutor, which only runs one task at a time on a local machine. This is not advised to be done in production.

#### Backend

Airflow uses MySQL or PostgreSQL to store the configuration as well as the state of all the DAG and task runs. By default, Airflow uses SQLite as a backend by default, so no external setup is required. The SQLite backend is not recommended for production since data loss is probable.

![Airflow components](https://cdn-images-1.medium.com/proxy/1*CEojZqU4FWcbOwOTgwttDw.jpeg)
_Airflow components_

### So what makes Airflow the right scheduler for Data pipelines?

#### Monitoring

Airflow provides various methods of monitoring. You can see the status of the tasks from the UI. It sends an mail in case a DAG fails. You can also send the email if a task breaches the defined SLA. The logs for a task can also be viewed from the Airflow UI itself.

![](https://cdn-images-1.medium.com/max/1024/1*E67lOsw-SvOyd8OEwXvMww.png)
_Airflow DAG UI_

#### Lineage

This feature came pretty recently in Airflow v1.10. Lineage allows you to track the origins of data, what happens to it, and where it moves over time, such as Hive table or S3/HDFS partition.

It comes pretty handily when you multiple data tasks reading and writing into storage. The user needs to define the input and output data sources for each task, and a graph is created in Apache Atlas, depicting the relationship between various data sources.

![](https://cdn-images-1.medium.com/max/1024/1*T5xjyWfodXLpQD4gQUqCVg.png)
_Example Apache Atlas instance graph (from [https://atlas.apache.org/#/QuickStart)](https://atlas.apache.org/#/QuickStart\))_

#### Sensors

Sensors allow a user to trigger a task based on a certain pre-condition. The user needs to specify the type of sensor and the frequency at which they need to check for the condition. e.g., You can use the HDFS Partition sensor to trigger a task when a particular partition such as date is available.

#### Customization

Airflow also allows users to create their operators and sensors in case an already rich ecosystem of existing ones doesn’t satisfy your requirements. I wrote a SparkOperator because the official one didn’t allow me to tweak all the parameters. All the code is written in Python, which makes it easy for any developer to integrate.

Apart from all the benefits mentioned above, Airflow also has seamless integration with all the services in big data ecosystems such as Hadoop, Spark, etc. Since all the code is written in Python, getting started with Airflow will only take a couple of minutes. You can take a look at the [official quickstart guide](https://airflow.apache.org/docs/stable/start.html).

You can also explore [https://databand.ai/](https://databand.ai/) for a much more powerful setup to monitor your data pipelines powered by Apache Airflow.

[Databand - Data Pipeline Observability | Observability for DAGs and ML](https://databand.ai/)
