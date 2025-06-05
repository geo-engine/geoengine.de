---
title: Dominante Baumarten
exampleImage: ../../../images/data/dominant-tree-types.png
classes: ['Erlen (Alnus)', 'Birken (Betula)', 'Buchen (Fagus)', 'Fichten (Picea)', 'Kiefern (Pinus)', 'Eichen (Quercus)', 'Baumfrei (no_tree)', ' Andere Nadelbäume (other_coniferous)', ' Andere Laubbäume (other_deciduous)']
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
    time: Trainiert für Deutschland und die Jahre 2017 bis 2018
    spatialResolution: 10 Meter
    spatialValidity: Deutschland
---

A Klassifizierung der vorherrschenden Baumarten pro Sentinel-2-Pixel. Keine Klassifizierung einzelner Bäume.