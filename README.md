

## Getting Started

run `npm run dev` y verás el proyecto en localhost:3000/

## Como funciona
El filtro del input, filtra por nombre. El toggle, filtra por status (alive o no alive).

Cuando tengas los filtros como deseas, dale al boton 'FETCH' e irá a buscar los datos a la api.

La página con los filtros y header vienen renderizados desde el servidor, pero los datos se cargan en cliente. Esto es así
porque mientras el usuario espera a que le lleguen los datos, este ya puede interactuar con los filtros (nice UX)

Los filtros puedes cambiarlos tanto desde la url como desde la ui (two way binding)

Verás que aparece un paginador. Cuando vas a otra página, se vuelve a hacer fetch a la api, manteniendo los filtros previos

No ha habido necesidad de crear un .env :D

## Como mejorar
Siempre hay espacio para la mejora, si hubiese tenido más tiempo me hubiese puesto a fondo con el cache, de modo que páginas ya
previamente cargadas, no necesitan acceder a la api. Para hacer esto lo que suelo hacer es crear un custom server en next.js con express

Por falta de tiempo,hice un test básico, más que nada para que veas como hago el setup y que packages uso.
Aqui normalmente hubiese hecho tests para todos los componentes y páginas aparte

