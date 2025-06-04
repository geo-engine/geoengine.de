---
title: Dominant tree types
exampleImage: ../../../images/data/dominant-tree-types.png
classes: ['Alnus', 'Betula', 'Fagus', 'Picea', 'Pinus', 'Quercus', 'no_tree', 'other_coniferous', 'other_deciduous']
dataSources:
    - Sentinel-2
    - SRTM
    - OpenAgrar species data
    - Copernicus Dominant Leaf Type 2018 (raster 10 m), Europe
method: Gradient-boosted decision trees
quality: 93% accuracy
qualityImage: ../../../images/data/dominant-tree-types-confusion.png
properties:
    crs: EPSG:32632 - WGS 84 / UTM zone 32N
    time: Trained for Germany and years 2017 to 2018
    spatialResolution: 10 meters
    spatialValidity: Germany
---

A Classification of dominant tree types per Sentinel-2 pixel. Not a single tree species classification.
