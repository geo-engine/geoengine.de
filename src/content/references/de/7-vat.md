---
image: ../../../images/references/vat.png
title: Das VAT-System
---

Das VAT-System ist ein flexibles Web-GIS für Biodiversitäts-Forscher. Es ist Teil des GFBio-Portals, das im Rahmen von NFDI4BioDiversity betrieben wird, und stellt Daten von deutschen Biodiversitätsarchiven und -sammlungen bereit. In diesem Portal können Biodiversitätsforscher die Daten visualisieren, explorieren und mit Umweltlayern kombinieren.

## Highlights

- Webbasiertes GIS für Biodiversitätsdaten
- Integration verschiedenster Archive und Sammlungen von Biodiversitätsdaten
- Integration in eine Forschungsinfrastruktur und dessen Portal
- Exploration von Daten mit Multimedia-Verknüpfung
- Integration mit Portal-Suche
- Verwendung verschiedener Dateiformaten und Typen, z.B. Klimadaten (Raster) & Punktobservationen (Vektordaten)

## Methodik

Das VAT-System ist ein Web-GIS das mit dem UI-Toolkit der Geo Engine gebaut und mit einem Geo-Engine-Backend verbunden ist. Es ist im GFBio-Look-and-Feel gebrandet und ist sowohl mit der Portalsuche über einen externen Datenprovider als auch dem GFBio-Single-Sign-On-Dienst über das OpenID-Connect-Protokoll verbunden. Die Archiv-Daten werden regelmäßig geharvestet und sind dann automatisch für Biodiversitätsforscher verfügbar. Neben dem Zugriff über das Web-GIS kann auch über die Python-Schnittstelle der Geo Engine über Jupyter-Notebooks auf abgeleitete Daten aus Workflows zugegriffen werden. Die Operator-Toolbox der Geo Engine erlaubt es Nutzern, Daten zu kombinieren oder Diagramme, z.B. Histogramme, über Daten zu erstellen. Daten können auch in tabellarischer Form angeschaut werden. Ein Highlight ist hier, dass verknüpfte Mediadaten automatisch in einem integrierten Viewer angezeigt werden. Dies ist praktisch, wenn z.B. eine Aufnahme eines Knochens mit einem Fundort verbunden ist.
