---
image: ../../../images/references/vat.png
title: The VAT system
---

The VAT system is a flexible web GIS for biodiversity researchers. It is part of the GFBio portal, which is operated within NFDI4BioDiversity, and provides data from German biodiversity archives and collections. In this portal, biodiversity researchers can visualize, explore and combine the data with environmental layers.

## Highlights

- Web-based GIS for biodiversity data
- Integration of various archives and collections of biodiversity data
- Integration into a research infrastructure and its portal
- Exploration of data with multimedia linking
- Integration with portal search
- Use of different file formats and types, e.g. climate data (raster) & point observations (vector data)

## Methodik

The VAT system is a web GIS built with the Geo Engine UI toolkit and connected to a Geo Engine backend. It is branded in the GFBio look-and-feel and is connected to both the portal search via an external data provider and the GFBio single sign-on service via the OpenID Connect protocol. The archive data is regularly harvested and then automatically available to biodiversity researchers. In addition to access via the web GIS, derived data from workflows can also be accessed via the Geo Engine Python interface using Jupyter notebooks. Geo Engine’s operator toolbox allows users to combine data or create graphs, such as histograms, over data. Data can also be viewed in tabular form. A highlight here is that linked media data is automatically displayed in an integrated viewer. This is useful if, for example, a photograph of a bone is linked to a find location.
