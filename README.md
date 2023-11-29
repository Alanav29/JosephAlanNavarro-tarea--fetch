# JosephAlanNavarro-tarea--fetch

## Tarea api fetch generation

------Indicaciones para cumplir la tarea-------

--La primera vez, el usuario hace una solicitud get al servidor.

--El servidor devuelve los datos de usuario y se almacenan en el local storage, donde debe guardarse la fecha y hora de solicitud.

--Los datos almacenados en local storage se muestran en el DOM

--La segunda vez, se verifica la fecha en que se almacenó y si se encuentra en el plazo de tiempo de 1 minuto, se debe leer de local storage (para ello debe de checar la fecha y hora de la primera solicitud)

--En caso de que pase más de 1 minuto, se debe volver a hacer una solicitud get.

--Mostrar los datos recuperados en la interfaz del usuario, en una tabla o en otro componente para visualizarlo.

--La visualización de los datos debe ser responsiva.

--Las imágenes de los avatares debe mostrarse de manera circular.

--Los datos recuperados deben almacenarse localmente, con un tiempo de vida de un minuto, para que la próxima recuperación de datos no tarde (mientras esté en el tiempo de vida).

--Usa la API DOM para actualizar el resultado.

--Usa estilos con Bootstrap.

--------Orden de la pagina---------

---Caso 1---- Existe informacion en el local Storage y tiene menos de un minuto

> > > Se inicia la carga de la pagina revisando si se tiene informacion de usuarios en LocalStorage
> > > En caso de existir se revisara si la informacion tiene menos de un minuto que se pidio
> > > En caso de que la informacion tenga menos de un minuto de haber sido recibida se imprimira en el DOM
> > > Luego se establecera una funcion que se ejecutara pasada la diferencia de tiempo para llegar al minuto.Esta funcion sera una que haga la peticion de la informacion y la guarde en el local storage
> > > Posteriormente se imprimira en pantalla la informacion recibida
> > > Por ultimo se ejecutara a manera de bucle la funcion que pide, guarda e imprime la informacion.Este bucle debera ejecutarse cada 6000ms

---Caso 2---- Existe la informacion en el LocalStorage pero tiene mas de un minuto de haber sido pedida

> > > Se inicia la carga de la pagina revisando si se tiene informacion de usuarios en LocalStorage
> > > En caso de existir se revisara si la informacion tiene menos de un minuto que se pidio
> > > Se ejecutara a manera de bucle una funcion que pide, guarda en LocalStorage e imprime en el DOM la informacion.Este bucle debera ejecutarse cada 6000ms

---Caso 3---- No existe la informacion en el LocalStorage

> > > Se inicia la carga de la pagina revisando si se tiene informacion de usuarios en LocalStorage
> > > En caso de no existir se ejecutara a manera de bucle una funcion que pide, guarda en LocalStorage e imprime en el DOM la informacion.Este bucle debera ejecutarse cada 6000ms
