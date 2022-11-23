# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Quinty Bos

  #### Je startniveau:
  Blauw

  #### Je focus:
  Surface plane aka Blingbling extra!
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht (link naar gekozen website):
  https://www.animal-crossing.com/new-horizons/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Homepagina, introductie van het spel, characters, dlcs, news
  <img src="readme-images/homepage1.PNG" width="375px" alt="eerste pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  Create/explore page, Hoe speel ik het spel, diepere uitleg 
  <img src="readme-images/cr1.PNG" width="375px" alt="tweede pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  #### Screenreader
- Pakt niet goed de buttons, hij selecteert ernaast (visueel)
- Bij tab pakt eerst alle tekst als gewoon ‘voertekst’. Verteld ook niet hoe je hiermee naar de broodtekst kan. Hoe switch ik van de links, naar alle tekst dat word uitgesproken?
- Laat netjes weten of het een link is, maar verteld niet gelijk de hele http
<img src="readme-images/screenreader3.JPG" width="375px" alt="linkmelding">

- Je kan skippen naar main content
- Heeft moeite met wanneer de details word verteld of alleen de links
- Buy nog verteld niet wat je dan koopt (alleen als je het helemaal laat voorlezen, tab werkt slecht)
- Verteld wat je precies kan downloaden
- Opens a new window, word verteld

- Links, volgorde is logisch
<img src="readme-images/screenreader2.JPG" width="375px" alt="linksvolgorde">

- Verteld waar je op het moment bent.
<img src="readme-images/screenreader.JPG" width="375px" alt="reducemotion">

Mogelijke oplossingen: 
- Een sneltoets waarmee je tussen links of hele context heen kan skippen (of ik heb het nog niet uitgevonden). Tevens een lijst laten zien wat dan de sneltoetsen zijn, en die ook zoveel verminderen.


  #### Muis en Toetsenbord 
- Tab werkt op alle interactieve elementen.
- Bij tab pakt eerst alle tekst als gewoon ‘voertekst’. Verteld ook niet hoe je hiermee naar de broodtekst kan. Hoe switch ik van de links, naar alle tekst dat word uitgesproken?

Mogelijke oplossingen: 
- Zoals hierboven.

  #### Motoriek (shocks, elastiekjes)
- Shocks: Alle buttons zijn goed uit elkaar gezet zodat er geen moeite is met de juiste aan te klikken. De buttons zijn ook groot genoeg om er niet naast te klikken.
- Elastiekjes: Hiermee was het vasthouden van de mobiel zonder te laten vallen de grootste uitdaging. 
<img src="readme-images/shocks.jpg" width="375px" alt="shocks">


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
- Darkmode word alleen dark op de blokjes en buttons. De achtergrond en plaatjes blijven heel vel/licht. Er is veel witruimte dus oogt de site nog steeds niet echt ’dark’.
- Er is veel contrast tussen de kleuren van de elementen, op beide kleurblinden. 
- De footer is wel erg klein voor slechtziende (wazig).
<img src="readme-images/darkmode.png" width="375px" alt="visueel">
<img src="readme-images/deureranopia.png" width="375px" alt="visueel">
<img src="readme-images/tritanopia.png" width="375px" alt="visueel">

Mogelijke oplossingen: 
- Footer verduidelijken (wat echt belangrijk is)
- Darkmode echt dark maken, zoveel mogelijk elementen donkerder maken zodat het contrast niet al te vel is. Het voelt nu niet als een darkmode, omdat het nog steeds pijn doet ana mijn ogen.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### de eerste pagina: 
  <img src="readme-images/pagina1.png" width="375px" alt="breakdown van de 1ste pagina">

  ### de tweede pagina: 
  <img src="readme-images/pagina2.png" width="375px" alt="breakdown van 2de pagina">

  ### microinteractie / dynamisch deel: 
  <img src="readme-images/menu.png" width="375px" alt="microinteractie menu">
s
</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  Dit ging goed: 
  - positioneren met position, plaatjes over plaatjes zetten etc.
  - de juiste content halen uit de site.
  - de site bestuderen, hoe doen hun dat?
  - divs gebruiken om blokken te creeren achter de content.
  <img src="readme-images/week2.png" width="375px" 

  Dit was lastig:
  - nth-last-of-type, first-of-type etc was lastig met img, hij pakte steeds alle img ipv een specifieke.
  - flexbox niet vaak gebruikt omdat het met position vaak beter ging (ik had veel content dat over elkaar heen ging). Vond het lastig werken en is ook nergens echt goed gelukt.
  - < strong > werkt ook niet.
  
  <img src="readme-images/week2-2.png" width="375px" 

  Vragen om te stellen:
  - Hoe is mijn gebruik van classes en divs? Is dit de juiste manier? Hoe zou dit beter kunnen?
  - Heb ik position te vaak gebruikt? Is dit de juiste manier? Hoe zou dit beter kunnen?
  - Ik heb veel margin en padding veranderingen gebruikt om te positioneren, is dit handig? Hoe zou dit beter kunnen?


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. bron 1
  2. bron 2
  3. ...

</details>