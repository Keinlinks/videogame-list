# VideoGame List - Next.js

## Descripción

Esta es una aplicación desarrollada en Next.js que consume la API de videojuegos RAWG y muestra los juegos en una lista tipo grid. El proyecto está planteado de manera
que se pueda escalar, ya que se utiliza la arquitectura Clean Architecture la cual separa las features en capas.

## Tecnologías utilizadas

- **Next.js**: Framework de React para el desarrollo de aplicaciones web, se utilizó por su caracteristica de rutas dinámicas que sirven como un backend ideal para esta aplicación.
- **TypeScript**: Tipado estático para mejorar la mantenibilidad del código.
- **Tailwind CSS**: Framework de estilos para acelerar el proceso de estilización.
- **UseContext**: Para manejar el estado de manera modular.

## Patrones utilizados

- **Repository**: Patrón de diseño que separa las capas de manera modular.
- **Single Responsibility Principle**: Patrón de diseño que separa las capas de manera modular.
- **Dependency Inversion Principle**: Los objetos de alto nivel no dependen de los de bajo nivel, sino de abstracciones.
- **Factory**: Centraliza la creación de objetos, agregando sus dependencias.

## Estructura del Proyecto

El proyecto está organizado bajo la Clean Architecture, en este caso hay una sola feature, que es el de videojuegos, pero se da la posibilidad de extender el proyecto para agregar más features.

Ejemplo de la feature de videojuegos:

- **data/**: Contiene el fetching de datos y las implementaciones de los repositorios.
- **domain/**: Define las entidades principales y los casos de uso de los datos.
- **factories/**: Creación de los repositorios.
- **view/**: Componentes y páginas de React, independiente del framework.

Como se puede observar cada carpeta tiene un proposito especifico los cuales se pueden extender y reutilizar fácilmente.

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Keinlinks/videogame-list.git
cd videogame-list
npm install
npm run dev
```

2. Agregar variables de entorno:

Crear archivo .env con las varialbes: 
API_KEY = ""
API_URL = https://api.rawg.io/api/