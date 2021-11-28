import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  private lugar:any[] = [{
    nombre: "Atlixco",
    alias: "La ciudad de las flores",
    image: "assets/img/Atlixco/home.jpg",
    artesania:"Barro natural y policromado, así como talavera, camisas bordadas y velas.",
    descripción: "Atlixco es una ciudad central de México ubicada a los pies del volcán Popocatépetl. Es conocida por el cultivo de flores. En la plaza El Zócalo, el Palacio Municipal tiene murales coloridos que ilustran la historia local. Los edificios coloniales incluyen el Ex-Convento del Carmen, que actualmente alberga un centro cultural y un pequeño museo de arqueología, y la iglesia La Merced, con una fachada barroca ornamentada. El cerro San Miguel tiene vistas panorámicas de la ciudad.",
    ubicación: "A 40 min de Puebla; 1 h de Tlaxcala; 1:15 h de Cuautla, 2 h de Cuernavaca; 2:30 h de CDMX, Pachuca o Taxco; y 2: 45 de Xalapa.",
    gastronomia:"Prueba la rica cecina que presume este Pueblo Mágico en los puestos del mercado Benito Juárez. El platillo se  sirve acompañado de ensalada de nopales, cebollitas asadas y aguacate. Pregunta además por la barbacoa, el consomé atlixquense y los mixiotes de carnero, sin olvidar los exquisitos helados de exóticos sabores preparados con frutos de la región.",
    visitaNombre1:"Cerro de San Miguel",
    descripcionVisita1:"Desde el centro de la ciudad, siguiendo los ornamentos de flores y árboles originarios de este Pueblo Mágico, la ruta te conducirá  al Cerro de San Miguel donde podrás inmortalizar tu visita con una hermosa postal del volcán Popocatépetl, desde ese punto podrás admirar la ermita dedicada al Arcángel San Miguel. El 29 de septiembre este cerro se llena de fiesta, costumbres y tradiciones, como sede del festival Huey Atlixcáyotl.",
    visitaNombre2:"Parroquia de Santa María de la Natividad",
    descripcionVisita2:"Camina por la famosa iglesia de Santa María de la Natividad construida en el año de 1644; este hermoso templo destaca por sus dos altares, de estilo churrigueresco, que muestran obras de renombrados artistas atlixquenses, incluido el poblano Luis Berrueco.",
    visitaNombre3:"Mural Danzantes del Atlixcáyotl",
    descripcionVisita3:"Recorre los 87 escalones que conforman la llamada “Escalera Ancha”, en donde encontrarás un hermoso mural que retrata a la china atlixquense y al  charro de a pie, personajes representativos del tradicional festival Huey Atlixcáyotl, nombrado Patrimonio Cultural del Estado desde 1996."    
  },
  {
    nombre: "Cuetzalan",
    alias: "Entre montañas y bosques",
    image: "assets/img/Cuetzalan/home.jpg",
    descripción: "Cuetzalan es el primer Pueblo Mágico del estado recibió el nombramiento en el año 2002; está enclavado en la exuberante Sierra Norte de Puebla. En tu visita podrás admirar maravillosos paisajes coronados por su mística neblina; podrás admirar la riqueza y cultura de sus pueblos originarios en sus danzas, gastronomía y artesanías.",
    ubicación: "Para llegar toma la autopista 120 y en 3 horas, recorrerás los 172 kilómetros que separan este Pueblo Mágico de la ciudad de Puebla.",
    gastronomia:"Para que tu experiencia sea total no olvides degustar el riquísimo mole de pollo acompañado de arroz rojo, el chilpozontle, cecina ahumada servida con tlayoyos, frijoles con xocoyoli, pipián ranchero que se cocina con chiltepín, chayote de tierra y ajonjolí molido. Disfruta del espirituoso Yolixpa, una taza de café o un vino de frutas.",
    visitaNombre1:"Parroquia de San Francisco de Asís",
    descripcionVisita1:"En el centro de la localidad se erige con una imponente torre de 60 metros de altura la parroquia de San Francisco de Asís, construida en el siglo XVII. Frente a ella, el palo ceremonial donde se realiza parte de la ceremonia ritual de “los voladores” catalogado como Patrimonio Cultural Inmaterial de la Humanidad.",
    visitaNombre2:"Tianguis Dominical",
    descripcionVisita2:"Para conocer y apreciar la vida cotidiana en esta comunidad, asiste al tianguis dominical, podrás comprar, de primera mano, diversos productos de la región como vainilla, café, mamey, plátanos, textiles, especias y más. ",
    visitaNombre3:"Santuario de Nuestra Señora de Guadalupe",
    descripcionVisita3:"Sin duda un punto obligado es la “iglesia de los jarritos”, el Santuario de Nuestra Señora de Guadalupe. Antes de entrar al inmueble podrás admirar parte del interesante arte mortuorio al recorrer las tumbas y mausoleos que lo preceden.",
    visitaNombre4:"Yohualichan",
    descripcionVisita4:"En tu visita podrás conocer ”La casa de la noche”, el centro ceremonial Yohualichan, considerado el primer gran asentamiento totonaco antes de su migración al Tajín, en este sitio se llevan a cabo aún, vistosas ceremonias llenas de color como la de los voladores y quetzalines."  
  },
  {
    nombre: "Chignahuapan",
    alias: "El lugar de las nueve aguas",
    image: "assets/img/Chignahuapan/home.jpg",
    descripción: "Chignahuapan es el “lugar sobre los nueve ojos de agua”, en este tranquilo y  pintoresco municipio encontrarás aguas termales, coloridos murales, misticismo y tradiciones, además de la habilidad de sus artesanos para elaborar esferas navideñas, actividad tradicional de este destino.",
    ubicación: "Por la carretera federal Puebla-Chignahuapan harás 2 horas de camino  o 1 hora 30 minutos por la autopista Zacatlán-Chignahuapan.",
    gastronomia:"Barbacoa de hoyo, mole poblano, chicharrón prensado, pollo en hongo, escamoles, tlacoyos, carnitas estilo Chignahuapan y pan relleno de queso son sólo algunas de las exquisiteces que podrás disfrutar en este Pueblo Mágico del que seguro te llevarás un excelente sabor de boca.",
    visitaNombre1:"Basílica de la Inmaculada Concepción",
    descripcionVisita1:"Asómbrate con la impresionante imagen de la Inmaculada Concepción, tallada en cedro, que con sus 14 metros de altura es considerada la imagen religiosa bajo techo más grande de Latinoamérica.",
    visitaNombre2:"Santuario del Honguito",
    descripcionVisita2:"El Santuario del Honguito, es un templo que alberga un hongo petrificado encontrado en 1880. En este hongo se han identificado varias imágenes, entre ellas la de un Cristo crucificado, a quien se debe el nombre de “Nuestro Señor del Honguito”. Cada 3 de mayo se organizan bailes y misas en honor a la imagen.",
    visitaNombre3:"Kiosko Mudéjar",
    descripcionVisita3:"Camina y tómate una foto por la plaza que exhibe en su centro un kiosco pintado con colores vivos, siguiendo el estilo decorativo mudéjar. La estructura fue levantada a principios del siglo XX con maderas dobles y es el único kiosco de todo México construido en madera y con una fuente en su interior.",   
  },
  {
    nombre: "Cholula",
    alias: "Milenaria urbe mesoamericana",
    image: "assets/img/Cholula/home.jpg",
    descripción: "Camina, recorre y disfruta Cholula, destino que resguarda a la Gran Pirámide o Tlachihualtépetl, considerado el basamento piramidal más grande del mundo, en cuya cima se ubica el santuario de la Virgen de los Remedios.Admira su arquitectura colonial y descubre si este Pueblo Mágico alberga 365 iglesias.",
    ubicación: "Cholula es el Pueblo Mágico más cercano a la capital, sólo los separa un recorrido de 20 minutos por la Recta a Cholula.",
    gastronomia:"En Cholula se siguen honrando las raíces indígenas y su gastronomía es muestra de ello: patas de elefante hechas de maíz blanco o azul, exóticas cuetlas y por supuesto la gran variedad de guisados elaborados con productos ancestrales como los alaches o flor de calabaza.",
    visitaNombre1:"San Francisco Acatepec",
    descripcionVisita1:"En la localidad de San Francisco Acatepec podrás admirar la hermosa fachada policromada de talavera y ladrillo rojo del templo de San Francisco, así como el impresionante altar mayor decorado con molduras doradas.",
    visitaNombre2:"Templo de Santa María Tonantzintla",
    descripcionVisita2:"A pocos kilómetros de Cholula se encuentra el Templo de Santa María Tonantzintla, en la junta auxiliar del mismo nombre; este templo es claro ejemplo del arte barroco indígena del siglo XVIII.  Los motivos que lo decoran son variados e incluyen elementos fusionados de las culturas española e indígena.",
    visitaNombre3:"Pirámide de Cholula",
    descripcionVisita3:"Al visitar la pirámide de Cholula te adentrarás en uno de los sitios arqueológicos más grandes de Latinoamérica,  puedes recorrer parte de su interior y conocer sus catacumbas o buscar desde la cima, el mejor ángulo para captar la imponente belleza del volcán Popocatépetl.",   
  },
  {
    nombre: "Huauchinango",
    alias: "Lugar rodeado de árboles",
    image: "assets/img/Huanchinango/home.jpg",
    descripción: "Si eres amante de la naturaleza y las actividades extremas, Huauchinango es el destino ideal para ti. Rodeado de ríos, cascadas y montañas, es el sitio perfecto para realizar actividades al aire libre como ciclismo, senderismo, pesca, recorridos acuáticos y mucho más.",
    ubicación: "Recorre los 170 kilómetros que separan a Huauchinango de la capital del estado en 2 horas 40 minutos por la autopista 132 D.",
    gastronomia:"Es imprescindible que pruebes el pollo en chiltepín y cacahuate, huevo en salsa morita, mole serrano con arroz, adobo con hongos y los tradicionales molotes para que tu visita sea completa.",
    visitaNombre1:"Santuario de Nuestro Señor Jesucristo en su Santo Entierro",
    descripcionVisita1:"El convento agustino del siglo XVI alberga actualmente al Santuario del Señor en su Santo Entierro, patrón de la comunidad. Su construcción austera recuerda los templos medievales que te ofrecen una atmósfera de calma y meditación.",
    visitaNombre2:"Plaza de la Constitución",
    descripcionVisita2:"Para admirar una típica estampa provinciana, disfruta de la Plaza de la Constitución, rodeada de truenos, jacarandas, palmeras y fresnos; que ofrecen abrigo a las aves locales. Su fuente y kiosko son el escenario central de la actividad comercial en la que podrás encontrar delicias locales como  tamales, cacahuates, pepitas y vino tradicional.",
    visitaNombre3:"Centro Agroturístico Michu",
    descripcionVisita3:"El lugar ideal para conocer la rica vegetación de la zona, recorrer cultivos e incluso adquirir productos como arándano, algodón, aloe, azafrán, caña de jabalí y otras más, es el Centro Agroturístico Michu.",   
    visitaNombre4:"Mercado de Plantas Isabel Díaz Castilla, Tenango de las Flores",
    descripcionVisita:"En el mercado de Tenango de las Flores, encontrarás todo lo necesario para adornar diferentes espacios; hogar, oficina o jardín. Prueba combinaciones con orquídeas, bromelias, azaleas, y violetas, además de árboles de canela, piña, naranja, magnolia o pimienta."   
  },
  {
    nombre: "Pahutlán",
    alias: "Dominios del papel artesanal",
    image: "assets/img/Pahutlan/home.jpg",
    descripción: "El lugar de grandes aguacates o pahuas, es cuna de papel amate, artesanía elaborada con la corteza de árbol, en la época prehispánica se utilizaba en las ceremonias a los dioses y en San Pablito Pahuatlán, se mantiene su elaboración artesanal.",
    ubicación: "Para llegar a Pahuatlán desde la capital toma la autopista 119 D o Arco Norte, y llegarás en 3 horas y media.",
    gastronomia:"La gastronomía en Pahuatlán es rica en ingredientes y preparación tradicional,  son famosos sus tamales de hollejo, los molotes bañados de salsa verde o roja, el rico atole de cacahuate, piña o mora, además del café,  tradicional en esa región del estado.",
    visitaNombre1:"Jardín botánico Santillan",
    descripcionVisita1:"El recorrido por este jardín botánico te permitirá conocer y aprender de la amplia colección de plantas de la región, además de su cuidado e importancia. Al concluir el recorrido disfrutarás de los famosos licores preparados con productos locales como acachul, piña, mora o uva silvestre. ",
    visitaNombre2:"Mirador de Ahila",
    descripcionVisita2:"En el mirador de Ahila, comunidad ubicada en el cerro del mismo nombre, podrás llevar a cabo actividades como senderismo o ciclismo de montaña para disfrutar, entre otras maravillas, del avistamiento de aves.",
    visitaNombre3:"Kiosco Zaragoza y Parroquia de Santiago Apóstol",
    descripcionVisita3:"Disfruta de la paz y tranquilidad que ofrece este rincón de la provincia poblana, en su kiosco podrás disfrutar la presentación de huapangueros que interpretan melodías tradicionales. La parroquia de Santiago Apóstol, construida en el siglo XVI por la orden de San Agustín, te transportará en el tiempo", 
    vistaNombre4:"Puente Colgante de Xolotla",
    descripcionVisita4:"Para los amantes de la adrenalina y los paisajes naturales, recorrer los 60 metros de longitud del Puente Colgante de Xolotla, será una maravillosa experiencia. El Puente Colgante Miguel Hidalgo y Costilla une a la comunidad de Pahuatlán del Valle con la de Xolotla y cruza justo encima del río Pahuatiltla."

  },
  {
    nombre: "Tetela de Ocampo",
    alias: "Retratos de la historia nacional",
    image: "assets/img/Tetela/home.jpg",
    descripción: "Tetela de Ocampo es el más reciente Pueblo Mágico, su legado histórico y cultural se puede apreciar en los magníficos murales. Su privilegiada ubicación garantiza espectaculares vistas desde su mirador. El recorrido por sus calles empinadas con viviendas encaladas te hará sentir que el tiempo se detuvo en ese lugar.",
    ubicación: "Para llegar a Tetela, desde la capital del estado, toma la autopista Zacatlán – Chignahuapan, el recorrido total será de 3 horas.",
    gastronomia:"Gorditas de alberjón, tamales de milpa acompañados de un café de olla, tixmole con carne de res, pollo o cerdo, o guisado de chayotextle, es decir raíz del chayote, son solo algunas de las delicias que podrás degustar en ese Pueblo Mágico.",
    visitaNombre1:"Museo de los Tres Juanes",
    descripcionVisita1:"Para conocer la importancia histórica de este Pueblo Mágico y sus habitantes, visita el museo de los Tres Juanes, en el encontrarás desde piezas prehispánicas halladas en la región, hasta objetos que muestran la  participación de los tetelenses en diversos momentos históricos del país, como la batalla del 5 de mayo.",
    visitaNombre2:"Casa Museo Tlapalcalli",
    descripcionVisita2:"El inmueble, otrora estudio del artista plástico Rafael Bonilla Cortés, resguarda actualmente esculturas, relieves y parte de la obra pictórica del tetelense, en la Casa Museo Tlapalcalli podrás apreciar paisajes, retratos, desnudos y escenas cotidianas de la vida rural de Tetela.",
    visitaNombre3:"Iglesia de Santa María de la Asunción",
    descripcionVisita3:"En la parte más alta de Tetela se erige el templo a Santa María de la Asunción, es un recinto construido en el siglo XIX de estilo gótico con cruz latina; su estructura, iconografía y elementos ornamentales valieron para que el inmueble fuera nombrado en 2012 ”Iglesia del año”.",
    visitaNombre4:"Murales históricos",
    descripcionVisita4:"Al caminar por las calles del centro de Tetela conocerás la historia viva de esa localidad por medio de sus murales. Ubicados en las paredes laterales del Palacio Municipal, cuentan con dramatismo los pormenores de este glorioso episodio donde los tetelenses y otros serranos vencieron a los franceses."
  }, 
  {
    nombre: "Tlatlauquitepec",
    alias: "Cerro que colorea",
    image: "assets/img/Tlatlauquitepec/home.jpg",
    descripción: "El “Jardín de la Sierra” te recibirá con su maravillosa flora y fauna; cascadas y cuevas, además de su exquisita gastronomía, enmarcada en la calidez de su gente.",
    ubicación: "A 130 kilómetros de la ciudad de Puebla y dos horas y media por la autopista 129D.",
    gastronomia:"Este Pueblo Mágico te ofrece una gran variedad de platillos, entre ellos, los ricos tlayoyos de alberjón, el mole ranchero, el chilposonte de carne de res o cerdo acompañado de verduras de la región. Las carnes ahumadas tienen un sabor característico en este destino.",
    visitaNombre1:"Ex Convento Franciscano de Santa María De La Asunción",
    descripcionVisita1:"El inmueble franciscano construido en 1531, cuenta con un techo de teja de 4 aguas que se divide en tres cuerpos, una de sus principales características es que cuenta con 32 arcos labrados en cantera rosa.",
    visitaNombre2:"Cerro cabezón",
    descripcionVisita2:"Esta región cuenta con accidentes geográficos impresionantes, uno de ellos es la montaña de superficie caliza llamada “Cerro cabezón”, al amanecer la luz del sol reflejada en esta montaña ofrece un maravilloso espectáculo.",
    visitaNombre3:"Rincón de los Recuerdos",
    descripcionVisita3:"Encontrarás toda clase de objetos: desde fósiles, piezas prehispánicas, timbres y monedas antiguas, hasta baúles, butacas de cine, máquinas de coser y de escribir; además de armas, fotografías y documentos del Tlatlauquitepec de hace más de un siglo.",   
    visitaNombre4:"Iglesia del Cerrito",
    descripcionVisita4:"Recorre los 165 escalones para subir a la Iglesia del Cerrito, desde ahí la vista al centro histórico, para tomar aire fresco, te ofrecerá la magia y tranquilidad de la provincia"
  }, {
    nombre: "Xicotepec",
    alias: "Tesoro con aroma a café",
    image: "assets/img/Xicotepec/home.jpg",
    descripción: "Rodeado de montañas, este Pueblo Mágico se ubica en el corazón de la Sierra Madre Oriental, es un mosaico de vegetación, diversidad climatológica, barrancos, montañas y cuerpos de agua. ¿Sabías que fue capital de la República Mexicana durante tres días en 1920?.",
    ubicación: "A 180 km de la Ciudad de Puebla, harás 3 horas conduciendo por la Autopista Arco Norte y la carretera 119D, o por la Autopista Tlaxco-Tejocotal y tomando la desviación a Xicotepec.",
    gastronomia:"La gastronomía de Xicotepec es rica gracias a los frutos de su tierra, especialmente el café de altura. No dejes de probar la cecina con enchiladas, los quesos, los guisados de chiltepín, las chicatanas y los quelites.",
    visitaNombre1:"Monumental Virgen de Guadalupe",
    descripcionVisita1:"Camina por el sendero que te llevará a la Virgen de Guadalupe monumental, de 23 metros de altura, erigida sobre el banco de piedras del barrio El Tabacal, en donde de acuerdo a la leyenda, la virgen apareció.",
    visitaNombre2:"La Xochipila",
    descripcionVisita2:"Esta peña fue centro ceremonial, en la época prehispánica, dedicada al dios mexica Xochipilli, visita este interesante sitio y descubre porqué es tan especial.",
    visitaNombre3:"Sendero y mirador de la Cruz Celestial",
    descripcionVisita3:"El camino de piedra que en el pasado llevaba a Xicotepec es la ruta actual para conocer la Cruz Celestial y el espectacular mirador de cristal desde lo alto del cerro Coxolitepetl.",
    visitaNombre4:"Parroquia de San Juan Bautista",
    descripcionVisita4:"Fue un cementerio agustino, su primera estructura fue destruida por un incendio, hasta que en el siglo XVIII fue reconstruida con una marcada influencia gótica, evidente en la ventana tipo rosetón de su fachada."   
  }, 
  {
    nombre: "Zacatlan",
    alias: "Gran huerto de la sierra",
    image: "assets/img/Zacatlan/home.jpg",
    descripción: "Un pueblo reconocido por su clima fresco y gastronomía, en el que abundan los manzanos, perales y ciruelos, una combinación que lo hacen un destino que no te puedes perder.",
    ubicación: "",
    gastronomia:"",
    visitaNombre1:"Museo de Relojes y Autómatas",
    descripcionVisita1:"La visión de don Alberto Olvera Hernández, se convirtió en un museo que da cuenta de cómo el hombre ha medido el tiempo, desde los relojes solares hasta su evolución a las maquinarias actuales.",
    visitaNombre2:"Plaza de Armas",
    descripcionVisita2:"El principal atractivo de esta plaza es un reloj monumental cubierto de flores, fue instalado en 1986 por Relojes Centenario. Tómate un momento para admirar este pintoresco lugar con un rico refresco de manzana",
    visitaNombre3:"Parroquia de San Pedro y San Pablo",
    descripcionVisita3:"La versión más conocida de la construcción de esta iglesia apunta a mediados del siglo XIX, tiene una vistosa fachada de cantera gris y recibe este nombre porque en su interior las figuras de San Pedro y San Pablo resguardan la imagen de un Cristo en un altar blanco laminado en oro.", 
    visitaNombre4:"Bodega Delicias",
    descripcionVisita4:"Entra al cuarto de máquinas para atestiguar cómo se transforman el membrillo, el durazno, la mora azul, la zarzamora, el capulín y la ciruela, en deliciosos vinos, cremas, refrescos y mermeladas."
  }
  ]
  constructor() { }
  getLugar(){
    return this.lugar
  }
  getInfo(idx:any){
    return this.lugar[idx];
}
}
