# Developer's guide - Montserrat
>🔔 Hi! This is a guide in Spanish for my development team.
In this guide you will find the conventions under which we work on this project.

## Methodologies implemented
### Conventional Commits
* En primer lugar, es importante dar un breve instructivo sobre la herramienta que vamos a usar en nuestro editor de código.
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)


### BEM (Block Element Modifier)
```html
<div class="header">
  <div class="header__nav">
    <div></div>
  </div>
</div>
```

```html
BEM
- Siglas
    * B de Bloque
    + E de Elemento
    * M de Modificador

- Estructura
    * B__E--M

- Bolque/Block: aquellos elementos que poseen una identidad independiente con significado propio. Un bloque puede ser simmple o compuesto.

Restriciones de nombre de bloque: No mayus/No doble guiones consecutivos(--)/No doble guines bajos consecutivos(__). Ejemplo: Error => block--modificar || Correcto => block-modificar.

Ejemplos de Bloques:

<div class="header">
    ...
</div>

<div class="search-block">
    ...
</div>

<div class="custom-form">
    ...
</div>

<div class="another-block-custom">
    ...
</div>

- Elemento/Element: aquellos elementos que sean hijos de un bloque.

Ejemplo de Elementos:

<div class="block">
    <div class="block__element">
        ...
    </div>
    <div class="block__element">
        ...
    </div>
</div>

- Modificador/Modifier: Para elementos que tengan declaraciones de CSS diferentes al resto.

<div class="block">
    <div class="block__element">
        ...
    </div>
    <div class="block__element block__element--modifier">
        ...
    </div>
</div>

```



> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

[^1]: My reference.
