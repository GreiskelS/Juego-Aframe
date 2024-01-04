# Juego-Aframe

<h1>Invasión a la Luna</h1>

<br>
> Deploy - https://greiskels.github.io/Juego-Aframe/index.html

 <h1>Descripción (audio)*</h1>

<p>História en un futuro lejano, cuando la humanidad ha colonizado el espacio y conquistado las estrellas, la Luna se erige como el último bastión de esperanza para la supervivencia de la especie. Sin embargo, envidias y deseos de dominación acechan desde los confines del universo.Un cataclismo cósmico ha desencadenado un oscuro plan: una alianza de imperios alienígenas ha decidido poner fin al frágil equilibrio que mantiene a salvo a la Tierra y su querida Luna. Para ello, han desatado una invasión implacable, desplegando flotas de naves de guerra devastadoras que avanzan hacia la órbita lunar.Ante el asedio inminente, la humanidad responde con valentía y coraje desesperado. </p>

<br>
<h1># Herramientas utilizadas</h1>

- Aframe / Glitch
  
- Blender
  
- Poly.pizza

- Figma (https://trello.com/b/dy38Nx32/juego-aframe)

- Trello
  
- GitHub 

- Deploy  (https://superficial-diamond-allosaurus.glitch.me/)

<h1><strong>Equipo de trabajo</strong></h1>
<h2>Gabriela <br> Desarrolladora</h2>


<h2>Greiskel <br> Scrum Master</h2>

 
<h2>Marcela <br> Desarrolladora</h2>


<h2>Kibria <br> Product owner </h2>


<h2>Yeny <br> Desarrolladora</h2>


<h1>Como verlo?</h1>
<br>
<p>Si en tu juego hecho con A-Frame y JavaScript ves que el jugador y los avatares insertados están flotando, es probable que se deba a un problema con la configuración de las posiciones de los elementos en la escena. Aquí hay algunas razones comunes y soluciones para este problema:

Falta de gravedad: A-Frame tiene un sistema de física básico que incluye la gravedad. Si no has configurado la gravedad en tu escena, los elementos pueden flotar en el espacio por defecto. Para agregar gravedad, simplemente agrega un componente de física de gravedad a la entidad <a-scene>:
<a-scene physics="gravity: -9.8">
  <!-- Resto de elementos de la escena -->
</a-scene>
Configuración incorrecta de las posiciones: Es posible que los avatares y el jugador no estén posicionados correctamente en la escena. Asegúrate de establecer las coordenadas position correctamente para cada entidad. <p>

<br>

<p>Altura incorrecta del suelo: Si tu suelo está demasiado alto o demasiado bajo en relación con la posición de los avatares y el jugador, podría dar la impresión de que están flotando. Ajusta la altura del suelo o la posición de los elementos para corregir esto.

Unidades incorrectas: A-Frame utiliza una unidad de metros por defecto para las posiciones de los elementos. Si has utilizado unidades incorrectas (por ejemplo, unidades muy pequeñas), los elementos pueden parecer flotantes. Asegúrate de usar unidades apropiadas para tu escena.

Revisa estos aspectos y verifica si alguno de ellos puede estar causando que los elementos floten en tu juego. Ajusta las posiciones, agrega gravedad y asegúrate de que haya superficies para los avatares y el jugador, y eso debería resolver el problema.<p>
