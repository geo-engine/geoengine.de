---
image: ../../../images/references/ndvi.png
title: NDVI time-series for field crop monitoring
---

For an agricultural start-up, we provide a workflow that computes the time series of the mean monthly cloud-free NDVI from Sentinel-2. The time series is automatically extended on a monthly basis. The data comes from a STAC service and does itself not need to be stored. Using APIs, the data can be integrated directly into the customer’s processes.

## Highlights

- Reusable workflows
- Workflow defined once can be automatically applied to subsequent months to update the product
- Data retrieval via STAC from the cloud

## Methodik

We have implemented a processing pipeline for Sentinel-2 based NDVI vegetation indices. By using the Geo Engine, we can retrieve on-demand the latest Sentinel-2 data from the cloud via STAC. The retrieved data is further processed using an appropriate workflow. Operators for temporal aggregation to daily and monthly data products are used as well as cloud pixels are removed and formulas for vegetation indices are applied. The results are ready for further use and can be accessed directly via APIs. In addition to on-demand processing, automated tasks can also be launched to precalculate data products.
