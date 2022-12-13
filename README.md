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
  <img src="readme-images/week2.png" width="375px" alt=""> 

  Dit was lastig:
  - nth-last-of-type, first-of-type etc was lastig met img, hij pakte steeds alle img ipv een specifieke.
  - flexbox niet vaak gebruikt omdat het met position vaak beter ging (ik had veel content dat over elkaar heen ging). Vond het lastig werken en is ook nergens echt goed gelukt.
  - < strong > werkt ook niet.
  
  <img src="readme-images/week2-2.png" width="375px" alt="">

  ### Vragen om te stellen:
  - Hoe is mijn gebruik van classes en divs? Is dit de juiste manier? Hoe zou dit beter kunnen?
  - Heb ik position te vaak gebruikt? Is dit de juiste manier? Hoe zou dit beter kunnen?
  - Ik heb veel margin en padding veranderingen gebruikt om te positioneren, is dit handig? Hoe zou dit beter kunnen?

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Het gebruik van veel margins/paddings was niet erg
  - Hetzelfde geld voor classes divs en position

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  Dit ging goed: 
  - Animatie/menu opdrachten waren leuk en redelijk makkelijk om te maken.
  - Flexbox naast elkaar zetten elementen.
  <img src="readme-images/week3-goed2.png" width="375px" alt="">  
  - Position absolute gebruiken om plaatjes over elkaar heen te zetten voor dit onderdeel:
  <img src="readme-images/week3-goed.png" width="375px" alt="">  

  Dit was lastig:
  - Het mobiel responsive maken liep ik heel erg bij vast waardoor ik veel tijd moest besteden aan het veranderen (vooral inkorten) van de css. Het had teveel position gebruikt waardoor de content te strak was gepositioneerd. Dit was moeilijk om weer losjes te krijgen. 

  - Plaatjes centreren.
  <img src="readme-images/week3-slecht.png" width="375px" alt=""> 

 ### Vragen om te stellen:
Hoofd Vragen:
- Hulp met het ‘telefoon responsive’ krijgen van de afbeeldingen. En de gekleurde blokken eronder.
- Gebruik ik goede elementen en benamingen? Teveel position of margins/paddings? Is flexbox makkelijker?
- Menu sluiten button, hoe centreer ik die het best?

Meer bijzaken:
- Hoe maak ik een img carrousel?
- Hoe maak ik de header sticky?


### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Welcome h2 maken en ac logo een h1.
  - Bewegende achtergrond plaatje , bijv van onder naar boven langzaam laten gaan, background repeat aan.
  - Hovers animatie toevoegen.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader / Muis en Toetsenbord 

Dit zou ik nog verbeteren:
- Reduce motion en skip to main content word in dezelfde zin uitgesproken. 
- Buy now knop word tegelijk met youtube in een zin verteld
- Carousel word als haakje sluit/open verteld, niet volgende/vorige
- Sluit button werkt niet door de focus:within gebruikt om te tabben, hij word onzichtbaar/overschreven.

Dit gaat al goed:
- Er word verteld hoe je de knop kan bedienen, na wat de knop precies is.
- Verteld wanneer reduce motion is ingeschakeld of niet
- Links, buttons staan logisch. 
- Koppen staan logisch, mist wel h1.
- Je word niet gespamt met regels en regels aan overbodige tekst, het is lekker straight to the point.


  #### Motoriek (shocks, elastiekjes)
Kan verbeterd worden:

Dit gaat al goed:
- Reduce motion checkbox in een label gezet waardoor de hele regel klikbaar is. Vergroot het click scherm voor slechte motoriek.
- Buttons hebben genoeg ruimte dat er geen probleem is met klikken.


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
Kan verbeterd worden:
- Met darkmode niet alles teveel op elkaar laten lijken. Het ziet er snel uit als een vlek. Teveel contrast doet ook pijn aan het oog.

Dit gaat al goed:
- Er zit voeldoende contrast tussen de elementen.
- Als een button state wat minder kleur contrast heeft word dit gecompenseerd door het groter/kleiner/schuin maken van de state. Zodat het verschil wel word gezien.

<img src="readme-images/week4.png" width="275px" alt="">  
<img src="readme-images/week4-2.png" width="275px" alt="">  
<img src="readme-images/week4-3.png" width="275px" alt="">  
<img src="readme-images/week4-inzoem.png" width="275px" alt="">  
<img src="readme-images/week4-inzoem2.png" width="275px" alt="">  



</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
 Dit ging goed:
 - Animaties maken
 - Darkmode maken
<img src="readme-images/darkmode-w3.png" width="375px" alt="">  

 Dign ging lastig:
- img carousel en animaties gaan niet samen in js
- Errors in mijn js, console
- Animaties linken, met scroll effect


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - 2 verschillende js bestanden aanmaken, page1 en page2. Zorgt ervoor dat js geen errors krijgt van elementen die niet op die pagina staan. 

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:


  ### Dit ging goed/Heb ik geleerd: 
- Voor iemand die coderen haat vond ik deze opdracht verassend leuk. Ik heb veel nieuwe kunnen leren waar ik bij de eerste codeer vakken minder aan toe kwam. Ik heb ook vind ik zelf een leuke site gekozen en dat hielp mij ook met het doorzetten. 
- Ik heb geleerd hoe ik beter kan werken met verschillende handicaps en toegangkelijkheid in mind. Contrast tussen tekst en bg, grootte van de buttons en states vond ik interessant om aan te denken. 
- Animaties en het blingbling maken van de website vond ik het leukste en ging mij het makkelijkste af. 
- Dat je niet overal classes voor hoeft te gebruiken.



  ### Dit was lastig/Is niet gelukt:
  - Responsive krijgen, werken met flexbox of grid was soms lastig. Dit in combinatie met plaatjes op een bepaalde manier over elkaar heen zetten.
  - Meer animaties en speling van elementen op een nintendo manier. Het werd soms voor mijzelf ook een beetje onoverzichtelijk met hoeveel code ik had, en wat met elkaar reageerde en wat niet. 
  - Reduce motion knop werkende krijgen.

</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. https://codepen.io/tutsplus/pen/XWZqGgX?editors=0010 Image carousel met knoppen
  2. https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/  Observeren van een animatie met scroll
  3. https://www.w3schools.com/howto/howto_css_custom_checkbox.asp Checkbox maken
  4. Alle media is van Animal Crossing Nintendo https://www.animal-crossing.com/new-horizons/


</details>