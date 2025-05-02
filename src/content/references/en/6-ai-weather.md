---
image: ../../../images/references/ai-weather.webp
title: AI pipeline for weather satellite data
---

Clouds in satellite imagery carry information about the weather, but can also block the view of the actual target. We developed an AI model as well as a matching data pipeline to detect and mask clouds. The preparation of the Meteosat Second Generation time series data used as well as the AI training and application are implemented as a repeatable workflow.

## Highlights

- Processing of very large weather satellite time series
- Reusable pipeline for AI training/application
- Training and application of Deep-Learning with Convolutional Neural Networks

## Methodik

Clouds are a phenomenon that plays an important role for most satellite images. While in Sentinel-2 time series, for example, one tries to combine images in such a way that the Earth’s surface is visible everywhere, one uses weather satellites to investigate, for example, how to classify clouds. For the classification of clouds we have implemented a complete AI pipeline including preprocessing. We trained on a time series of 10 years with images for every 15-minute interval. That’s over 35,000 images per year. The raw data was unpacked in the pipeline and prepared for various parameters. This data then flows into the connected ML framework Tensorflow to train a CNN model. The workflows that provide the training data can be used directly to apply the model for arbitrary time points. The trained model can be attached as an operator to the corresponding workflow. Thus, among other things, each new recording can be classified instantaneously.
