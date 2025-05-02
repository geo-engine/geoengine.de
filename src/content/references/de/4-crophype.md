---
image: ../../../images/references/crophype.png
title: EnMap- und Sentinel-2-Projektportal für CropHype
---

Wir entwickeln Methoden zur Integration und Pipelines zur Verarbeitung von Daten des neuesten Hyperspektral-Satelliten des DLR: EnMap. Basierend auf unserer Geo Engine werden diese in der Cloud bereitgestellt und zur Entwicklung von ML-Modellen verwendet. Hinzukommt eine Anbindung an Sentinel-2-Daten, die zur gemeinsam mit den EnMap-Daten verwendet werden.

## Highlights

- Integration von Hyperspektraldaten des EnMap-Satellits
- Automatisierung mit Verarbeitungs-Pipelines und Analysis Ready Data (ARD)
- Hosting in der Cloud
- Einheitlicher Zugriff / Data-Mesh für heterogene Daten (EnMap, Sentinel, DEM, Feldinformationen)

## Methodik

Im CropHype-Projekt werden in einer Kooperation von KMUs und Universität für die Daten von EnMap, dem neuesten Hyperspektral-Satelliten des DLR, Methoden zum Monitoring von Vegetation und Feldfrüchten entwickelt. Hier unterstützen wir bei der Bereitstellung der Daten, der Entwicklung der Verarbeitungs-Pipeline und beim Deployment in der “EO-Lab”-Cloud. Die Geo Engine bietet in diesem Projekt viele Vorteile:

- Es werden permanent neue Satellitenbilder erzeugt. Wir haben deshalb passende Workflows definiert, die automatisch alle verfügbaren Daten bereithalten und als “Analysis Ready Data (ARD)” zugreifbar machen.
- Wir integrieren hier die Daten verschiedener Satelliten wie Sentinel-2 und EnMap sowie Informationen über hunderte einzelne Felder. Diese unterschiedlichen Daten sind durch Workflows direkt kombinierbar. Wenn Daten aktualisiert werden, können diese Workflows ohne Veränderung weiterverwendet werden.
- Die entwickelten ML-Modelle können unmittelbar trainiert und anschließend als Service bereitgestellt werden. Dies dient auch als Vorbereitung um, die im Projekt entwickelten Analysen direkt als operationelle Dienste bereitstellen zu können.
