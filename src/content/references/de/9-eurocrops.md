---
image: ../../../images/references/eurocrops.png
title: EuroCrops und Random Forest
---

Wir haben eine Pipeline zur Feldfrucht-Erkennung mit ML auf Sentinel-2-Daten und den EuroCrops-Feldern trainiert. Die Pipeline umfasst alle Schritte vom Abruf der Daten, über Vorverarbeitung, temporaler Aggregation auf Monate bis zum ML-Framework in Python. Hier wird unsere zur Geo Engine passende Python-Bibliothek verwendet.

## Highlights

- Sentinel-2-Datenabruf aus der AWS-Cloud über STAC
- Raum-Zeitliches-Caching von Zwischenprodukten
- Python-Library zum modellieren und und ausführen von Workflows
- Anbindung von ML-Framework in Python

## Methodik

Zum Training und Anwenden von ML für die Feldfruchtklassifikation werden sowohl Satellitendaten, z.B. von Sentinel-2, als auch Trainingsdaten, die die Information über die tatsächlich auf Feldern angebauten Früchte enthalten, benötigt. Besonders für die Klassifikation von Feldfrüchten sind Zeitreihen von großer Bedeutung, da man diese meist nur durch die Phänologie, also die Entwicklung über die Zeit, eindeutig unterscheiden kann. Mit der Geo Engine als Toolbox haben wir nicht nur den Datenzugriff automatisiert, sondern auch die Kombination und das Angleichen der verschiedenen Zeitreihen: Die Sentinel-2 Daten werden über das STAC Protokoll aus der Cloud geladen. Anschließend werden die Daten, sowie der abgeleitete NDVI, zu monatlichen Werte zusammengefasst. Jeweils 12 Monate werden dann in Kombination mit den Feldinformationen zum Training des ML Modells verwendet. Die Daten werden dabei als Datenstrom verarbeitet, dies ermöglicht beliebig große Datenmengen zu verwenden. Durch unsere Python-Bibliothek können wir verschiedenen ML Frameworks mit Daten füttern und so Modelle trainieren und anwenden.
