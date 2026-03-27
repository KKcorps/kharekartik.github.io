---
title: "Deploying ML Models in Distributed Real-time Data Streaming Applications"
summary: "Explore the various strategies to deploy ML models in Apache Flink/Spark or other realtime data streaming applications."
publishedOn: 2020-01-11
tags:
  - programming
  - machine-learning
  - software-engineering
  - big-data
  - data-science
featured: false
---

> Originally published on Medium: [Deploying ML Models in Distributed Real-time Data Streaming Applications](https://medium.com/data-science/deploying-ml-models-in-distributed-real-time-data-streaming-applications-217954a0b423?source=rss-2c9d8b2edb6e------2)

![](https://cdn-images-1.medium.com/max/1024/0*Lw62ttKzZ87B3ckn)
_Photo by [Franck V.](https://unsplash.com/@franckinjapan?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)_

Machine Learning has gone from zero to one in the past decade. The rise of ML can be seen as one of the most defining moments in the tech industry. Today ML models are ubiquitous in almost all the services.

One of the challenges which remain to date is the training and inference of models using real-time data. Let’s take a look at the various strategies which you can use in data streaming production jobs to make predictions.

### Model alongside the pipeline

The natural approach for predictions on real-time data is to run your ML model in the pipeline processing the data.

![](https://cdn-images-1.medium.com/max/1024/1*91pmmz85GYMstCMxIPKC_A.jpeg)
_Deploying model in pipeline executors_

This approach has two major complications -

1.  Integration of the pipeline’s code and the model’s code.
2.  Optimizing the integrated pipeline to make efficient use of the underlying resources.

#### Integration

Most of the real-time data pipelines are written using either Java or Python. Both [Apache Spark](https://spark.apache.org/) and [Apache Flink](https://flink.apache.org/) provide Python API. This allows for easy integration of models written using [Scikit-Learn](https://scikit-learn.org/stable/) or [Tensorflow](https://www.tensorflow.org/).

You can also use [Spark MLlib](https://spark.apache.org/mllib/) or [Flink ML](https://github.com/FlinkML) to create models. These models are convenient to integrate, and you don’t have to worry about scaling and fault-tolerance.

But what if you have a pre-existing data pipeline which is written in Java or Scala? In that case, it makes much more sense to use Tensorflow Java API or third-party libraries such as [MLeap](https://github.com/combust/mleap) or [JPMML](https://github.com/jpmml/jpmml-evaluator) to export your Scikit-learn models and use them inside your code. JPMML supports a lot of models but MLeap is faster.

#### Optimization

The choice between Python and Java/Scala represents a tradeoff between versatility and performance. It would be best if you made the decision based on the use case, the amount of expected data, and the latency expected. I prefer Scala for most of the applications since the expected input records were in the order of millions per second.

Another optimization is the number of parallel executors that you should allocate to your model. If it’s a lightweight model such as Logistic Regression or a small Random forest, you can even run a single instance of the model and re-partition data to go to the single executor (this is never a good idea in production). For heavy models such as large random forests or deep neural nets, finding the right number of executors is mostly an exercise in trial & error.

You might also need to optimize your ML models so that they can fit in the memory. There are several tools available for this purpose.

[TensorFlow Lite | ML for Mobile and Edge Devices](https://www.tensorflow.org/lite)

Another complication with this approach is updating the model to a newer version. A fresh deployment is generally required for the update. This also makes A/B testing quite non-trivial.

### Model as a REST service

This is one of the most popular approaches for inference. Run your python code inside a docker container and provide a REST interface to get the results. Tensorflow already provides the REST model serving out of the box.

![](https://cdn-images-1.medium.com/max/1024/1*QZuaJQQbhaMErv1B1_-x7Q.jpeg)
_Deploying ML Model as a service_

For Java, you can use MLeap or DeepLearning4J. You can also dynamically increase/decrease the number of servers according to the throughput in this approach.

If your model calls are async, this approach fails to trigger back pressure in case there is a burst of data such as during restarts. This can lead to OOM failures in the model servers. Extra precautions must be taken to prevent such scenarios.

Latencies are also high since you need a network call to fetch the results. The latencies can slightly be reduced by using [gRPC](https://grpc.io/) instead of REST.

[Here’s How You Can Go Beyond Http 1.1](https://codeburst.io/heres-how-you-can-go-beyond-http-1-1-59e73f68bf75)

### Database as a model store

If you have a fixed model architecture e.g., Linear Regression, Random Forest, or a small neural net, the weights can be stored in a distributed database such as Cassandra. You can create the model at the runtime using the weights and make the predictions on the new model.

![](https://cdn-images-1.medium.com/max/1024/1*6dQ664fVvw38WQvf1bQX6g.jpeg)
_Storing models in database_

This approach is a hybrid of the first and second approaches. It allows you to update the model at runtime without requiring a new deployment while also proving back pressure capabilities. It comes at the cost of versatility since you are limiting the number of potential options for the models.

#### So which approach should you choose?

Well, if you want to do a simple POC or your model is pretty lightweight, go with the REST model server. Ease of integration and very few code changes required to run your model makes it an attractive choice. A/B testing can also be done quickly.

If you require predictions to happen in tens of milliseconds, the pipelined approach is the one to prefer.

Lastly, the model store approach should only be used in the case when you have several models e.g., an ML model per city data, and they are lightweight too.
