---
image: ../../../images/references/eurocrops.png
title: EuroCrops and Random Forest
---

We trained a pipeline for field crop detection with ML on Sentinel-2 data and the EuroCrops fields. The pipeline includes all steps from retrieving the data, pre-processing, temporal aggregation over months, to the ML framework in Python. Our Python library matching the Geo Engine is used here.

## Highlights

- Sentinel-2 data retrieval from the AWS cloud via STAC.
- Spatio-temporal caching of intermediate results
- Python library to model and and execute workflows
- Connectivity of ML framework in Python

## Methodology

To train and apply ML for field crop classification, both satellite data, e.g. from Sentinel-2, and training data containing the information about the actual fruits grown on fields are needed. Especially for the classification of field crops, time-series are of great importance, since one can usually only distinguish them unambiguously by phenology, i.e. the development over time. Using the Geo Engine as a toolbox, we have not only automated data access, but also the combination and alignment of the different time series: The Sentinel-2 data is loaded from the cloud via the STAC protocol. Then the data, as well as the derived NDVI, are combined into monthly values. For each 12 months, the data is then used in combination with the field information to train the ML model. The data is processed as a data stream, this allows for arbitrarily large data sets to be used. Through our Python library we can feed different ML frameworks with data to train and apply models.
