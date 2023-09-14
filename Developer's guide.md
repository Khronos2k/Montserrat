# Developer's guide - Montserrat
>🔔 Hi! This is a guide in Spanish for my development team.
>
> In this guide you will find the conventions under which we work on this project.

## Methodologies implemented
### Conventional Commits
¿Qué es Conventional Commits?

Es una convención mediante la cual vamos a crear nuestros commits. De esta forma vamos a lograr que los mismos sean homogéneos.

> [!IMPORTANT]
> Instalar la extensión en tu VScode.

![image](https://github.com/Khronos2k/Montserrat/assets/108843074/2d0ff622-2387-40c0-b96e-4128da096f25)

¿Cómo se usa Conventional Commits?

Ejemplo práctico:

1. Supongamos que agregamos una nueva sección en el HOME de nuestro proyecto.

Normalmente iríamos a nuestro GitBash a introducir los comandos para agregar los archivos modificados, crear nuestro commit y finalmente hacer push.

> [!NOTE]
> Esto no quiere decir que ya no necesitemos la consola, la única acción que sustutuye es la de creación de commits.

![image](https://github.com/Khronos2k/Montserrat/assets/108843074/207216db-d08a-48b3-8066-5c41fd9a0c17)

2. Ahora, lo que vamos a hacer en su lugar es introducir la siguiente convinación de teclas ```CTRL``` + ```SHIFT``` + ```P```.

A continuación se nos abrirá un panel en el que debemos introducir el nombre de nuestra extensión "conventional commits" y clickear el resultado que nos muestre.

![image](https://github.com/Khronos2k/Montserrat/assets/108843074/ced50688-7dbf-4525-9cd8-77f19ddf06ef)

3. Luego nos pedirá que seleccionemos el proyecto en el que estamos trabajando.

![image](https://github.com/Khronos2k/Montserrat/assets/108843074/704df97d-73ea-47a1-a667-80b41cb9b215)

4. Al seleccionar nuestro poyecto, nos pedirá completar una seria de pasos que consisten en indicar el tipo de modificación que hicimos en el proyecto.

* En esta primera estancia nos pregunta el tipo de cambio que realizamos en el proyecto. Estos van desde modificaciones en el código, agregar o quitar funcionalidades, hasta en cambios que se relacionan a la documentación del proyecto.

* Lo que haremos será seleccionar el que más se adapte a la acción que llevamos a cabo. Que en este caso podría ser ```REFACTOR```.

![image](https://github.com/Khronos2k/Montserrat/assets/108843074/ab67035c-5a95-41fe-81f2-e1d58a7ed0ea)

* Luego nos pedirá que agreguemos un emoji (OPCIONAL), los cuales tienen significados particulares en base al cambio que hicimos. Suponiendo que nuestra nueva sección en el home agrega una nueva funcionalidad, le damos en donde dice ```SPARKLES```.

![image](https://github.com/Khronos2k/Montserrat/assets/108843074/ec854d0b-187e-4dc9-a9ac-f01a555358d2)

* A continuación, nos pedirá que agreguemos una descripción muy corta sobre lo que hicimos. 

![image](https://github.com/Khronos2k/Montserrat/assets/108843074/5cd42660-4c4a-4d00-ae82-b5fe7629b4c1)

* También nos permitirá añadir una descripción muchísimo más extensa.

![image](https://github.com/Khronos2k/Montserrat/assets/108843074/5763e548-73d8-4cb8-8ce2-00f39d124232)
* Adicional y opcional un píe de página.

![image](https://github.com/Khronos2k/Montserrat/assets/108843074/0a8840ee-3b8d-4280-af04-36e1032838c9)

* Y por último, en caso de que no hayamos hecho por consola un git add a los archivos modificados, nos preguntará si queremos realizar esta acción

![image](https://github.com/Khronos2k/Montserrat/assets/108843074/76d1b9a6-42a5-4354-aaf9-b10095fb5c7b)

* Como resultado final, obtendremos commits como este, que nos permitirán ver con mayor claridad el proceso de desarrollo.

![image](https://github.com/Khronos2k/Montserrat/assets/108843074/295791a8-f0b0-4e87-a44b-2b54ae04a848)
![image](https://github.com/Khronos2k/Montserrat/assets/108843074/9eb562ba-7f8a-4126-83d6-bc7f85572fbb)


## Metodología B-E-M
BEM, cuyo significado es **B**lock **E**lement **M**omdifier, nos permitirá mantener una estructura ordenada para trabajar con nuestras clases en HTML.


Dicha estructura es la siguiente: 

```html
<div class="B__E--M"></div>
```

* Bloque/Block: aquellos elementos que poseen una identidad independiente con significado propio. Un bloque puede ser simple o compuesto.

> Restricciones de nombre de bloque: no mayus/No doble guiones consecutivos (--) /No doble guiones bajos consecutivos (__). Ejemplo: Error => header--navbar || Correcto => header-navbar.
> Nombres de bloques permitidos: aquellos que tengan nombres compuestos por dos o más palabras que representen su funcionalidad pueden llevar un guion en medio para separlas. Ejemplo:
> class="products-list"

Ejemplo de Bloques:

```html

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

```
* Elemento/Element: aquellos elementos que sean hijos de un bloque.

Ejemplo de Elementos:

```html
<div class="block">
    <div class="block__element">
        ...
    </div>
    <div class="block__element">
        ...
    </div>
</div>
```
* Modificador/Modifier: para elementos que tengan declaraciones de CSS diferentes al resto pero que compartan propiedades. Por ejemplo: puede tratarse de dos botones que comparten tamaño, font, padding, etc. Pero que necesites hacer que uno tenga su background de color rojo y otro de color verde.
```html
<div class="block">
    <div class="block__element">
        ...
    </div>
    <div class="block__element block__element--modifier">
        ...
    </div>
</div>
*/
```
