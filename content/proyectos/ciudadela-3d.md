---
name: Ciudadela 3D
summary: "Montevideo amurallado hacia 1810, reconstruido en 3D en el navegador y dibujado a tinta como un plano de época. Se puede sobrevolar, caminar, mover los años hasta hoy y jugar."
status: En curso            # En curso, Pausado, Terminado...
description: "Montevideo amurallado hacia 1810, reconstruido en 3D y dibujado a tinta. Recorré la Ciudadela, las murallas y las calles coloniales desde el navegador."
statusTone: prod            # prod = azul (en curso), ok = verde (terminado), soon = gris (pausado/después)
stack: ["Three.js", "OpenStreetMap", "Overture Maps"]
started: "Nov 2026"
order: 1                    # el número más bajo aparece primero
cover: /img/blog/montevideo-3d/v05-calle-san-carlos.jpg   # imagen para compartir el proyecto
links:
  - { label: Visor, url: "https://claude.ai/artifact/26gTs2uiDTLYcDdiVtcDTx" }
log:
  - { when: "v0.1 a v0.4", text: "El primer 3D realista, con texturas propias y la capa de certeza.", done: true }
  - { when: "v0.5", text: "El salto al dibujo a tinta, el plano de 1810 en el suelo y el calce con la ciudad de hoy.", done: true }
  - { when: "v0.6 y v0.7", text: "63 manzanas del catastro de Capurro, la Ciudadela según Cardozo y el paseo guiado.", done: true }
  - { when: "v0.9", text: "La línea de tiempo de 1724 a 2026 y el modo juego.", done: true }
  - { when: "Último tramo", text: "La ciudad entre 1867 y hoy, completada con Overture Maps.", done: true }
  - { when: "v43 a v53", text: "La puerta de entrada: bienvenida, recorrido por San Carlos, carteles, fotos de época y un buscador que lleva.", done: true }
  - { when: "Próximo", text: "El foso del frente sur y la ubicación del Portón de San Juan." }
---

Armé una reconstrucción en 3D de Montevideo amurallado hacia 1810 que corre en el navegador, sin instalar nada. Está la Ciudadela, las murallas, las calles con sus nombres coloniales y las casas, todo dibujado a tinta como un plano de época. Se puede sobrevolar, caminar por las calles, mover los años hasta hoy y jugar a encontrar personajes de la historia.

Desde el principio me puse una regla que mandó sobre todas las demás: **esto es historia**. Lo que aparece en pantalla es una afirmación sobre el pasado, así que cada pieza dice de dónde sale y qué tan segura es: *documentado*, *aproximado*, *conjetural* o *ambientación*. Lo que no tiene fuente queda marcado como supuesto. Y usé sólo fuentes libres: OpenStreetMap, no Google.

Acá cuento cómo fue, etapa por etapa: el primer 3D realista, el salto al dibujo a tinta, la ciudad catastro por catastro, la línea de tiempo, el modo juego, el tramo que llena la ciudad entre 1867 y hoy, y por último cómo se entra.

## Etapa 1: el primer 3D, realista (v0.1 a v0.4)

Arranqué con un 3D "de videojuego": casas blancas con techos de teja, pasto verde, calles de tierra y la Ciudadela en piedra gris. Se podía volar por arriba o caminar, con un minimapa, un selector «Ir a…» y una capa de **certeza** que pinta cada pieza según qué tan segura es.

<figure class="fig">
  <img src="/img/blog/montevideo-3d/v04-vista-aerea.jpg" alt="Vista aérea de la v0.4: casas blancas con techos de teja, pasto verde y la Iglesia Matriz, con el minimapa abajo a la derecha" width="1280" height="800">
  <figcaption>La v0.4: el 3D realista, con texturas de piedra, cal, teja y pasto.</figcaption>
</figure>

- **Tecnología.** Three.js en una página estática, sin compilación: la abrís y anda. Todos los datos (coordenadas, medidas, años, textos y fuentes) viven en un solo archivo, `data.js`, y el mundo se levanta a partir de ahí.
- **Texturas propias.** En la v0.4 las texturas se generaban en el navegador, sin imágenes de terceros: granito de Montevideo en sillería, revoque a la cal, teja canal, azoteas de ladrillo, calles de tierra (el empedrado sistemático llega recién hacia 1835) y el agua barrosa del Río de la Plata.
- **La v0.1 tenía errores gruesos,** y en la v0.2 los corregí con fuentes:
  - la muralla era una línea recta, y pasó a seguir las calles de hoy, obra por obra;
  - la Matriz tenía las torres y la cúpula terminadas, cuando en 1810 estaban a medio levantar;
  - el Cabildo estaba completo, cuando seguía en obra;
  - las casas tenían colores fuertes, que son del siglo XIX: en 1810 casi todo era encalado blanco.

El resultado quedó prolijo pero genérico. Parecía cualquier ciudad colonial y no transmitía lo más importante: que era una reconstrucción, con incertezas.

## Etapa 2: investigar antes de dibujar

Cada medida del modelo sale de una fuente, y cada fuente está numerada (S1, S2…) en el código y en la ficha de cada lugar. Primero hice un informe de investigación sobre las fortificaciones, la Matriz, el Cabildo y el trazado. Después fui sumando planos y documentos, muchos bajados a mano, porque los archivos digitales rechazan a los robots.

<div class="table-wrap">

| Fuente | Qué aportó |
| --- | --- |
| Plano de Diego Cardozo, 1744 (S29) | El interior de la Ciudadela, los nombres de sus cuatro baluartes y la medida de caras y flancos con su escala de toesas. Mostró escaleras, no rampas. |
| Plano anónimo c. 1806, Biblioteca Nacional (S41) | Las baterías de la plaza y sus cañones, con calibres. |
| Plano de José del Pozo, 1812 (S54) | 22 baterías con nombre, y qué estaba hecho (rosa) y qué sólo proyectado (amarillo). |
| Plano de José María Reyes, 1829 (S43) | La densidad de casas más cercana a 1810 de todo el catálogo. |
| Plano de 1840 (S37) | Confirmó los nombres coloniales de todas las calles, en el mismo orden. |
| Catastro de Capurro, c. 1867 (S40) | Lote por lote, lo edificado de cada manzana de la Ciudad Vieja y de la Ciudad Nueva. |
| Planos de la Biblioteca Nacional (S41 a S53) | Revisados uno por uno: lo que aporta cada uno quedó anotado. |

</div>

Cuando dos fuentes no coinciden, el modelo lo dice. Por ejemplo, Cardozo acota 24 pies de muro, pero no queda claro desde dónde se miden. No cambié esa altura y dejé la duda escrita.

## Etapa 3: del 3D realista al dibujo a tinta (v0.5)

El gran cambio fue dejar el realismo y dibujar la ciudad como un grabado: papel, tinta y rayado. Un 3D realista promete más certeza de la que hay. Un dibujo se lee como lo que es: una interpretación de las fuentes.

<figure class="fig">
  <img src="/img/blog/montevideo-3d/v05-calle-san-carlos.jpg" alt="Caminando por la Calle San Carlos (hoy Sarandí) en la v0.5: casas con rejas y balcones dibujadas a tinta sobre papel" width="1280" height="800">
  <figcaption>La v0.5: la Calle de San Carlos (hoy Sarandí), dibujada a tinta.</figcaption>
</figure>

El método y el código del dibujo los tomé del visor de Buenos Aires de 1867 de mormonnegro ([baires-interactivo](https://github.com/mormonnegro/baires-interactivo), licencia MIT), citado como fuente S33. De Buenos Aires no tomé ningún dato.

1. **Un shader de tinta.** Las paredes son papel y su sombra se dibuja con rayado diagonal. Una pasada final traza el contorno donde la profundidad salta y le agrega el grano del papel y la viñeta. Cada material dice qué es (piedra, pared, teja, tierra, pasto), no cómo se ve.
2. **El plano en el suelo.** Dibujé un plano de 1810 con los mismos datos del modelo: costa con olas, manzanas rayadas, murallas, nombres coloniales, escala en varas y norte. El suelo y las azoteas lo calcan, así que desde arriba la ciudad se lee como un plano. La cartela aclara que es una reconstrucción y no un documento de época.
3. **El calce con la ciudad de hoy.** Ajusté la cuadrícula contra 19 calles de la cartografía de la Intendencia: gira 21,85°. Así, «Ver lo de hoy» estampa las calles actuales en rojo sobre el plano viejo.
4. **El relieve.** Curvas de nivel de 2 m, interpoladas. Todo se apoya en el terreno.
5. **Color aparte.** Un botón pasa a la misma ciudad pintada. Después le sumé más verde: una aguada en el pasto y los árboles, como en los planos iluminados a mano.

También llegaron los patios con frutales, parras y aljibes (supuesto: se sabe que había, no dónde), el buscador de calles y esquinas, y los frentes en múltiplos de 5 varas.

## Etapa 4: la ciudad de verdad, manzana por manzana (v0.6 y v0.7)

Cambié las casas generadas al azar por las del catastro. Del catastro de Capurro (libros 1 a 4) pasé 63 manzanas de la Ciudad Vieja, lote por lote, con sus patios. Es de c. 1867, pero es el dato lote por lote más cercano a 1810 que hay. Descarté lo que cae fuera de las murallas de 1810 o encima de la Matriz y el Cabildo, y dejé la altura y las fachadas marcadas como supuestas.

- **La Ciudadela, según Cardozo.** Medí sobre su plano las caras y los flancos de los baluartes, y ordené el interior según su leyenda: iglesia, casas del capellán y del gobernador, cuarteles, almacenes y aljibes.
- **Baterías y murallas, según del Pozo (1812).** Calcé su plano sobre el modelo para tomar nombres y existencia, no medidas, porque fuera de la cuadrícula es esquemático.
- **El foso del frente norte.** Un foso seco tallado en la roca (1794-1806), con escarpa, contraescarpa y un puente frente al Portón de San Pedro. El del sur no lo dibujé: en 1810 no estaba terminado.
- **La Plaza Matriz,** documentada: en 1810 era de tierra, sin árboles ni fuente, con veredas de 3 varas y postes de madera, y la feria de verdura del lado sur.
- **El paseo.** Tenía un primer juego de ubicar lugares y lo cambié por un vuelo guiado, como un bus turístico: 18 paradas que cuentan qué era cada lugar.

## Etapa 5: la línea de tiempo, hasta hoy (v0.9)

La línea de tiempo va de 1724 a 2026. No invento nada a mano: cada lugar lleva sus años, tomados de fechas con fuente, y el visor sólo muestra lo que existía en el año elegido.

- **1833 y 1877.** Las murallas se derriban desde 1833 y la Ciudadela se demuele en 1877. Donde estaban queda terreno llano, y el plano del suelo se vuelve a dibujar sin lo demolido.
- **1867, la Ciudad Nueva.** Con los libros 5 y 6 de Capurro sumé 48 manzanas fuera de las murallas.
- **2026, la ciudad de hoy.** Los edificios salen de OpenStreetMap (licencia ODbL): planta y pisos reales, fachadas modernas genéricas. OSM cubre cerca del 40 % de las manzanas. Al principio lo que faltaba quedaba vacío en vez de inventarlo, porque elegí la opción libre y no Google Maps. Después lo completé con Overture Maps (lo cuento en la etapa 7).
- **La Plaza Independencia.** El Monumento a Artigas (1923) y el Mausoleo (1977) los armé con los datos de OSM de la plaza, que bajé con overpass-turbo, y con fotos de Commons de licencia libre. Las figuras de la estatua y del friso son genéricas, y lo digo.

## Etapa 6: jugar sin mentir (v0.9)

Después convertí el visor en algo para recorrer y jugar, con una condición: separar siempre el juego del dato.

<figure class="fig">
  <img src="/img/blog/montevideo-3d/v09-retrato-artigas.jpg" alt="Una pieza detrás de una puerta en la Calle San Fernando: el retrato de José Gervasio Artigas en un cuadro con su placa" width="1000" height="700">
  <figcaption>Detrás de una puerta de la Calle San Fernando (hoy Juan Carlos Gómez): Artigas, como un cuadro con su retrato real.</figcaption>
</figure>

- **Caminar.** Lo que el año elegido esconde no se pisa ni choca, y desde adentro de un edificio de hoy siempre se puede salir.
- **Los cañones.** Todos se disparan, con bala, humo y salpicadura. Cerca de uno podés apuntar: la cureña gira hasta 35° a cada lado y el tubo sube entre -3° y 20° hacia donde mirás. La ficha aclara cuántos cañones y de qué calibre tenía la Ciudadela según el plano de c. 1806, y que el tiro es un juego.
- **Puertas y ventanas.** Se abren todas. Adentro se ve una pieza a la luz de una vela, que es ambientación, porque no hay datos de cada casa por dentro. Las piezas vacías quedan sólo con la luz de la puerta, así que desde afuera ya se nota si hay alguien.
- **Siete personajes escondidos:** Artigas, Elío, Vigodet, Larrañaga, Pérez Castellano, Acuña de Figueroa y Oribe. Cada vez se esconden detrás de una puerta distinta, al azar. Su ficha, que se lee sólo al estar al lado, tiene datos verificados y su fuente. Al principio eran figuras en 3D, pero decidí no modelar a las personas, por respeto a la historia: ahora cada uno es un cuadro flotante con su retrato real, de dominio público.
- **El bote.** En la punta del Muelle Viejo, al que ahora se sube caminando desde tierra, hay un bote para remar por la bahía y subir a los barcos fondeados. Rehíce las fragatas y los bergantines con más detalle. Son veleros genéricos: en 1810 ya no había carabelas, que son de los siglos XV y XVI.
- **Misiones.** Una lista de 14 que se van tachando: encontrar a los siete personajes con una pista, llegar a la Plaza Matriz, al Cabildo y a la Ciudadela, disparar un cañón, abrir diez puertas y subir a un barco. La pista es la calle colonial de la puerta, con su nombre de hoy.

## Etapa 7: llenar el hueco entre 1867 y hoy

El último tramo completó la ciudad entre el catastro de 1867 y 2026, y arregló lo que me hacía ruido al recorrer la línea de tiempo. La regla siguió siendo la misma: lo que no tiene dato queda marcado como SUPUESTO en su ficha.

- **Los edificios que faltaban.** Sumé Overture Maps, que junta OpenStreetMap, Microsoft y Google Open Buildings, todos con licencia abierta. Son 7.310 huellas más, con el crédito en la ficha. Su altura es supuesta.
- **La Plaza Independencia por etapas.** Explanada vacía desde la demolición de la Ciudadela (1877), jardín de Thays desde 1905 y el pavimento de hoy. Sumé el Teatro Solís (1856, con las alas desde 1874), el Palacio Salvo (1928) y el Palacio Estévez (1874, con su frontón desde 1880).
- **Las calles por época.** Tierra hasta 1835, empedrado de cuña, y asfalto desde 1920, según la cronología de la Intendencia.
- **El relleno del Centro.** Donde no hay fuente entre 1867 y hoy, levanto las plantas de hoy como casas de dos plantas, para que la ciudad no quede vacía. Es un relleno supuesto, y lo dice.
- **El puerto de hoy.** Grúas, tanques, escollera, muelle y vías, bajados de OpenStreetMap desde mi navegador.
- **Los años.** El panel muestra una sola línea y un botón «Ver eventos», que abre la lista de hitos en una ventana aparte, pensado también para el celular.

Lo que fui cambiando al recorrerla, versión por versión:

<div class="table-wrap">

| Versión | Qué cambié |
| --- | --- |
| v42 | El relieve cortaba de golpe en la costa de 1810 y hacía barrancos de hasta 40 m. Lo construido desde 1860 usa ahora un relieve con la tierra ganada al río, y cada edificio de hoy se apoya entero. |
| v41 | Calles y casas a menos de 30 m del foso de la Ciudadela aparecen recién en 1877 (margen supuesto). |
| v40 | Las paredes del Solís, el Salvo y el Estévez se veían sólo desde adentro. Google tomaba el basamento del monumento por un edificio, así que saqué de las plazas las huellas detectadas por satélite. |
| v38 | Calles por época. |
| v37 | La plaza por etapas, el Solís y el Salvo. |
| v36 | Overture Maps, con el crédito de cada fuente. |
| v35 | Los peldaños se ven ahora por un pozo, bajando unos 4,3 m (profundidad supuesta). |

</div>

## Etapa 8: abrir la puerta (v43 a v53)

Con la ciudad armada, faltaba lo más simple y lo que más se nota: cómo se entra y cómo se encuentra cada cosa.

- **Una bienvenida.** Al abrir el mapa aparece quién lo hizo, por qué y cómo escribirme si alguien tiene un plano, una foto o un dato que falta. También el crédito al visor de Buenos Aires de 1867 de [@mormonnegro](https://github.com/mormonnegro/baires-interactivo), de donde salen el dibujo a tinta, la línea de tiempo y buena parte del método. Desde el menú «⋯» se puede volver a ver.
- **Entrar por San Carlos.** El mapa arranca con la Ciudadela al norte. Al entrar, la cámara baja a la punta oeste de la calle San Carlos (hoy Sarandí), la recorre por encima de los techos y frena de frente a la Puerta de la Ciudadela.
- **Carteles que señalan.** Cada cartel tiene una línea que baja hasta el edificio. Al pasar el mouse por un edificio se resalta en rojo, y con un clic se abre su ficha.
- **Una foto del año elegido.** Las fichas abren con la imagen de época más cercana al año de la línea de tiempo. Son 51 fotos y grabados de 1857 a 1954, de dominio público, casi todos del Centro de Fotografía de Montevideo, cada uno con su enlace. No existen fotos de Montevideo de antes de la década de 1840, así que para 1810 la ficha lo dice: «La imagen más cercana a 1810 es de 1858».
- **Un buscador que lleva.** Al elegir un resultado, la cámara vuela al edificio, lo resalta y deja la ficha abierta. Si el lugar todavía no existía en el año elegido, la línea de tiempo salta a cuando sí. Arreglarlo destapó un error viejo: el buscador y el paseo tenían una función con el mismo nombre, y ganaba la del paseo.

<div class="table-wrap">

| Versión | Qué cambió |
| --- | --- |
| v53 | El buscador vuela al edificio, lo resalta y abre la ficha. |
| v51-52 | Fotos de época según el año; botón de entrar fijo en el celular. |
| v50 | Arranque con la Ciudadela al norte y recorrido por San Carlos. |
| v48 | Carteles con línea y edificios resaltados al pasar el mouse. |
| v43-46 | Ventana de bienvenida, contacto y crédito a @mormonnegro. |

</div>

## Lo que aprendí y lo que falta

- **Los datos, en un solo lugar.** Corregir la historia es editar `data.js`, no tocar el 3D.
- **Decir qué es supuesto.** La capa de certeza y la ficha de cada lugar me permitieron mostrar una ciudad entera sin fingir que sé todo.
- **Aprender de un proyecto parecido.** El visor de Buenos Aires me ahorró meses de prueba y error en el dibujo.
- **Mirar cada cambio.** Probé cada versión en el navegador con capturas, y así aparecieron errores como el monumento flotando sobre el pozo de la Ciudadela demolida.

Lo que queda pendiente:

- el foso del frente sur, que en 1810 estaba sin terminar;
- la ubicación del Portón de San Juan, que las fuentes discuten;
- las casas entre 1867 y hoy, que siguen siendo un relleno supuesto porque no tengo fuente cargada para esos años;
- la altura de los edificios de hoy que OpenStreetMap no tiene, que es supuesta;
- comparar las proporciones supuestas del Solís, el Salvo, el Estévez y la plaza de Thays con fotos libres de Commons.

Podés recorrer el visor en [Montevideo amurallado](https://claude.ai/artifact/26gTs2uiDTLYcDdiVtcDTx).
