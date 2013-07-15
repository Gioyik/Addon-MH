Addon Comunitario de Mozilla Hispano
====================================

Developers: 
-----------
* [Gioyik](https://mozillians.org/es/u/Gioyik) 
* [Willy Aranda](https://mozillians.org/es/u/willyaranda)
* [Willy Aguirre](https://mozillians.org/es/u/willyaguirre)
* [Deiby Od](https://mozillians.org/es/u/deibyod)

Funciones que se deben tener en el Addon:
--------------------

* En la pestaña de "Noticias" tiene que mostrar un RSS de las noticias en portada del sitio de Mozilla Hispano, y algun menu o boton en donde se pueda cambiar el feed RSS para que muestre las entradas de las noticias del Planet de Mozilla Hispano y en viserversa. (OK)
* En la pestaña "Tablero" tendria que ir por secciones o como se pueda, hacer que las Reuniones, Eventos, y Tareas se vean en esta parte como en un especie de listado separado por categorias o secciones.
* En la pestaña "Enlaces" tendrian que ir enlaces rapidos a partes de Mozilla Hispano, como un link al foro, wiki, recursos para colaboradores, material de presentaciones, la pagina de colabora, etc...
* En la pestaña de "Buscador" hacer algo como un pequeño buscador alli que al ponerle una entrada o algun texto a buscar me busque en las paginas de SUMO, Wiki de Mozilla Hispano, Foro y ver si hay otros sitios necesarios.
* En la pestaña de "Social" habria que poner widgets que muestren algun streaming de las cuentas en las redes sociales de Mozilla Hispano.
* Y en "Acerca de" pues agregar los comentarios y echar parla! :P

Pasos para probar el Addon:
--------------------------

* [Descargar el SDK de complementos](https://addons.mozilla.org/es/developers/builder)
* Ingresar y descomprimir el SDK **tar -xf addon-sdk.tar.gz | cd addon-sdk**
* Ejecutar: **source bin/activate** y vera **(addon-sdk) ~/addon-sdk $**
* copiar el repositorio: **git clone git@github.com:Gioyik/Addon-MH.git**
* Ingresar a la carpeta donde esta ubicado Addon **$ cd Addon-MH** y ejecutar **cfx run**

