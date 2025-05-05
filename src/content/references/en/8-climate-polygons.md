---
image: ../../../images/references/climate-polygons.png
title: Reporting of areas with environmental data
---

Tasks such as regular reporting of regional weather and climate metrics, e.g. on water availability, often require a lot of manual work to process the weather data up and downstream. Here we have implemented a workflow that can completely automate this task.

## Highlights

- Automation of reporting: calculation of temporal aggregates for regions
- Integration of region areas (polygons) as well as weather and climate data

## Methodology

Reporting of weather-dependent key figures for regions such as municipalities often requires a large amount of manual work. Here we have completely automated a workflow for such a case. This workflow can be applied as a blueprint to many other similar applications. First, we integrated data from ECMWF and national weather services into the Geo Engine. Using our Geo Engine toolbox, all necessary tasks are modeled as a workflow. This includes the aggregation to the reporting period and the extraction and calculation of key figures per region. Thanks to the Geo Engine, the results of the processes are directly accessible via APIs (e.g. OGC) and can thus be directly integrated as a service into further processes or provided as a dashboard.
