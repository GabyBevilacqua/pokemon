# 🌌 360° Interactive Scene with Three.js + React + Next.js

Este proyecto es una experiencia web interactiva construida con **Three.js**, **React**, **Next.js** y **TypeScript**, que permite explorar una escena 360° inmersiva renderizada dentro de una esfera con desplazamiento horizontal animado.

## 🚀 Tecnologías Utilizadas

- [Three.js](https://threejs.org/) – Renderizado 3D en tiempo real
- [React](https://reactjs.org/) – Librería para interfaces de usuario
- [Next.js](https://nextjs.org/) – Framework para aplicaciones React con SSR
- [TypeScript](https://www.typescriptlang.org/) – Tipado estático para JS
- [Blender](https://www.blender.org/) – Modelado y animación 3D

## 🌀 Descripción del Proyecto

El objetivo del proyecto es crear una experiencia inmersiva de **realidad virtual tipo 360°**, en la que los usuarios puedan explorar una escena envolvente con elementos 3D interactivos y animaciones. Algunos aspectos destacados:

- 🌌 **Skybox**: Se utilizó una imagen esférica (equirectangular) aplicada a una esfera invertida para simular un entorno 360°.
- 🧱 **Modelos 3D GLB**: Importación de modelos `.glb` creados y animados con **Blender**.
- 🎞️ **Animaciones**:
  - Un modelo tiene una animación incorporada directamente desde Blender.
  - Otros modelos son animados en tiempo real con **TypeScript**.
- 💡 **Iluminación y Cámara**:
  - Se añadieron luces personalizadas para crear ambiente y resaltar elementos.
  - Una cámara con movimiento horizontal controlado por **scroll**.
- 📜 **Navegación Scroll**: El usuario puede desplazarse horizontalmente haciendo scroll vertical, navegando por diferentes secciones de la escena. Los objetos aparecen progresivamente al entrar en vista.

## 📦 Instalación y Ejecución

```bash

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

