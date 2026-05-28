# 🌋 Lava Arcade

Juegos indie hechos a mano desde Lanzarote, Islas Canarias.

**[lavaarcade.github.io/web](https://lavaarcade.github.io/web)**

## Juegos

| Juego | Género | Estado |
|-------|--------|--------|
| Mixology Ages | Puzzle | En desarrollo |

## Estructura

```
/
├── index.html          # Página principal
├── about.html          # Sobre el proyecto
├── privacy.html        # Política de privacidad
├── assets/
│   ├── css/style.css   # Estilos globales
│   ├── js/main.js      # JS global
│   └── favicon.svg
└── games/
    └── mixology-ages/  # Cada juego en su carpeta
        └── index.html
```

## Añadir un juego nuevo

1. Crear carpeta en `games/nombre-del-juego/`
2. Añadir `index.html` con el juego
3. Añadir una `game-card` en `index.html` principal

## Monetización

Los slots de AdSense están marcados con comentarios `<!-- AdSense -->` en `index.html`.
Para activarlos, reemplaza los comentarios con el código real de AdSense.

---

Hecho con HTML, CSS, JS vanilla y Godot 4.
