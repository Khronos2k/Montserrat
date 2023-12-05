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

9. Por último, nos permitirá insertar un pie de pagina a la descripción de nuestro commit. En él podremos dar créditos a colaboraciones hechas por otros integrantes del grupo o también indicar si el cambio fue testeado y aprobado(opcional).

    ![Alt text](guideAdds/image-10.png)


    Como resultado final, obtendremos commits como este, que nos permitirán ver con mayor claridad el proceso de desarrollo.

    ![Alt text](guideAdds/image.png)

    Y los detalles adicionales que introdujimos se verán de esta fomra

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

## Branches

Las **Branchs** o **ramas** nos permite trabajar de forma más ordenada y que no estemos constantemente modificando la rama principal, es decir, nuestro main.

Para trabajar con ellas, debemos seguir los siguientes pasos:

> [!IMPORTANT]
> Antes de comenzar, procurá tener la última versión estable del proyecto introduciendo por consola el comando  ```git pull origin main```.

1. Primero, vamos a crear una nueva rama introduciendo por consola el comando ```git branch``` + ```name```. En el caso de que vayamos a añadir una nueva funcionalidad quedaría algo así ```git branch feature```

    ![Alt text](guideAdds/image11.png)

    > [!NOTE]
    > Antes de seguir adelante, podemos verificar que este paso se haya concretado correctamente.
    >
    > Para ello podemos utilizar el comando ```git branch```
    
    ![Alt text](guideAdds/image12.png)
   
3. Lo siguiente que vamos a hacer es movernos de la rama principal ```main``` a nuestra nueva rama que, en este caso, denominamos ```feature```.

    Para ello vamos a utilizar el comando ```git checkout``` + ```name```, es decir ```git checkout feature```

    ![Alt text](guideAdds/image13.png)

    > [!NOTE]
    > Antes de seguir adelante, podemos verificar que este paso se haya concretado correctamente.
    >
    > Para ello podemos utilizar, nuevamente, el comando ```git branch```
    >
    > Como podemos observa en la imagen, nos señalan nuestra ubicación con un aspecto diferente sobre el nombre de la ramma en la que estamos.

    Hasta este punto no observaremos nada diferente en nuestro código o carpetas del proyecto. Pero lo que acabamos de hacer es una copia local de todo el proyecto y, al estar ubicados en la nueva rama, cada cambio o agregado que hagamos estarán siendo sobre la copia.

    Así que ya tenemos un nuevo entorno sobre el cual trabajar como lo venimos haciendo habitualmente pero de forma paralela. Esto quiere decir que podemos seguir creando commits de los cambios que hagamos en esta nueva rama, lo cual es muy importante que se haga.

    **A continuación un ejemplo práctico:**

    Supongamos que la rama que creamos fue para insertar la página de error 404.

    ![Alt text](guideAdds/image15.png)

    Hecho este cambio, vamos a crear el commit con [conventional commit](#conventional-commits).

    > [!NOTE]
    > Algo curioso que pasa cuando trabajamos con una rama paralela al main, es que cuando volvemos a ubicarnos en la rama principal utilizando ```git checkout main``` y vamos a los achivos que modificamos en nuestra rama alterna, nos encontraremos con que los cambios que hicimos no se muestran en el proyecto. Como ejemplo el archivo 404.ejs que se muestra completo en la imagen anterior.
    
    ![Alt text](guideAdds/image18.png)

    Una vez hayas añadido tu primer commit de las modificaciones o agregados que hiciste al proyecto, aún si la funcionalidad como tal no está completada en su totalidad, puedes avanzar al siguiente paso.

4. Lo que debemos hacer ahora por una cuestión de seguridad, ya que nuestro progreso va a estar muchísimo más seguro en la nube es, subir a nuestro repositorio de GitHub nuestra nueva rama con sus respectivos commits. 

    Esto lo haremos utilizando el comando  ```git push origin``` + ```newNameBranch```, es decir ```git push origin feature```

    ![Alt text](guideAdds/image17.png)

    Lo que obtendremos como resultado será lo siguiente:

    ![Alt text](guideAdds/image16.png)

    Señalado con un cuadro rojo, veremos la confirmación de que se ha creado una rama en nuestro repositorio remoto y que el commit se subió con éxito.

    Y lo que obtendremos en nuesro repositorio en GitHub será lo siguiente.

    ![Alt text](guideAdds/image19.png)

    ![Alt text](guideAdds/image20.png)

## Armado de página web desde 0

### CRUD



### Express-Validator

1. Primero debemos instalar ```express-validator```

    ```
    npm install express-validator
    ```

    > [!NOTE]
    > Antes de empezar con la validación, es importante tener en cuenta cómo están armados nuestros formularios. A la hora de escribir las validaciones, tomaremos como referencia la propiedad ```name``` de cada campo o input.

    ```html
    <form action ="/register" method="post">
        <label for="name">NOMBRE:</label>
        <input type="text" name="name" id="name">
        <label for="email">CORREO ELECTRONICO:</label>
        <input type="email" name="email" id="email">
        <label for="password">NOMBRE:</label>
        <input type="password" name="password" id="password">
        <button type="submit">Registrarse</button>
    </form>
    ```
2. Una vez tengamos el módilo instalado, vamos a requerirlo donde vayamos a realizar las validaciones. Podemos hacerlo directamente sobre el archivo de rutas o crear nuestras validaciones en un archivo aparte.

    * En cualquiera de los casos, el primer paso será requerir el módulo y, haciendo uso de la desestructuración, pedir el método ```check``` o ```body```.

        ```js
        const {check} = require('express-validator');
        ```

    * El segundo paso será crear una variable donde almacenaremos el conjunto de validaciones que realizaremos sobre el formulario.

        ```js
        let validateRegister = [];
        ```

        El método ```check()``` nos permite agregar validaciones para cualquiera de los campos del formulario. Como parámetro recibe el nombre del campo a validar. Si por ejemplo queremos validar el campo name, el método quedaría así:

        ```js
        const validateRegister = [ check('name') ];
        ```

        Suponiendo que quisiéramos validar que el campo no esté vacío, sobre el método anterior, ejecutamos el método ```notEmpty()``` de la siguiente manera:

        ```js
        const validateRegister = [
            check('name').notEmpty()
        ];
        ```

    <details>
    <summary>🎁Contenido adicional:</summary>
    
    <sub>**Tipos de validaciones:**</sub>
    ```js
    check('campo')
    .notEmpty()    // Verifica que el campo no esté vacío
    .isLength({min: 5, max: 10})   // Verifica la longitud de los datos
    .isEmail()     // Verifica que sea un email válido
    .isInt()       // Verifica que sea un número entero
    ```
    
     ***Lista completa de validaciones:***
     [Validators ↗](https://github.com/validatorjs/validator.js#validators)
    
     <sub>**Mensaje de error**</sub>
    
    Además de las validaciones, Express Validator nos permite definir el mensaje que recibirá el usuario por cada validación que falle.
    Para implementar los mensajes, utilizamos el método ```withMessage()``` a continuación de cada validación
    ```js
    check('name')
       .notEmpty().withMessage('Debes completar el nombre')
       .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres')
    ```
    
     <sub>**Cortando la cadena de validación - bail()**</sub>
    
    En algunos casos vamos a querer cortar la validación, ya que si por ejemplo un campo está vacío, no tiene sentido verificar si es un e-mail válido.
    Si no cortamos la validación, el usuario recibirá todos los errores juntos en lugar de solo el que corresponda.
    Para esos casos, podemos implementar el método bail().
    ```js
    check('email')
       .notEmpty().withMessage('Debes completar el email').bail()
       // En caso de que la primera validación falle,
       // las siguientes no se ejecutan para ese campo.
       .isEmail().withMessage('Debes completar un email válido')
    ```
    
     <sub>**Ejemplo: array de validaciones completo**</sub>
    ```js
    const validateRegister = [
       check('name')
           .notEmpty().withMessage('Debes completar el nombre').bail()
           .isLength({ min: 5 }).withMessage('El nombre debe ser más largo'),
       check('email')
           .notEmpty().withMessage('Debes completar el email').bail()
           .isEmail().withMessage('Debes completar un email válido'),
       check('password')
           .notEmpty().withMessage('Debes completar la contraseña').bail()
           .isLength({ min: 8 }).withMessage('La contraseña debe ser más larga')
    ]
    ```

    </details>

3. El siguiente paso será agregar las validaciones en las rutas. Este middleware, se ubica entre la ruta y la acción del controlador.

    ```js
    const validateRegister = [ ... ];

    router.post('/', validateRegister, userController.processRegister);
    ```

    > [!IMPORTANT]
    > Cuando tengamos más de un middleware en las rutas, debemos colocar el array de validaciones antes del controlador como se puede ver en este ejemplo:
    >   ```js
    >   productRouter.post('/', uploadFile.single('productImage'), validateCreateForm, productController.store);
    >   ```

4. Lo que vamos a hacer ahora es trabajar sobre el controlador para verificar si hubo errores en la validación.

    * Nuevamente, el primer paso será requerir el módulo y, haciendo uso de la desestructuración, pedir el método ```validationResult```.

        ```js
        const { validationResult } = require('express-validator');
        ```

    * El segundo paso courrirá dentro del método del controlador que se encarga de procesar el formulario. Allí guardaremos, en la variable errors, la ejecución del método ```validationResult```, pasándole como parámetro el objeto ```request```.

        ```js
        let errors = validationResult(req);
        ```
    
    * Lo siguiente será integrar un if, para determinar si el objeto que contiene los errores se encuentra vacío o no. Para esto, nos ayudaremos del método ```.isEmpty()``` 

        ```js
        register: (req, res) => {
            let errors = validationResilt(req);

            if (errors.isEmpty()) {
                // No hay errores, seguimos adelante
            } else {
                // No hay errores, volvemos al formulario con los mensajes
            }
        }
        ```
    * Por último, para que podamos enviar los errores a la vista, deberemos hacer uso del método ```.array()```, que nos permitirá enviar los errores dentro de un array.

        Es importante enviar también los contenidos de req.body, ya que queremos preservar los datos completados por el usuario al volver al formulario.

        ```js
        register: (req, res) => {
            let errors = validationResilt(req);

            if (errors.isEmpty()) {
                // No hay errores, seguimos adelante
            } else {
                // No hay errores, volvemos al formulario con los mensajes
                res.render('register', {errors: errors.array(), old: req.body})
            }
        }
        ```

        **Objeto de errores**

        ```js
        {
            email: {
                msg: 'Debes completar un email válido',
                param: 'email',
                value: 'unEmail',
                location: 'body',
            }
            password: {
                msg: 'La contraseña debe ser más larga',
                param: 'password',
                value: '1234',
                location: 'body',
            }
        }
        ```

5. Como último paso, vamos a mostrar los errores en la vista. Haciendo uso de EJS, podremos preguntar si un campo determinado tiene errores. Si ese es el caso, podremos mostrar el mensaje de error.

    > [!NOTE]
    > Es imporante tener en cuenta que la primera vez que se cargue el formulario no habrá errores, y por lo tanto esa variable estará vacía. Para evitar problemas, siempre debemos preguntar si la variable de errores existe antes de intentar mostrar un error.
    >   ```html
    >   <% if (locals.errors && errors.name) { %>
    >       ...
    >   <% } %>
    >   ```

    ```html
    <label for="email">Correo electrónico:</label>
    <input type=email name="email" id="email">
    <% if (locals.errors && errors.name) { %>
        <p class="feedback"><%= errors.name %></p>
    <% } %>
    ```

    Otro punto importante es que si el usuario ya completó el formulario, pero introdujo información inválida en algún campo, no vamos a querer que complete todo nuevamente.
    
    Por esa razón, en el paso anterior volvimos a enviar los datos del formulario original en el objeto ```old```.

    Nuevamente con EJS podemos cargar ese valor en cada campo que corresponda.

    ```html
    <label for="email">Correo electrónico:</label>
    <input type=email name="email" id="email" value="<%= locals.old && old.email ? old.email : '' %>">
    ```

### Session and cookies

1. Primero debemos instalar  ```express-session```.

    ```
    npm install express-session --save
    ```

2. Lo siguente será implementar session en nuestro proyecto de la siguiente manera.

    * Primero lo requerimos en el entry point de la aplicación, es decir, en el ```app.js```

        ```js
        const session = require('express-session');
        ```

    * Luego lo configuramos como middleware a nivel de aplicación. Ejecutamos ```session()``` pasándole como argumento un objeto literal con la propiedad secret con un texto único aleatorio, que servirá para identificar nuestro sitio web.

        ```js
        app.use(session({secret: "Nuestro mensaje secreto"}));
        ```

3. Una vez implementado, ya podremos hacer uso de session. Cada vez que queramos ```definir``` y ```almacenar``` información, llamamos a la propiedad ```session``` del objeto request:

    ```js
    req.session.colorFondo = 'violeta';
    ```

    * Para leer la información de session:

    ```js
    let colorFondo = req.session.colorFondo;
    ```

<details>
<summary>💡Ejemplo práctico</summary>

Vamos a realizar un pequeño ejemplo funcional.

1. Lo primero que vamos a hacer es posicionarnos en nuestro archivo de rutas y crear nuestra ruta ```/login``` con su respectivo ```controller```.

    ```js
    router.get('/login', usersController.login);
    ```

2. Lo siguiente será dirigirnos a nuestro archivo de controladores y crear nuestro método ```login``` que solo nos devuelve una vista para el login de usuario.

    ```js
    let userController = {
        login: function(req, res) {
            res.render('login');
        }
    }
    ```

3. A continuación deberemos crear nuestro formulario de login.

    ```html
    <form action="/users/login" method="POST">
        <label for="">Email</label>
        <input type="email" name="email"><br>
        <label for="">Password</label>
        <input type="password" name="password"><br>
        <input type="submit" value="login"><br>
    </form>
    ```

4. Retornamos al archivo de rutas y creamos nuestro método ```post``` de la ruta ```login``` con su respectivo ```controller```.

    * Como un aditivo a esta práctica, podríamos probar con añadir el middleware de ```express-validator```

        ```js
        const validateRegister = [
            check('email').isEmail().withMessage('El email es inválido'), 
            check('password').isLength({min: 8}).withMessage('La contraseña debe tener como mínimo 8 caracteres.')
        ]
        ```

    * Agregando el método ```post```.

        ```js
        router.post('login', , usersController.processLogin)
        ```

    * Agregando el controllador de usuario.

        ```js
        let userController = {
            login: function(req, res) {
                res.render('login');
            },
            processLogin: function(req, res) {
                let errors = validationResult(req);

                if (errors.isEmpty()) {
                    let usersJSON = fs.readFileSync('users.json', {})
                    let users;
                    if (usersJSON == '') {
                        users = [];
                    } else {
                        users = JSON.parse(usersJSON);
                    }
                    for (let i = 0; i < users.length; i++) {
                        if (users[i].email == req.body.email) {
                            if (bcrypt.compareSync(req.body.password, users[i].password)) {
                                let usuarioALoguearse = users [i];
                                break;
                            }
                        }
                    }

                    if (usuarioALoguearse == undefined) {
                        res.render('login', {errors: [{msg: 'Credenciales inválidas'}]})
                    }    
                    
                    req.session.usuarioLogueado = usuarioALoguearse
                    res.render('success');

                } else {
                    res.render('login', {errors: errors.errors})
                }
            }
        }
        ```
    
    * Como adicional podemos testear lo que acabamos de hacer agregando lo siguiente:
    
        ```js
        router.get('/check', function(req, res){
            if(req.session.usuarioLogueado == undefined){
                res.send('No estás logueado')
            } else {
                res.send('El usuario logueado es: ' + req.session.usuarioLogueado.email)
            }
        })
        ```

5. Seguido de esto, vamos a crear nuestro middleware que se encargará de verificar que el usuario se haya logueado.

    * Primero vamos crar, dentro de nuestra carpeta ```src```, la carpeta ```middleware```.
    
    * En la carpeta que acabamos de crear vamos a crear el archivo ```authMiddleware.js```, que se va a encargar de que el usuario está logueado.

    ```js
    function authMiddleware(req, res, next) {
        if (req.session.usuarioLogueado == undefined) {
            next();
        } else {
            res.send('Esta página es solo para usuarios');
        }
    }
    module.exports = authMiddleware;
    ```

    * En la misma carpeta vamos a crear el archivo ```guestMiddleware```, sirve para los invitados y se encarga de verificar que el usuario no esté logueado.

    ```js
    function guestMiddleware(req, res, next) {
        if (req.session.usuarioLogueado == undefined) {
            next();
        } else {
            res.send('Esta página es solo para invitados');
        }
    }
    module.exports = guestMiddleware;
    ```

6. Por último vamos a importar nuestros middleware a nuestro archivo de rutas e indicar a que rutas se puede ingresar siendo usuario o invitado.

    * Importando los middlewares.

    ```js
    const authMiddleware = require('./src/middlewares/authMiddleware')
    const guestMiddleware = require('./src/middlewares/guestMiddleware')
    ```

    * Agregando los middlewares a las rutas.

    ```js
    router.get('/register', guestMiddleware, usersController.register)
    router.get('/register', authMiddleware, )
    ```

</details>

### Cookies

1. Lo primero que vamos a necesitar es instalar el paquete ```cookie-parser```.

    ```
    npm install cookie-parser
    ```

2. Luego lo requeriremos a nivel de aplicación.

    ```js
    const cookieParser = require('cookie-parser');
    app.use(cookieParser());
    ```

3. Luego nos moveremos a nuestro controller y modificaremos el ```response``` creando una cookie. En este caso solo vamos a guardar el email del usuario.

    Para ello ejecutamos el método ```.cookie()``` sobre el objeto ```response```, pasándole dos argumentos: el ```nombre``` que queramos asignarle a esa cookie y el ```valor``` que tendrá.

    ```js
        if (req.body.recordame != undefined) {
            res.cookie('recordame', usuarioALoguearse.email, {maxAge: 60000});
        }
    ```

    > [!NOTE]
    > Para leer información de una cookie usamos el objeto ```request``` llamando al objeto ```cookies```, seguido del nombre de la cookie que definimos anteriormente.
    > ```js
    > console.log(req.cookies.recordame);
    > ```

4. Ahora lo que vamos a hacer es crear un middleware a nivel de aplicación.

    * Para esto vamos a crear un archivo ```cookieAuthMiddleware```

    * En este archivo vamos a crear la función propia de un middleware.

        ```js
        function cookieAuthMiddleware(req,res,next) {
            if(req.cookie.recordame != undefined && req.session.usuarioLogueado == undefined) {
                //Método de lectura de usuarios
                for (users[i].email == req.cookies.recordame) {
                    usuarioALoguearse = users[i];
                    break;
                }
            }
            req.session.usuarioLogueado = usuarioALoguearse;
            next();
        }
        module.exports = cookieAuthMiddleware;
        ```

5. Lo siguiente será agregar el middleware que acabamos de crear en nuestro archivo ```app.js```.

    * Requiriendo el middleware.
    
        ```js
        const cookieAuthMiddleware = require('./middleware/cookieAuthMiddleware');
        ```

    * Hacemos que cruce por toda la aplicación.
        ```js
        app.use(cookieAuthMiddleware);
        ```
### Hashing

1. El primer paso será instalar el paquete ```bcryptjs```

    ```
    npm install --save bcryptjs
    ```

2. Luego lo requerimos en el archivo que lo vayamos a utilizar.

    ```js
    const bcrypt = require('bcryptjs');
    ```

    > [!NOTE]
    > Para transformar un string en un hash, lo único que haremos es utilizar la función ```bcrypt.hashSync()```.
    >
    >Esta función lleva dos parámetros. Primero, el texto que queremos encriptar y segundo, la cantidad de "sal" que le queremos echar o, en otras palabras, un número que va a determinar que el hash resultante sea bastante único. La cantidad suele rondar entre 10 a 12 de sal.
    >
    > ```js
    > bcrypt.hashSync('jonsnowreyenelnorte', 10);
    > ```

3. Por último, para comparar una contraseña hasheada con la contraseña plana introducida por el usuario, utilizaremos ```bcrypt.compareSync()```. Este método retorna un valor booleano, por ende, puede ser usado dentro de un ```if```.

    ```js
    const password = 'tomate123';
    const resultado = bcrypt.hashSync(password, 10);
    const validacion = bcrypt.compareSync(pasword, resultado);
    ```

### 