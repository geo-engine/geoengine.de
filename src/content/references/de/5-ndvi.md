---
image: ../../../images/references/ndvi.png
title: NDVI-Zeitreihen für Feldfrucht-Monitoring
---

Für ein Agrar-Start-Up stellen wir einen Workflow bereit, der die Zeitreihe des mittleren monatlichen wolkenfreien NDVI aus Sentinel-2 berechnet. Die Zeitreihe wird monatlich automatisch erweitert. Die Daten stammen aus einem STAC-Dienst und müssen nicht vorgehalten werden. Mittels APIs können die Daten direkt in die Prozesse des Kunden integriert werden.

## Highlights

- Wiederverwendbare Workflows
- Einmal definierter Workflow kann automatisiert für Folgemonate angewendet werden, um das Produkt zu aktualisieren
- Datenabruf über STAC aus der Cloud

## Methodik

Wir haben eine Verarbeitungs-Pipeline für Sentinel-2-basierte NDVI-Vegetationsindizes implementiert. Durch die Verwendung der Geo Engine können wir on-demand die aktuellen Sentinel-2 Daten über STAC aus der Cloud abrufen. Die abgerufenen Daten werden mittels eines entsprechenden Workflows weiterverarbeitet. Dabei werden sowohl Operatoren für die temporale Aggregation auf tägliche und monatliche Datenprodukte verwendet als auch Wolken-Pixel entfernt und die Formeln für Vegetationsindizes angewendet. Die Ergebnisse sind für weitere Verwendung bereit und können direkt über APIs abgerufen werden. Neben der On-demand-Verarbeitung können auch automatisierte Tasks gestartet werden, um Datenprodukte vorzuberechnen.
