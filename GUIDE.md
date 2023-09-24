# Developer's guide - Montserrat
>🔔 Hi! This is a guide in Spanish for my development team.
>
> In this guide you will find the conventions under which we work on this project.

## Metodología utilizada
### Conventional Commits

**Conventional commits** es un conjunto de normas mediante el cual vamos a crear nuestros commits. De esta forma lograremos que los mismos sean homogéneos y aporten la información necesaria.

> [!IMPORTANT]
> Para su implementación en VScode debemos instalar la extensión "Conventional Commits". Para ello simplemente debemos introducir su nombre en el buscador de extensiones y seleccionar la primer opción.

Para usar conventional commits debemos seguir los siguientes pasos:

1. Primero, vamos a hacer la siguiente combinación de teclas ```CTRL``` + ```SHIFT``` + ```P```.

    > [!NOTE]
    > La forma en que esta extensión afecta a lo que normalmente veníamos haciendo por consola solo incide en la creación de los commits. Los demás pasos como, agregar los archivos al commit mediante ```git add``` o actualizar el repositorio local con ```git pull``` o el remoto con ```git push``` se mantienen.

2. A continuación se nos abrirá un panel en el que debemos introducir el nombre de nuestra extensión "conventional commits" y seleccionar el primer resultado que nos muestre.

    ![Alt text](guideAdds/image-3.png)

3. En caso de que estemos en una carpeta que contenga varios proyectos dentro, nos pedirá seleccionar el proyecto en el que estemos trabajando.

    ![Alt text](guideAdds/image-4.png)

4. Una vez seleccionado nuestro proyecto, nos pedirá que indiquemos el tipo de cambio que realizamos. Estos cambios van desde los más complejos como modificaciones en el código, hasta los más simples como alterar la estructura de las carpetas.
    
    De igual forma, debajo de cada tipo de cambio encontraremos una breve descripción y debemos elegir aquella que mejor encaje con las modificaciones que hicimos.

    ![Alt text](guideAdds/image-5.png)

5. En el siguiente paso simplemente indicaremos la primer opción ```None```, debido a que, en nuestro caso, no será necesario su uso.

    ![Alt text](guideAdds/image-6.png)

6. Seguido de esto, nos ofrecerá agregar una insignia o emoji, cuyo significado también está definido por una convención llamada [gitm😚ji](https://gitmoji.dev/). En nuestro caso, haremos uso de estos en todos los casos, ya que aportará a nuestros commits muchísima mayor claridad.

    ![Alt text](guideAdds/image-7.png)

7. A continuación, nos pedirá que agreguemos una descripción corta sobre el cambio que hicimos, algo así como el título de nuestro commit. Vendría siendo lo que habitualmente colocábamos entre corchetes cuando realizábamos los commits por consola ```git commit -m " "```

    ![Alt text](guideAdds/image-8.png)

8. Luego de esto, nos ofrecerá agregarle a nuestro commit una descripción larga o cuerpo, en donde nos podremos explayar todo lo que queramos.

    ![Alt text](guideAdds/image-9.png)

9. Por último, nos permiirá insertar un pie de pagina a la descripción de nuestro commit. En él podremos dar créditos a colaboraciones hechas por otros integrantes del grupo o también indicar si el cambio fue testeado y aprobado(opcional).

    ![Alt text](guideAdds/image-10.png)


    Como resultado final, obtendremos commits como este, que nos permitirán ver con mayor claridad el proceso de desarrollo.

    ![Alt text](guideAdds/image.png)

    Y los detalles adicionales que introducimos se verán de esta fomra

    ![Alt text](guideAdds/image-1.png)


### Metodología B-E-M
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
