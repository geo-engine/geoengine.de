---
image: ../../../images/references/ai-weather.webp
title: AI-Pipeline für Wettersatelliten-Daten
---

Wolken in Satellitenbildern tragen Informationen über das Wetter, können aber auch die Sicht auf das eigentliche Ziel blockieren. Wir haben ein KI-Modell sowie eine dazu passende Datenpipeline entwickelt, um Wolken zu erkennen und zu maskieren. Die Vorbereitung der verwendeten Meteosat Second Generation Zeitreihendaten sowie das KI-Training und die KI-Anwendung sind als wiederholbarer Workflow umgesetzt.

## Highlights

- Verarbeitung sehr großer Wettersatelliten-Zeitreihen
- Wiederverwendbare Pipeline für AI-Training / -Anwendung
- Training und Anwendung von Deep-Learning mit Convolutional Neural Networks

## Methodik

Wolken sind ein Phänomen, welches für die meisten Satellitenbilder eine wichtige Rolle spielt. Während man z.B. in Sentinel-2-Zeitreihen versucht Bilder so zu kombinieren, dass die Erdoberfläche überall sichtbar wird, untersucht man mittels Wettersatelliten z.B. Wolken zu klassifizieren. Für die Klassifikation von Wolken haben wir eine komplette KI-Pipeline inklusive Vorverarbeitung umgesetzt. Trainiert haben wir auf einer Zeitreihe von 10 Jahren mit Bildern für alle 15-Minuten-Intervalle. Das sind über 35.000 Bilder pro Jahr. Die Rohdaten wurden in der Pipeline entpackt und für verschiedene Parameter vorbereitet. Diese Daten fließen dann in das angebundene ML-Framework Tensorflow um ein CNN Modell zu trainieren. Die Workflows, welche die Trainingsdaten liefern, können direkt verwendet werden, um das Modell für beliebige Zeitpunkte anzuwenden. Das trainierte Modell kann als Operator an den entsprechenden Workflow angehängt werden. So kann unter anderem jede neue Aufnahme instantan klassifiziert werden.
