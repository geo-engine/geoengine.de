---
title: Dominant tree types
exampleImage: ../../../images/data/dominant-tree-types.png
classes:
    [
        Alders (Alnus),
        Birches (Betula),
        Beeches (Fagus),
        Spruces (Picea),
        Pines (Pinus),
        Oaks (Quercus),
        Treeless (no_tree),
        Other conifers (other_coniferous),
        Other deciduous trees (other_deciduous),
    ]
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

A classification of the dominant tree species per Sentinel-2 pixel. Due to the 10 m x 10 m resolution of Sentinel-2, the model cannot classify individual trees but determines the dominant class of each pixel.
