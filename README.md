# VideoGame List - Next.js

## Descripción

Esta es una aplicación desarrollada en Next.js que consume la API de videojuegos RAWG y muestra los juegos en una lista tipo grid. El proyecto está planteado de manera
que se pueda escalar, ya que se utiliza la arquitectura Clean Architecture la cual separa las features en capas.

## Tecnologías utilizadas

- **Next.js**: Framework de React para el desarrollo de aplicaciones web.
- **TypeScript**: Tipado estático para mejorar la mantenibilidad del código.
- **Tailwind CSS**: Framework de estilos para acelerar el proceso de estilización.

## Estructura del Proyecto

El proyecto está organizado bajo la Clean Architecture, en este caso hay una sola feature, que es el de videojuegos:

- **data/**: Contiene el fetching de datos y las implementaciones de los repositorios.
- **domain/**: Define las entidades principales y los casos de uso de los datos.
- **factories/**: Creación de los repositorios.
- **view/**: Componentes y páginas de React.

Como se puede observar cada carpeta tiene un proposito especifico los cuales se pueden extender fácilmente.

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Keinlinks/videogame-list.git
```
cd videogame-list
```
npm install
```
npm run dev
```