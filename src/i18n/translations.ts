export const languages = {
    de: 'Deutsch',
    en: 'English',
} as const;

export const defaultLang = 'de';

export const translations = {
    de: {
        'nav.contact': 'Kontakt',
        'nav.services': 'Dienstleistungen',
        'nav.solutions': 'Lösungen',
        'nav.technology': 'Technologie',
        'nav.about': 'Über uns',
        'nav.references': 'Referenzen',
        'header.slogan': 'Ihre Experten für Geodaten & Zeitreihen-Verarbeitung',
        'services.title': 'Unsere Dienstleistungen',
        'services.intro':
            'Wir bieten Ihnen maßgeschneiderte Lösungen für Ihre Anforderungen. Profitieren Sie von der Multidisziplinarität unseres Teams. Wir bringen Kompetenzen aus Geographie und Informatik ein, um Probleme fachlich korrekt und effizient zu lösen. ',
        'services.esg.heading': 'Bereitstellung von ESG-Indikatoren',
        'services.esg.text':
            'Wir bieten Ihnen die Möglichkeit, ESG-Indikatoren zu berechnen und bereitzustellen. Diese Indikatoren sind wichtig für die Bewertung von Unternehmen und deren Nachhaltigkeit.',
        'services.portals.heading': 'Entwicklung von Datenportalen',
        'services.portals.text':
            'Wir entwickeln für Sie maßgeschneiderte Datenportale, die auf Ihre Bedürfnisse zugeschnitten sind. Diese Portale ermöglichen Ihnen den Zugriff auf und die Analyse von Geodaten und Zeitreihen.',
        'services.processing.heading': 'Prozessierung Ihrer Daten & Automatisierung Ihrer Prozesse',
        'services.processing.text':
            'Wir realisieren für Sie Daten- und AI-Pipelines. Dabei definieren wir für Sie nachvollziehbare Workflows und implementieren diese als robuste, wiederverwendbare und wiederholbare Datenverarbeitung.',
        'services.integration.heading': 'Datenintegration & -bereitstellung',
        'services.integration.text':
            'Wir integrieren und kombinieren für Sie Ihre internen Geodaten und verschaffen Ihnen Zugang zu externen Daten-Pools. Externe Daten sind z.B. Sentinel-Satellitendaten, ECMWF-Klimadaten oder kommerzielle Daten.',
        'solutions.title': 'Viele Lösungen mit einer Software',
        'solutions.dashboards.heading': 'Apps und Dashboards mit Geodaten',
        'solutions.dashboards.text':
            'Auf Basis des Geo-Engine-Technologie-Stacks bieten wir Ihnen nutzer- und endkundenspezifische Apps und Dashboards, um ausgewählte Geodaten interaktiv auf Karten und Charts darzustellen und Analysen bereitzustellen. Die Geo Engine dient hierbei als robustes und flexibles Backend, um verschiedene Daten anbieten und abgeleitete Ergebnisse darstellen zu können.',
        'solutions.ml.heading': 'Machine Learning mit Geodaten',
        'solutions.ml.text':
            'Der größte personelle Aufwand beim Machine-Learning ist die Aufbereitung der Eingabedaten sowie die wiederkehrenden Anpassungen während der Modellerstellung. Auf Basis der Geo Engine definieren Workflows eine Daten-Pipeline, die Geodaten-Zeitreihen in Machine-Learning-Frameworks einspeisen.',
        'solutions.dataproducts.heading': 'Datenprodukte und -Automatisierung auf Basis der Geo Engine ',
        'solutions.dataproducts.text':
            'Die Geo Engine ist ein Workflow-basiertes Tool, das Geo-Zeitreihen unkompliziert und effizient verarbeiten kann. Hiermit können sehr schnell Datenprodukte ins Leben gerufen werden, die nur 1x definiert und dann automatisiert regelmäßig berechnet und für Fachgruppen oder Endkunden bereitgestellt werden können.',
        'contact.slogan': 'Fragen Sie unverbindlich an und erhalten Sie unsere Einschätzung ',
        'contact.slogan2': 'Interessiert? Kontaktieren Sie uns gerne und erhalten Sie unsere Ersteinschätzung!',
        'contact.button': 'Jetzt anfragen',
        'contact.address': 'Adresse',
        'contact.getInTouch': 'Nehmen Sie Kontakt auf',
        'contact.intro':
            'Möchten Sie weitere Informationen zu Geo Engine erhalten, sollen wir Ihnen eine unverbindliche Produktdemo zeigen oder haben Sie anderweitige Fragen? Dann zögern Sie nicht mit uns in Kontakt zu treten und uns eine Nachricht zu schreiben. Wir freuen uns über Ihre Kontaktaufnahme!',
        'contact.mail': 'Per E-Mail',
        'contact.phone': 'Per Telefon',
        'team.title': 'Unser Team',
        'team.shortSlogan':
            'Wir sind ein interdisziplinäres Team, das Expertise aus Informatik, Geographie vereint und viel Erfahrung in Datenverarbeitung mitbringt.',
        'team.link': 'Lernen Sie uns kennen!',
        'team.leadership': 'Führungsteam',
        'team.advisors': 'Berater',
        'team.publications': 'Publikationen',
        'technology.title': 'Die Geo Engine: Unser Technologiestack',
        'technology.text':
            'Die Geo Engine ist eine cloud-fähige Data-Science-Plattform für die Verarbeitung von raum-zeitlichen Daten. Sie verfügt über ein einzigartiges Verarbeitungsmodell mit Zeit als nativer Dimension. Darüber hinaus ist sie für Big Data ausgelegt, indem sie eine strombasierte Verarbeitung sowohl für Raster- als auch für Vektordaten-Workflows anwendet. Benutzer können Workflows entweder deklarativ, z.B. über Jupyter Notebooks, oder in einer webbasierten Benutzeroberfläche definieren. Die Ergebnisse der Workflows können über standardisierte Schnittstellen abgerufen oder in maschinelle Lernprozesse eingespeist werden.',
        'technology.keyFeatures': 'Schlüsselkomponenten',
        'technology.keyFeatures1': 'Strombasierte Workflow-Verarbeitung',
        'technology.keyFeatures2': 'Unterstützung von Raster- und Vektordaten',
        'technology.keyFeatures3': 'Verarbeitungsmodell mit Raum und Zeit als nativen Parametern',
        'technology.keyFeatures4': 'Automatische Datenharmonisierung',
        'technology.keyFeatures5': 'OGC-Endpunkte',
        'technology.keyFeatures6': 'Reproduzierbarkeit des Datenzugriffs',
        'technology.link': 'Hier gibt es mehr Infos',
        'references.title': 'Referenzen & Beispiele',
        'references.intro':
            'Hier finden Sie einige Beispiele für unsere Arbeit. Diese Projekte zeigen, wie wir Geodaten und Zeitreihenverarbeitung in verschiedenen Anwendungsfällen einsetzen.',
        'news.title': 'Neueste Beiträge',
        'news.subtitle': 'Bleiben Sie auf dem Laufenden mit unseren neuesten Nachrichten und Updates.',
        'footer.info': 'Informationen',
        'footer.documentation': 'Dokumentation',
        'footer.privacyPolicy': 'Datenschutzerklärung',
        'footer.imprint': 'Impressum',
        'footer.externalLinks': 'Externe Links',
        'footer.projectPageUni': 'Projektseite Uni Marburg',
    },
    en: {
        'nav.contact': 'Contact',
        'nav.services': 'Services',
        'nav.solutions': 'Solutions',
        'nav.technology': 'Technology',
        'nav.about': 'About us',
        'nav.references': 'References',
        'header.slogan': 'Your experts for geodata & time series processing',
        'services.title': 'Our services',
        'services.intro':
            'We offer you customized solutions for your requirements. Benefit from the multidisciplinarity of our team. We bring together expertise in geography and computer science to solve problems correctly and efficiently.',
        'services.esg.heading': 'Provision of ESG indicators',
        'services.esg.text':
            'We offer you the possibility to calculate and provide ESG indicators. These indicators are important for the assessment of companies and their sustainability.',
        'services.portals.heading': 'Development of data portals',
        'services.portals.text':
            'We develop customized data portals tailored to your needs. These portals enable you to access and analyze geodata and time series.',
        'services.processing.heading': 'Processing your data & automating your processes',
        'services.processing.text':
            'We implement data and AI pipelines for you. In doing so, we define comprehensible workflows for you and implement them as robust, reusable, and repeatable data processing.',
        'services.integration.heading': 'Data integration & provision',
        'services.integration.text':
            'We integrate and combine your internal geodata and provide you with access to external data pools. External data includes, for example, Sentinel satellite data, ECMWF climate data, or commercial data.',
        'solutions.title': 'Many solutions with one software',
        'solutions.dashboards.heading': 'Apps and dashboards with geodata',
        'solutions.dashboards.text':
            'Based on the Geo Engine technology stack, we offer you user- and end-customer-specific apps and dashboards to interactively display selected geodata on maps and charts and provide analyses. The Geo Engine serves as a robust and flexible backend to offer various data and present derived results.',
        'solutions.ml.heading': 'Machine learning with geodata',
        'solutions.ml.text':
            'The largest personnel effort in machine learning is the preparation of input data and the recurring adjustments during model creation. Based on the Geo Engine, workflows define a data pipeline that feeds geodata time series into machine learning frameworks.',
        'solutions.dataproducts.heading': 'Data products and automation based on the Geo Engine',
        'solutions.dataproducts.text':
            'The Geo Engine is a workflow-based tool that can process geo time series easily and efficiently. This allows data products to be created very quickly, which only need to be defined once and then calculated regularly and automatically for specialist groups or end customers.',
        'contact.slogan': 'Inquire without obligation and receive our assessment',
        'contact.slogan2': 'Interested? Feel free to contact us and arrange a demo appointment!',
        'contact.button': 'Inquire now',
        'contact.address': 'Address',
        'contact.getInTouch': 'Get in touch',
        'contact.intro':
            'Would you like to receive more information about Geo Engine, should we show you a non-binding product demo or do you have any other questions? Then do not hesitate to contact us and write us a message. We are looking forward to hearing from you!',
        'contact.mail': 'By email',
        'contact.phone': 'By phone',
        'team.title': 'Our team',
        'team.shortSlogan':
            'We are an interdisciplinary team combining expertise from computer science, geography and business administration.',
        'team.link': 'Get to know us!',
        'team.leadership': 'Leadership team',
        'team.advisors': 'Advisors',
        'team.publications': 'Publications',
        'technology.title': 'The Geo Engine: Our technology stack',
        'technology.text':
            'The Geo Engine is a cloud-ready data science platform for processing spatio-temporal data. It features a unique processing model with time as a native dimension. In addition, it is designed for big data by applying stream-based processing for both raster and vector data workflows. Users can define workflows either declaratively, e.g., via Jupyter notebooks, or in a web-based user interface. The results of the workflows can be accessed via standardized interfaces or fed into machine learning processes.',
        'technology.keyFeatures': 'Key components',
        'technology.keyFeatures1': 'Stream-based workflow processing',
        'technology.keyFeatures2': 'Support for raster and vector data',
        'technology.keyFeatures3': 'Processing model with space and time as native parameters',
        'technology.keyFeatures4': 'Automatic data harmonization',
        'technology.keyFeatures5': 'OGC endpoints',
        'technology.keyFeatures6': 'Reproducibility of data access',
        'technology.link': 'More information here',
        'references.title': 'References & Examples',
        'references.intro':
            'Here you will find some examples of our work. These projects show how we use geodata and time series processing in various applications.',
        'news.title': 'Latest Posts',
        'news.subtitle': 'Stay up to date with our latest news and updates.',
        'footer.info': 'Information',
        'footer.documentation': 'Documentation',
        'footer.privacyPolicy': 'Privacy Policy',
        'footer.imprint': 'Imprint',
        'footer.externalLinks': 'External Links',
        'footer.projectPageUni': 'Project page Uni Marburg',
    },
} as const;

export const pages = {
    de: {
        about: '/ueber-uns',
        references: '/beispiele-referenzen',
        contact: '/kontakt',
        imprint: '/impressum',
        cla: '/cla',
        privacyPolicy: '/datenschutzerklaerung',
    },
    en: {
        about: '/en/about-us',
        references: '/en/examples-references',
        contact: '/en/contact',
        imprint: '/en/imprint',
        cla: '/en/cla',
        privacyPolicy: 'privacy-policy',
    },
} as const;
