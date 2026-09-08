import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, CalendarDays, ChevronRight, Clock3, Facebook, MapPin, Menu, Phone, Sparkles, Star, X } from 'lucide-react';
import './styles.css';

const A = `${import.meta.env.BASE_URL}assets/`;

const copy = {
  en: {
    nav: ['Home', 'Menu', 'About us', 'Gallery', 'Contact'],
    welcome: 'Welcome to Hacienda',
    numberOne: 'Your number 1 in Kaiserslautern and surrounding area',
    heroText: 'Lively Mexican cooking, American favorites and legendary cocktails — served with a whole lot of heart.',
    reserve: 'Reserve a table', seeMenu: 'View our menu',
    scrollDiscover: 'Scroll to discover',
    awardKicker: 'Reader-voted · Stars and Stripes', awardTitle: 'Voted Best Mexican Restaurant.',
    awardText: 'Hacienda Mexican Restaurant was named a Best of Germany 2024 winner in the Rhein Main region.',
    menuKicker: 'Made for sharing', menuTitle: 'The Hacienda menu', menuIntro: 'Explore our guest favorites right here — no PDF and no leaving the website.',
    menuNote: 'Prices include VAT. Please ask our team about allergens and dietary requirements.',
    callLine: 'For reservations and to-go orders feel free to give us a call',
    weekly: 'Our evening specials', weeklySub: 'There is always a reason to come together.', menu: 'Menu', every: 'Every',
    specials: [
      ['Monday', 'All You Can Eat Chicken Wings', 'As many saucy, crispy wings as you like.'],
      ['Wednesday', 'Margarita Night', '2 for 1 margaritas · different varieties'],
      ['Thursday', 'All You Can Eat Spareribs', 'Tender ribs, fries and a proper feast.'],
      ['Friday', 'Caipi & Mojito Night', '2 for 1 Caipirinha & Mojito'],
    ],
    kidsTitle: 'Kids menu', kidsDay: 'Every Friday', kidsOffer: '50% discount', kidsText: 'A Friday treat for the smallest guests at the table.',
    tequilaTitle: 'Discover the diversity of tequila', tequilaText: 'From bright blancos to silky añejos — ask our team to help you find a new favorite.',
    specialNote: '*Specials from 5–10 pm, do not apply on holidays.',
    aboutKicker: 'This is Hacienda', aboutTitle: 'Welcome to the Hacienda!',
    aboutParas: [
      'Here at our lively and authentic Mexican restaurant, we make up a dedicated team. Each of us shares a common passion for Mexican food and our goal is to provide our guests with an enjoyable evening. Because we want to go beyond Mexican food, we also offer a variety of American food options. So especially our specials during the week are a special experience in our restaurant.',
      'In our team, consisting of chefs, service staff and bar team, we value cooperation and mutual respect. We work together like a family, sharing ideas and inspiring each other to reach new heights. We celebrate diversity on our team, as each member brings their own skills and unique perspectives.',
      'Every day, we strive to exceed our guests’ expectations and provide you with an unforgettable experience. From the moment you arrive to the moment you leave with a smile, our team is here to make sure you feel welcomed, appreciated, satisfied and — not to mention — satiated.',
    ],
    aboutEnd: 'We hope to see you soon and delight you with our wide selection of dishes and drinks — from tequila and Mexican beers to margaritas!',
    teamKicker: 'The people behind Hacienda', teamTitle: 'One team. One big table.',
    teamText: 'From the kitchen and bar to the people welcoming you at the table, this is the team that brings Hacienda to life every day.',
    galleryKicker: 'Inside Hacienda', galleryTitle: 'Food, color & atmosphere',
    visitKicker: 'Come say hola', visitTitle: 'Your table is waiting.', directions: 'Get directions', hours: 'Opening hours',
    weekdays: 'Mon, Wed–Sat', sunday: 'Sun & holidays', tuesday: 'Tuesday', closedWord: 'Closed',
    lunch: 'Lunch specials · Mon–Fri · 12:00–14:00', todayOpen: 'Open today', todayClosed: 'Closed today',
    imprint: 'Imprint', privacy: 'Data protection',
  },
  de: {
    nav: ['Start', 'Menü', 'Über uns', 'Galerie', 'Kontakt'],
    welcome: 'Willkommen in der Hacienda', numberOne: 'Ihre Nummer 1 in Kaiserslautern und Umgebung',
    heroText: 'Lebendige mexikanische Küche, amerikanische Klassiker und legendäre Cocktails — mit ganz viel Herz serviert.',
    reserve: 'Tisch reservieren', seeMenu: 'Speisekarte ansehen',
    scrollDiscover: 'Nach unten entdecken',
    awardKicker: 'Von Lesern gewählt · Stars and Stripes', awardTitle: 'Zum besten mexikanischen Restaurant gewählt.',
    awardText: 'Hacienda Mexican Restaurant wurde als „Best of Germany 2024“-Gewinner in der Region Rhein Main ausgezeichnet.',
    menuKicker: 'Zum Teilen gemacht', menuTitle: 'Die Hacienda Speisekarte', menuIntro: 'Entdecken Sie unsere beliebtesten Gerichte direkt hier — ohne PDF und ohne die Website zu verlassen.',
    menuNote: 'Alle Preise inklusive MwSt. Informationen zu Allergenen erhalten Sie bei unserem Team.',
    callLine: 'Für Reservierungen und Bestellungen zum Mitnehmen rufen Sie uns gerne an',
    weekly: 'Unsere Abend-Specials', weeklySub: 'Es gibt immer einen Grund, zusammenzukommen.', menu: 'Menü', every: 'Jeden',
    specials: [
      ['Montag', 'All You Can Eat Chicken Wings', 'So viele knusprige, würzige Wings wie Sie mögen.'],
      ['Mittwoch', 'Margarita Night', '2 für 1 Margaritas · verschiedene Sorten'],
      ['Donnerstag', 'All You Can Eat Spareribs', 'Zarte Ribs, Pommes und ein richtiges Festessen.'],
      ['Freitag', 'Caipi & Mojito Night', '2 für 1 Caipirinha & Mojito'],
    ],
    kidsTitle: 'Kinder-Menü', kidsDay: 'Jeden Freitag', kidsOffer: '50% Rabatt', kidsText: 'Ein Freitags-Highlight für unsere kleinsten Gäste.',
    tequilaTitle: 'Entdecken Sie die Vielfalt des Tequilas', tequilaText: 'Von frischen Blancos bis zu samtigen Añejos — unser Team hilft gerne bei der Auswahl.',
    specialNote: '*Specials von 17–22 Uhr, nicht an Feiertagen.',
    aboutKicker: 'Das ist Hacienda', aboutTitle: 'Willkommen in der Hacienda!',
    aboutParas: [
      'Hier in unserem lebhaften und authentischen mexikanischen Restaurant sind wir ein engagiertes Team. Uns alle verbindet die Leidenschaft für mexikanisches Essen und das Ziel, unseren Gästen einen schönen Abend zu bereiten. Neben mexikanischen Speisen bieten wir auch verschiedene amerikanische Gerichte an. Besonders unsere Specials unter der Woche machen jeden Besuch zu einem Erlebnis.',
      'In unserem Team aus Küche, Service und Bar legen wir Wert auf Zusammenarbeit und gegenseitigen Respekt. Wir arbeiten wie eine Familie, teilen Ideen und inspirieren uns gegenseitig. Die Vielfalt unseres Teams ist unsere Stärke.',
      'Jeden Tag möchten wir die Erwartungen unserer Gäste übertreffen und ein unvergessliches Erlebnis bieten. Vom Ankommen bis zum Abschied mit einem Lächeln sorgen wir dafür, dass Sie sich willkommen, geschätzt und rundum zufrieden fühlen.',
    ],
    aboutEnd: 'Wir freuen uns darauf, Sie bald mit unserer großen Auswahl an Speisen und Getränken zu begeistern — von Tequila und mexikanischem Bier bis zu Margaritas!',
    teamKicker: 'Die Menschen hinter Hacienda', teamTitle: 'Ein Team. Ein großer Tisch.',
    teamText: 'Von Küche und Bar bis zu den Menschen, die Sie am Tisch willkommen heißen: Dieses Team erweckt die Hacienda jeden Tag zum Leben.',
    galleryKicker: 'In der Hacienda', galleryTitle: 'Essen, Farbe & Atmosphäre',
    visitKicker: 'Komm vorbei', visitTitle: 'Dein Tisch wartet.', directions: 'Route planen', hours: 'Öffnungszeiten',
    weekdays: 'Mo, Mi–Sa', sunday: 'So & Feiertage', tuesday: 'Dienstag', closedWord: 'Geschlossen',
    lunch: 'Mittagsangebote · Mo–Fr · 12:00–14:00', todayOpen: 'Heute geöffnet', todayClosed: 'Heute geschlossen',
    imprint: 'Impressum', privacy: 'Datenschutz',
  },
};

const privacyCopy = {
  en: {
    eyebrow: 'Legal information',
    title: 'Data protection',
    lead: 'This notice explains how personal data is handled when you visit the Hacienda website or contact us.',
    updated: 'Last updated · September 2026',
    controller: 'Responsible for data processing',
    sections: [
      {
        title: '1. Introduction and controller',
        paragraphs: [
          'Personal data is any information that can be used to identify you. The controller under the General Data Protection Regulation (GDPR) is Hacienda Mexican Restaurant, Weilerbacher Straße 110, 67661 Kaiserslautern, Germany, telephone 0631 56986, email haciendakl@gmail.com.',
          'The website should be delivered through SSL or TLS encryption. You can identify an encrypted connection by “https://” and the lock symbol in your browser.',
        ],
      },
      {
        title: '2. Data collected when visiting the website',
        paragraphs: [
          'When you use the website for information only, the hosting server may automatically record technical data required to deliver the pages and maintain their stability and security.',
        ],
        bullets: ['Page requested', 'Date and time of access', 'Amount of data transferred', 'Referring page or source', 'Browser and operating system', 'IP address, where possible in anonymized form'],
        after: 'Processing is based on our legitimate interest under Art. 6(1)(f) GDPR. Server logs are not used for unrelated purposes, but may be reviewed if there are specific indications of unlawful use.',
      },
      {
        title: '3. Cookies',
        paragraphs: [
          'Cookies are small text files stored on your device. Session cookies are deleted when the browser is closed; persistent cookies remain for a defined period so settings can be remembered.',
          'Where a cookie processes personal data, the legal basis may be contract performance under Art. 6(1)(b) GDPR, consent under Art. 6(1)(a) GDPR, or a legitimate interest in an effective website under Art. 6(1)(f) GDPR. You can restrict or disable cookies in your browser, although doing so may limit some functionality.',
        ],
      },
      {
        title: '4. Contacting us',
        paragraphs: [
          'If you contact us by telephone or email, we process only the information necessary to answer and handle your request. The legal basis is our legitimate interest under Art. 6(1)(f) GDPR; if your request relates to a contract, Art. 6(1)(b) GDPR also applies. The information is deleted once the matter has been resolved unless statutory retention duties require otherwise.',
        ],
      },
      {
        title: '5. Your rights',
        paragraphs: ['Subject to the applicable legal requirements, you may exercise the following rights in relation to your personal data:'],
        bullets: ['Access · Art. 15 GDPR', 'Rectification · Art. 16 GDPR', 'Erasure · Art. 17 GDPR', 'Restriction of processing · Art. 18 GDPR', 'Notification · Art. 19 GDPR', 'Data portability · Art. 20 GDPR', 'Withdrawal of consent · Art. 7(3) GDPR', 'Complaint to a supervisory authority · Art. 77 GDPR'],
      },
      {
        title: '6. Storage period',
        paragraphs: [
          'How long personal data is kept depends on its legal basis, the purpose of processing, and any commercial, tax, or other statutory retention period.',
          'Data processed on the basis of consent is stored until consent is withdrawn. Contract-related data is normally deleted after the applicable retention periods. Data based on a legitimate interest is retained until a valid objection is made, unless compelling legitimate grounds or legal claims require continued processing. In all other cases, data is deleted when it is no longer needed for the purpose for which it was collected.',
        ],
      },
    ],
  },
  de: {
    eyebrow: 'Rechtliche Informationen',
    title: 'Datenschutz',
    lead: 'Diese Hinweise erklären, wie personenbezogene Daten beim Besuch der Hacienda-Website oder bei einer Kontaktaufnahme verarbeitet werden.',
    updated: 'Stand · September 2026',
    controller: 'Verantwortlich für die Datenverarbeitung',
    sections: [
      {
        title: '1. Einleitung und Verantwortlicher',
        paragraphs: [
          'Personenbezogene Daten sind alle Informationen, mit denen Sie persönlich identifiziert werden können. Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Hacienda Mexican Restaurant, Weilerbacher Straße 110, 67661 Kaiserslautern, Deutschland, Telefon 0631 56986, E-Mail haciendakl@gmail.com.',
          'Die Website sollte über eine SSL- beziehungsweise TLS-Verschlüsselung übertragen werden. Eine verschlüsselte Verbindung erkennen Sie an „https://“ und dem Schloss-Symbol in Ihrem Browser.',
        ],
      },
      {
        title: '2. Datenerfassung beim Websitebesuch',
        paragraphs: [
          'Bei der rein informatorischen Nutzung kann der Hosting-Server automatisch technische Daten erfassen, die zur Auslieferung der Seiten sowie für Stabilität und Sicherheit erforderlich sind.',
        ],
        bullets: ['Aufgerufene Seite', 'Datum und Uhrzeit des Zugriffs', 'Übertragene Datenmenge', 'Quelle oder verweisende Seite', 'Browser und Betriebssystem', 'IP-Adresse, soweit möglich in anonymisierter Form'],
        after: 'Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO. Server-Protokolle werden nicht zweckfremd verwendet, können jedoch bei konkreten Anhaltspunkten für eine rechtswidrige Nutzung nachträglich geprüft werden.',
      },
      {
        title: '3. Cookies',
        paragraphs: [
          'Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Sitzungs-Cookies werden nach dem Schließen des Browsers gelöscht; dauerhafte Cookies bleiben für einen festgelegten Zeitraum erhalten, um Einstellungen zu speichern.',
          'Soweit Cookies personenbezogene Daten verarbeiten, kann die Rechtsgrundlage die Vertragserfüllung nach Art. 6 Abs. 1 lit. b DSGVO, eine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO oder unser berechtigtes Interesse an einer funktionalen Website nach Art. 6 Abs. 1 lit. f DSGVO sein. Cookies können in den Browser-Einstellungen eingeschränkt oder deaktiviert werden; dadurch können einzelne Funktionen eingeschränkt sein.',
        ],
      },
      {
        title: '4. Kontaktaufnahme',
        paragraphs: [
          'Wenn Sie uns telefonisch oder per E-Mail kontaktieren, verarbeiten wir nur die Daten, die zur Bearbeitung und Beantwortung Ihres Anliegens erforderlich sind. Rechtsgrundlage ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO; bei vertragsbezogenen Anfragen gilt zusätzlich Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden nach Abschluss des Vorgangs gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
        ],
      },
      {
        title: '5. Ihre Rechte',
        paragraphs: ['Unter den jeweiligen gesetzlichen Voraussetzungen stehen Ihnen hinsichtlich Ihrer personenbezogenen Daten insbesondere folgende Rechte zu:'],
        bullets: ['Auskunft · Art. 15 DSGVO', 'Berichtigung · Art. 16 DSGVO', 'Löschung · Art. 17 DSGVO', 'Einschränkung der Verarbeitung · Art. 18 DSGVO', 'Unterrichtung · Art. 19 DSGVO', 'Datenübertragbarkeit · Art. 20 DSGVO', 'Widerruf einer Einwilligung · Art. 7 Abs. 3 DSGVO', 'Beschwerde bei einer Aufsichtsbehörde · Art. 77 DSGVO'],
      },
      {
        title: '6. Speicherdauer',
        paragraphs: [
          'Die Speicherdauer richtet sich nach der jeweiligen Rechtsgrundlage, dem Verarbeitungszweck und gegebenenfalls nach handels-, steuer- oder sonstigen gesetzlichen Aufbewahrungsfristen.',
          'Auf Grundlage einer Einwilligung verarbeitete Daten werden bis zu deren Widerruf gespeichert. Vertragsbezogene Daten werden nach Ablauf der maßgeblichen Aufbewahrungsfristen grundsätzlich gelöscht. Bei einer Verarbeitung aufgrund berechtigter Interessen erfolgt die Speicherung bis zu einem wirksamen Widerspruch, soweit keine zwingenden schutzwürdigen Gründe oder Rechtsansprüche entgegenstehen. Im Übrigen löschen wir Daten, sobald sie für ihren ursprünglichen Zweck nicht mehr erforderlich sind.',
        ],
      },
    ],
  },
};

const imprintCopy = {
  en: {
    eyebrow: 'Legal information', title: 'Imprint',
    lead: 'Provider information and legally responsible contact details for Hacienda Mexican Restaurant.',
    updated: 'Hacienda · Kaiserslautern', provider: 'Service provider', country: 'Germany',
    contact: 'Contact', manager: 'Authorized managing director', vat: 'VAT identification number',
    disputeTitle: 'Consumer dispute resolution',
    disputeText: 'We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.',
  },
  de: {
    eyebrow: 'Rechtliche Informationen', title: 'Impressum',
    lead: 'Anbieterkennzeichnung und rechtlich verantwortliche Kontaktdaten des Hacienda Mexican Restaurant.',
    updated: 'Hacienda · Kaiserslautern', provider: 'Diensteanbieter', country: 'Deutschland',
    contact: 'Kontakt', manager: 'Vertretungsberechtigter Geschäftsführer', vat: 'Umsatzsteuer-Identifikationsnummer',
    disputeTitle: 'Verbraucherstreitbeilegung',
    disputeText: 'Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.',
  },
};

const specials = [
  { image: 'wings.jpg', accent: 'sunset' }, { image: 'margarita.jpg', accent: 'gold' },
  { image: 'ribs.jpg', accent: 'chili' }, { image: 'mojito.jpg', accent: 'agave' },
];

const menuCategories = [
  {
    label: ['Starters', 'Vorspeisen'],
    items: [
      [['Sopa Hacienda', 'Sopa Hacienda'], ['Tortilla soup with chicken and vegetables', 'Tortillasuppe mit Huhn und Gemüse'], '€ 4,50'],
      [['Sopa de Frijoles Negros', 'Sopa de Frijoles Negros'], ['Mexican black bean soup · vegan', 'Mexikanische Schwarzbohnensuppe · vegan'], '€ 4,50'],
      [['Chili con Queso', 'Chili con Queso'], ['Mexican cheese dip with warm corn chips', 'Mexikanischer Käse-Dip mit warmen Mais-Chips'], '€ 8,00'],
      [['Guacamole & Chips', 'Guacamole & Chips'], ['Avocado dip with warm corn chips', 'Avocado-Dip mit warmen Mais-Chips'], '€ 8,00'],
      [['Steak Fiesta Nachos', 'Steak Fiesta Nachos'], ['Grilled steak, cheese, lettuce, sour cream and guacamole', 'Steak, Käse, Salat, saure Sahne und Guacamole'], '€ 13,95'],
      [['Mixed Appetizer Plate', 'Gemischte Vorspeisenplatte'], ['Chips, dips, cheese sticks and stuffed jalapeños', 'Chips, Dips, Cheese Sticks und gefüllte Jalapeños'], '€ 16,90'],
    ],
  },
  {
    label: ['Burritos & Quesadillas', 'Burritos & Quesadillas'],
    items: [
      [['Classic Grilled Quesadilla', 'Classic Grilled Quesadilla'], ['Cheese only', 'Nur mit Käse'], '€ 5,50'],
      [['Quesadilla Pequeña', 'Quesadilla Pequeña'], ['Cheese, onions, mild chiles and Hacienda salsa', 'Käse, Zwiebeln, milde Chilis und Hacienda-Salsa'], '€ 5,50'],
      [['Burrito de Carne Molida', 'Burrito de Carne Molida'], ['Ground beef, sour cream and Hacienda salsa', 'Rinderhackfleisch, saure Sahne und Hacienda-Salsa'], '€ 12,50'],
      [['Burrito Supremo', 'Burrito Supremo'], ['Choice of ground beef, shredded beef or chicken', 'Wahlweise Hackfleisch, Rindfleisch oder Huhn'], 'from € 14,50'],
      [['Burrito Hacienda', 'Burrito Hacienda'], ['Cheese, ground beef, beans, chili con carne and onions', 'Käse, Rindfleisch, Bohnen, Chili con Carne und Zwiebeln'], '€ 15,50'],
      [['Chimichanga', 'Chimichanga'], ['Crispy fried burrito with your choice of filling', 'Knusprig frittierter Burrito mit Füllung nach Wahl'], 'from € 13,90'],
    ],
  },
  {
    label: ['Fajitas & Grill', 'Fajitas & Grill'],
    items: [
      [['Fajitas de Carne de Res', 'Rindfleisch-Fajitas'], ['Beef, peppers and onions with tortillas and sides', 'Rindfleisch, Paprika und Zwiebeln mit Tortillas und Beilagen'], '€ 22,90'],
      [['Fajitas de Carne de Pollo', 'Hähnchen-Fajitas'], ['Chicken, peppers and onions with tortillas and sides', 'Huhn, Paprika und Zwiebeln mit Tortillas und Beilagen'], '€ 22,90'],
      [['Fajitas de Camarones', 'Garnelen-Fajitas'], ['Jumbo shrimp with broccoli and onions', 'Hummerkrabben mit Brokkoli und Zwiebeln'], '€ 25,00'],
      [['Fish Fajitas', 'Fisch-Fajitas'], ['Fish, peppers and onions with four tortillas', 'Fisch, Paprika und Zwiebeln mit vier Tortillas'], '€ 22,90'],
      [['New York Strip Steak · 300 g', 'New York Strip Steak · 300 g'], ['Hot from our charcoal grill with your choice of side', 'Heiß vom Lavasteingrill mit Beilage nach Wahl'], '€ 24,95'],
      [['Yardbird BBQ Surf & Turf', 'Yardbird BBQ Surf & Turf'], ['BBQ chicken, beef steak, shrimp and potato wedges', 'BBQ-Huhn, Rindsteak, Shrimps und Kartoffelecken'], '€ 22,95'],
    ],
  },
  {
    label: ['Hacienda Favorites', 'Hacienda Favoriten'],
    items: [
      [['CCC Burrito', 'CCC Burrito'], ['Ground beef, beans and cheese with chili con carne and queso', 'Rindfleisch, Bohnen und Käse mit Chili con Carne und Queso'], '€ 15,50'],
      [['La Hacienda', 'La Hacienda'], ['Taco, enchilada, burrito, chile relleno, rice and beans', 'Taco, Enchilada, Burrito, Chile Relleno, Reis und Bohnen'], '€ 18,00'],
      [['El Pollo Loco', 'El Pollo Loco'], ['Five grilled chicken legs with wedges and BBQ sauce', 'Fünf gegrillte Hähnchenkeulen mit Kartoffelecken und BBQ-Soße'], '€ 18,95'],
      [['Puerco a la Barbacoa', 'Puerco a la Barbacoa'], ['Three BBQ pork shish-kebabs with potatoes and beans', 'Drei BBQ-Schweinespieße mit Kartoffeln und Bohnen'], '€ 18,95'],
      [['Large BBQ Ribs', 'Large BBQ Ribs'], ['Three slabs, baked beans, fries and corn-on-the-cob', 'Drei Rippchen, gebackene Bohnen, Pommes und Maiskolben'], '€ 19,50'],
      [['Hacienda American Burger', 'Hacienda American Burger'], ['Charcoal-grilled beef with tomatoes, cucumber and onions', 'Rindfleisch vom Lavasteingrill mit Tomaten, Gurke und Zwiebeln'], 'from € 12,25'],
    ],
  },
  {
    label: ['Vegan', 'Vegan'],
    items: [
      [['Vegan Burrito', 'Vegan Burrito'], ['Grilled vegetables, Mexican beans, guacamole and salsa', 'Gebratenes Gemüse, mexikanische Bohnen, Guacamole und Salsa'], '€ 12,90'],
      [['Vegan Chimichanga', 'Vegan Chimichanga'], ['Crispy fried vegetable burrito with beans and salsa', 'Knusprig frittierter Gemüse-Burrito mit Bohnen und Salsa'], '€ 13,90'],
      [['Fajitas Vegan', 'Fajitas Vegan'], ['Grilled vegetables, tortillas, guacamole, rice and beans', 'Gebratenes Gemüse, Tortillas, Guacamole, Reis und Bohnen'], '€ 15,50'],
      [['Chile con Veggie', 'Chile con Veggie'], ['Vegan Mexican stew with three warm tortillas', 'Veganer mexikanischer Eintopf mit drei warmen Tortillas'], '€ 8,90'],
      [['Chile Burrito', 'Chile Burrito'], ['Chile con veggie, beans, salad, guacamole and salsa', 'Chile con Veggie, Bohnen, Salat, Guacamole und Salsa'], '€ 11,90'],
      [['Veggie Burger', 'Veggie Burger'], ['Vegetable patty with salad and potato wedges', 'Gemüsebratling mit Salat und Kartoffelspalten'], '€ 11,90'],
    ],
  },
  {
    label: ['Drinks', 'Getränke'],
       items: [
      [['Classic Margarita', 'Classic Margarita'], ['Tequila, triple sec, lemon juice and salt rim · 0.2 L', 'Tequila, Triple Sec, Zitronensaft und Salzrand · 0,2 L'], '€ 7,00'],
      [['Margarita de Fresa', 'Margarita de Fresa'], ['Fresh strawberry margarita · 0.2 L', 'Margarita mit frischen Erdbeeren · 0,2 L'], '€ 7,00'],
      [['Margarita de Mango', 'Margarita de Mango'], ['Fresh mango margarita · 0.2 L', 'Margarita mit frischer Mango · 0,2 L'], '€ 7,00'],
      [['La Hacienda', 'La Hacienda'], ['Three rums, orange, pineapple and lemon · 0.2 L', 'Drei Sorten Rum, Orange, Ananas und Zitrone · 0,2 L'], '€ 6,90'],
      [['Homemade Lemonade', 'Hausgemachte Limonade'], ['Strawberry, mango or mint · 0.5 L', 'Erdbeere, Mango oder Minze · 0,5 L'], '€ 5,50'],
      [['Mexican Beer', 'Mexikanisches Bier'], ['Pacifico, Modelo, Corona, Desperados, Sol or Tecate', 'Pacifico, Modelo, Corona, Desperados, Sol oder Tecate'], 'from € 5,00'],
    ],
  },
  {
    label: ['Kids & Dessert', 'Kinder & Dessert'],
    items: [
      [['One Taco or Small Burrito', 'Ein Taco oder kleiner Burrito'], ['For children under 13 · served with rice or fries', 'Für Kinder unter 13 · mit Reis oder Pommes'], '€ 6,90'],
      [['Small Grilled Hamburger', 'Kleiner Hamburger'], ['Kids menu · for children under 13', 'Kinder-Menü · für Kinder unter 13'], '€ 6,50'],
      [['Chicken Nuggets', 'Chicken Nuggets'], ['Served with French fries', 'Mit Pommes Frites'], '€ 6,50'],
      [['Churros', 'Churros'], ['Four pieces with cinnamon and sugar', 'Vier Stück mit Zimt und Zucker'], '€ 5,75'],
      [['Sopapillas', 'Sopapillas'], ['Three pieces of Mexican pastry with honey', 'Drei mexikanische Teigtaschen mit Honig'], '€ 4,75'],
      [['Fried Ice Cream', 'Fried Ice Cream'], ['Vanilla ice cream, cornflakes, cinnamon, honey and cream', 'Vanilleeis, Cornflakes, Zimt, Honig und Sahne'], '€ 5,50'],
    ],
  },
];

function Brand({ compact = false }) {
  return <a className={`brand ${compact ? 'compact' : ''}`} href="#/" aria-label="Hacienda home"><img src={`${A}hacienda-logo-v4.png`} alt="Hacienda Mexican Restaurant" /></a>;
}

const routeIds = ['home', 'menu', 'about', 'gallery', 'contact'];
const validRoutes = [...routeIds, 'privacy', 'imprint'];
const routeHref = (route) => route === 'home' ? '#/' : `#/${route}`;
const getRoute = () => {
  const route = window.location.hash.replace(/^#\/?/, '').split('/')[0];
  return validRoutes.includes(route) ? route : 'home';
};

function Header({ lang, setLang, route, menuOpen, setMenuOpen, scrolled, t }) {
  return <>
    <header className={`site-header ${route === 'home' ? 'over-hero' : 'subpage-header'} ${scrolled ? 'scrolled' : ''}`}>
      <Brand compact />
      <nav className="desktop-nav" aria-label="Main navigation">{routeIds.map((id, i) => <a className={route === id ? 'active' : ''} key={id} href={routeHref(id)}>{t.nav[i]}</a>)}</nav>
      <div className="nav-actions">
        <button className="language" onClick={() => setLang(lang === 'en' ? 'de' : 'en')} aria-label="Switch language"><span className={lang === 'en' ? 'active' : ''}>EN</span><i /><span className={lang === 'de' ? 'active' : ''}>DE</span></button>
        <a className="button button-small button-outline desktop-reserve" href="tel:+4963156986"><Phone size={15} /> {t.reserve}</a>
        <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
      </div>
    </header>
    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
      <div className="mobile-menu-top"><Brand compact /><button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button></div>
      <nav>{routeIds.map((id, i) => <a className={route === id ? 'active' : ''} key={id} href={routeHref(id)} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{t.nav[i]}</a>)}</nav>
      <a className="button button-gold" href="tel:+4963156986"><Phone size={18} /> {t.reserve}</a>
    </div>
  </>;
}

function HomePage({ t, isOpen }) {
  return <main className="page home-page">
    <section className="home-hero">
      <img className="home-hero-image" src={`${A}hacienda-hero-v2.jpg`} alt="Mexican fajitas, guacamole and a margarita at Hacienda" />
      <div className="home-hero-overlay" /><div className="hero-grain" />
      <div className="home-hero-content">
        <p className="eyebrow">MEXICAN KITCHEN · KAISERSLAUTERN</p>
        <h1>{t.welcome}.<br /><em>{langLine(t, 'Stay for the fiesta.', 'Bleib für die Fiesta.')}</em></h1>
        <p>{t.numberOne}. {t.heroText}</p>
        <div className="hero-actions"><a className="button button-gold" href="tel:+4963156986">{t.reserve}<ArrowRight size={17} /></a><a className="text-link light" href="#/menu">{t.seeMenu}<ArrowRight size={17} /></a></div>
        <div className="hero-award"><span><Star size={15} fill="currentColor" /></span><div><small>STARS &amp; STRIPES</small><strong>BEST OF GERMANY 2024</strong></div></div>
      </div>
      <div className="hero-note"><span className={isOpen ? '' : 'closed'}><Sparkles size={17} /></span><div><strong>{isOpen ? t.todayOpen : t.todayClosed}</strong><small>0631 56986</small></div></div>
      <button className="hero-scroll" type="button" onClick={() => document.getElementById('home-intro')?.scrollIntoView({ behavior: 'smooth' })} aria-label={t.scrollDiscover}><span>{t.scrollDiscover}</span><ArrowDown size={16} /></button>
      <div className="hero-index">01 — 05</div>
    </section>

    <section className="home-intro page-pad" id="home-intro">
      <div className="section-number">01</div>
      <div className="intro-lead"><div className="kicker"><span /> Hacienda Kaiserslautern</div><h2>{langLine(t, 'Come hungry. Leave happy.', 'Komm hungrig. Geh glücklich.')}</h2></div>
      <div className="intro-copy"><p>{t.aboutParas[0]}</p><a className="text-link" href="#/about">{t.nav[2]}<ArrowRight size={17} /></a></div>
    </section>

    <section className="home-award page-pad" id="home-award"><figure className="award-certificate"><img src={`${A}best-of-germany-2024.png`} alt="Best of Germany 2024 winner certificate for Hacienda Mexican Restaurant" loading="lazy" /></figure><div className="award-copy"><div className="kicker"><span /> {t.awardKicker}</div><span className="award-year">2024</span><h2>{t.awardTitle}</h2><p>{t.awardText}</p><div className="award-seal"><Star size={18} fill="currentColor" /><span>BEST OF GERMANY<br /><strong>RHEIN MAIN</strong></span></div></div></section>

    <section className="experience page-pad">
      <div className="section-head"><div><span>{t.weekly}</span><h2>{langLine(t, 'A reason to celebrate, every week.', 'Jede Woche ein Grund zum Feiern.')}</h2></div><p>{t.weeklySub}</p></div>
      <div className="experience-grid">{specials.slice(0, 3).map((item, i) => <article className={i === 1 ? 'dark' : ''} key={item.image}><div className="experience-image"><img src={`${A}${item.image}`} alt={t.specials[i][1]} loading="lazy" /></div><div className="experience-info"><span>0{i + 1}</span><div><small>{t.every} {t.specials[i][0]}</small><h3>{t.specials[i][1]}</h3></div><a href="#/menu" aria-label="Open menu"><ArrowRight /></a></div></article>)}</div>
      <p className="special-note-home">{t.specialNote}</p>
    </section>

    <section className="home-cta"><img src={`${A}restaurant.jpg`} alt="Hacienda restaurant interior" loading="lazy" /><div /><div className="home-cta-copy"><span>{t.visitKicker}</span><h2>{t.visitTitle}</h2><a className="button button-gold" href="#/contact">{t.nav[4]}<ArrowRight size={17} /></a></div></section>
  </main>;
}

function langLine(t, en, de) { return t.nav[0] === 'Home' ? en : de; }

function SubHero({ eyebrow, title, image, position = 'center' }) {
  return <section className="sub-hero"><img src={`${A}${image}`} alt="" style={{ objectPosition: position }} /><div className="sub-hero-overlay" /><div className="sub-hero-copy"><span>{eyebrow}</span><h1>{title}</h1></div><div className="sub-index">HACIENDA · KAISERSLAUTERN</div></section>;
}

function MenuPage({ t, lang }) {
  const [activeMenu, setActiveMenu] = useState(0);
  return <main className="page sub-page">
    <SubHero eyebrow={t.menuKicker} title={t.menuTitle} image="margarita.jpg" position="center 44%" />
    <section className="menu-page page-pad">
      <div className="menu-page-intro"><div className="kicker"><span /> {t.menuKicker}</div><h2>{langLine(t, 'Pick your craving.', 'Worauf hast du Lust?')}</h2><p>{t.menuIntro}</p></div>
      <div className="menu-browser">
        <div className="menu-tabs" role="tablist" aria-label="Menu categories">{menuCategories.map((category, i) => <button key={category.label[0]} className={activeMenu === i ? 'active' : ''} onClick={() => setActiveMenu(i)} role="tab" aria-selected={activeMenu === i}><span>0{i + 1}</span>{category.label[lang === 'en' ? 0 : 1]}</button>)}</div>
        <div className="menu-list" role="tabpanel"><div className="menu-category-title"><span>{menuCategories[activeMenu].label[lang === 'en' ? 0 : 1]}</span><i /></div>{menuCategories[activeMenu].items.map(item => <article className="menu-item" key={item[0][0]}><div><h3>{item[0][lang === 'en' ? 0 : 1]}</h3><p>{item[1][lang === 'en' ? 0 : 1]}</p></div><b>{item[2]}</b></article>)}<p className="menu-note">{t.menuNote}</p></div>
      </div>
    </section>
    <section className="menu-callout"><div><span>{t.kidsDay}</span><h2>{t.kidsTitle} · {t.kidsOffer}</h2></div><a className="button button-ink" href="tel:+4963156986">{t.reserve}<Phone size={17} /></a></section>
  </main>;
}

function AboutPage({ t }) {
  return <main className="page sub-page"><SubHero eyebrow={t.aboutKicker} title={t.aboutTitle} image="restaurant.jpg" position="center 45%" />
    <section className="about-page page-pad"><div className="about-images"><img src={`${A}restaurant.jpg`} alt="Dining room at Hacienda" /><img src={`${A}gallery-1.jpg`} alt="Cactus lights at Hacienda" /></div><div className="about-story"><div className="kicker"><span /> {t.aboutKicker}</div><h2>{langLine(t, 'A restaurant that feels like family.', 'Ein Restaurant, das sich wie Familie anfühlt.')}</h2>{t.aboutParas.map(p => <p key={p}>{p}</p>)}<blockquote>{t.aboutEnd}</blockquote></div></section>
    <section className="team-section page-pad"><div className="team-head"><div><div className="kicker"><span /> {t.teamKicker}</div><h2>{t.teamTitle}</h2></div><p>{t.teamText}</p></div><div className="team-gallery"><figure><img src={`${A}hacienda-team-celebration.jpg`} alt="The Hacienda team celebrating together" loading="lazy" /><figcaption><span>01</span>{langLine(t, 'Together beyond service', 'Gemeinsam über den Service hinaus')}</figcaption></figure><figure><img src={`${A}hacienda-team-staff.jpg`} alt="Hacienda restaurant staff" loading="lazy" /><figcaption><span>02</span>{langLine(t, 'Ready to welcome you', 'Bereit, Sie willkommen zu heißen')}</figcaption></figure></div></section>
    <section className="values-band"><div><span>01</span><strong>{langLine(t, 'Warm welcome', 'Herzlich willkommen')}</strong></div><div><span>02</span><strong>{langLine(t, 'Generous plates', 'Großzügige Teller')}</strong></div><div><span>03</span><strong>{langLine(t, 'Good times', 'Gute Zeiten')}</strong></div></section>
  </main>;
}

function GalleryPage({ t }) {
  const images = [['gallery-3.jpg','Ambiente'],['gallery-2.jpg','Food'],['margarita.jpg','Margaritas'],['restaurant.jpg','Hacienda'],['wings.jpg','Chicken wings'],['ribs.jpg','Spareribs'],['tequila.jpg','Tequila'],['gallery-1.jpg','Details']];
  return <main className="page sub-page"><SubHero eyebrow={t.galleryKicker} title={t.galleryTitle} image="gallery-3.jpg" position="center" /><section className="gallery-page page-pad"><div className="gallery-page-head"><div className="kicker"><span /> {t.galleryKicker}</div><h2>{langLine(t, 'A taste of the atmosphere.', 'Ein Vorgeschmack auf die Atmosphäre.')}</h2></div><div className="masonry-gallery">{images.map(([src, alt],i)=><figure className={`gallery-item item-${i+1}`} key={src}><img src={`${A}${src}`} alt={alt} loading="lazy" /><figcaption><span>0{i+1}</span>{alt}</figcaption></figure>)}</div></section></main>;
}

function ContactPage({ t, isOpen }) {
  return <main className="page sub-page"><SubHero eyebrow={t.visitKicker} title={t.visitTitle} image="tequila.jpg" position="center 52%" /><section className="contact-page page-pad"><div className="contact-main"><div className="kicker"><span /> {t.visitKicker}</div><h2>Weilerbacher Straße 110<br />67661 Kaiserslautern</h2><div className="contact-actions"><a className="button button-gold" href="https://maps.google.com/?q=Weilerbacher+Stra%C3%9Fe+110,+67661+Kaiserslautern" target="_blank" rel="noreferrer"><MapPin size={17} />{t.directions}</a><a className="text-link" href="tel:+4963156986"><Phone size={17} />+49 631 56986</a></div></div><HoursCard t={t} isOpen={isOpen} /></section></main>;
}

function HoursCard({ t, isOpen }) {
  return <div className="hours-card"><div className="hours-status"><span className={isOpen ? '' : 'closed'} />{isOpen ? t.todayOpen : t.todayClosed}</div><div className="hours-title"><CalendarDays /><h3>{t.hours}</h3></div><div className="hours-row"><span>{t.weekdays}</span><b>11:00 — 22:30</b></div><div className="hours-row"><span>{t.sunday}</span><b>12:00 — 21:30</b></div><div className="hours-row muted"><span>{t.tuesday}</span><b>{t.closedWord}</b></div><div className="lunch"><Clock3 size={17} /><span>{t.lunch}</span></div></div>;
}

function PrivacyPage({ lang }) {
  const p = privacyCopy[lang];
  return <main className="page legal-page">
    <section className="legal-hero"><div className="kicker"><span />{p.eyebrow}</div><h1>{p.title}</h1><p>{p.lead}</p><small>{p.updated}</small></section>
    <section className="legal-layout page-pad">
      <aside className="legal-contact"><span>{p.controller}</span><strong>Hacienda Mexican Restaurant</strong><address>Weilerbacher Straße 110<br />67661 Kaiserslautern<br />Germany</address><a href="tel:+4963156986">+49 631 56986</a><a href="mailto:haciendakl@gmail.com">haciendakl@gmail.com</a></aside>
      <article className="legal-content">{p.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(text => <p key={text}>{text}</p>)}{section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}{section.after && <p>{section.after}</p>}</section>)}</article>
    </section>
  </main>;
}

function ImprintPage({ lang }) {
  const p = imprintCopy[lang];
  return <main className="page legal-page">
    <section className="legal-hero imprint-hero"><div className="kicker"><span />{p.eyebrow}</div><h1>{p.title}</h1><p>{p.lead}</p><small>{p.updated}</small></section>
    <section className="legal-layout imprint-layout page-pad">
      <aside className="legal-contact"><span>{p.provider}</span><strong>Hacienda Mexican Restaurant</strong><address>Weilerbacher Straße 110<br />67661 Kaiserslautern<br />{p.country}</address><a href="tel:+4963156986">+49 631 56986</a><a href="mailto:haciendakl@gmail.com">haciendakl@gmail.com</a></aside>
      <article className="legal-content imprint-content">
        <section><h2>{p.provider}</h2><dl className="imprint-details"><div><dt>{p.manager}</dt><dd>Vadivel Gnanavel</dd></div><div><dt>{p.vat}</dt><dd>DE259727057</dd></div></dl></section>
        <section><h2>{p.contact}</h2><p>Hacienda Mexican Restaurant<br />Weilerbacher Straße 110<br />67661 Kaiserslautern · {p.country}</p><p><a href="tel:+4963156986">+49 631 56986</a><br /><a href="mailto:haciendakl@gmail.com">haciendakl@gmail.com</a></p></section>
        <section><h2>{p.disputeTitle}</h2><p>{p.disputeText}</p></section>
      </article>
    </section>
  </main>;
}

function Footer({ t }) {
  return <footer><div className="footer-main"><Brand /><p>Mexican food, cocktails<br />& good times.</p><div className="footer-nav">{routeIds.slice(1).map((id,i)=><a key={id} href={routeHref(id)}>{t.nav[i+1]}</a>)}</div><div className="footer-social"><a href="https://de-de.facebook.com/haciendakl/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a><a href="tel:+4963156986" aria-label="Call Hacienda"><Phone /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Hacienda Kaiserslautern</span><div><a href="#/imprint">{t.imprint}</a><a href="#/privacy">{t.privacy}</a></div></div></footer>;
}

function App() {
  const [lang, setLang] = useState('en');
  const [route, setRoute] = useState(getRoute());
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const onHash = () => { setRoute(getRoute()); setMenuOpen(false); window.scrollTo(0, 0); };
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('hashchange', onHash);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('hashchange', onHash); window.removeEventListener('scroll', onScroll); };
  }, []);
  useEffect(() => { document.documentElement.lang = lang; document.body.style.overflow = menuOpen ? 'hidden' : ''; }, [lang, menuOpen]);
  useEffect(() => {
    const pageName = route === 'privacy' ? t.privacy : route === 'imprint' ? t.imprint : t.nav[routeIds.indexOf(route)];
    document.title = route === 'home' ? 'Hacienda — Mexican Restaurant Kaiserslautern' : `${pageName} — Hacienda Kaiserslautern`;
  }, [route, t]);

  const now = new Date(); const day = now.getDay(); const hour = now.getHours() + now.getMinutes() / 60;
  const isOpen = day !== 2 && ((day === 0 && hour >= 12 && hour < 21.5) || (day !== 0 && hour >= 11 && hour < 22.5));
  const pages = { home: <HomePage t={t} isOpen={isOpen} />, menu: <MenuPage t={t} lang={lang} />, about: <AboutPage t={t} />, gallery: <GalleryPage t={t} />, contact: <ContactPage t={t} isOpen={isOpen} />, privacy: <PrivacyPage lang={lang} />, imprint: <ImprintPage lang={lang} /> };

  return <><Header lang={lang} setLang={setLang} route={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} t={t} />{pages[route]}<Footer t={t} /></>;
}

createRoot(document.getElementById('root')).render(<App />);
