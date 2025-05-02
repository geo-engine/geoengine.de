---
image: ../../../images/references/climate-polygons.png
title: Reporting von Flächen mit Umweltdaten
---

Aufgaben wie z.B. das regelmäßige Reporting von regionalen Wetter- und Klimakennzahlen z.B. zur Wasserverfügbarkeit benötigen oft viel händische Arbeit, um die Wetterdaten auf- und weiterzuverarbeiten. Hier haben wir einen Workflow implementiert, der diese Aufgabe komplett automatisieren kann.

## Highlights

- Automatisierung des Reportings: Berechnung von temporalen Aggregaten für Regionen
- Integration von Regionen-Flächen (Polygonen) sowie Wetter- und Klimadaten

## Methodik

Reporting von Wetter-abhängigen Kennzahlen für Regionen wie z.B. Gemeinden verursacht oft einen großen Aufwand an manueller Arbeit. Hier haben wir einen Workflow für einen solchen Case komplett automatisiert. Dieser Workflow kann als Blaupause auf viele andere, ähnliche Anwendungen übertragen werden. Zunächst haben wir die Daten von ECMWF und nationalen Wetterdiensten in die Geo Engine integriert. Mittels unserer Geo Engine-Toolbox werden alle nötigen Aufgaben als Workflow modelliert. Dies beinhaltet die Aggregation auf den Reporting-Zeitraum und die Extraktion und Berechnung von Kennzahlen je Region. Dank der Geo Engine sind die Ergebnisse, bzw. die Prozesse direkt über APIs (z.B. OGC) zugreifbar und können so direkt als Dienst in weitere Prozesse eingebunden oder als Dashboard bereitgestellt werden.
