---
image: ../../../images/references/crophype.png
title: EnMap and Sentinel 2 project portal for CropHype
---

We develop methods for integration and pipelines for processing data from DLR’s latest hyperspectral satellite: EnMap. Based on our Geo Engine, these are deployed in the cloud and used to develop ML models. In addition, there is a connection to Sentinel-2 data, which is used for joint processing with the EnMap data.

## Highlights

- Integration of hyperspectral data from the EnMap satellite
- Automation with processing pipelines and Analysis Ready Data (ARD)
- Hosting in the cloud
- Unified access / data mesh for heterogeneous data (EnMap, Sentinel, DEM, field information).

## Methodik

In the CropHype project, methods for monitoring vegetation and crops are being developed in a collaboration between SMEs and the university on the data from EnMap, DLR’s latest hyperspectral satellite. Here we support the provision of the data, the development of the processing pipeline and the deployment in the “EO-Lab” cloud. The Geo Engine offers many advantages in this project:

- New satellite images are generated permanently. We have therefore defined suitable workflows that automatically hold all available data and make it accessible as “Analysis Ready Data (ARD)”.
- We integrate data from various satellites such as Sentinel-2 and EnMap as well as information on hundreds of individual fields. These different datasets can be combined directly through workflows. When data is updated, these workflows can be reused without modification.
- The developed ML models can be trained immediately and then provided as a service. This also serves as preparation to be able to provide the analyses developed in the project directly as operational services.
