Monica Garcia [13:53]
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_link_href2
----------------------------------------------------------------
Para hacer este tipo de enlaces hay que hacer dos operaciones:
bullet    Establecer marcadores a lo largo de la página (son los lugares a los que queremos saltar con los enlaces).
bullet    Poner enlaces que salten a los marcadores.

El código de los marcadores es el siguiente:

<A name="nombre_del_marcador"></A>

Hay quien encierra con el código del marcador el elemento a donde quiere saltar:

   Código al lado del elemento que queremos marcar:

   <A name="Principio"></A><H1>Título de la página</H1>

   Código que encierra el elemento que queremos marcar.

   <A name="Principio"><H1>Título de la página</H1></A>

Se recomienda usar el primero para enlazar lugares de la página (por ejemplo, el principio) y el segundo para enlazar elementos (imágenes o textos concretos colocados a lo largo de la página).

Por otro lado, el código de un enlace para que salte a un marcador.

Pulsa para volver al <A href="#principio">principio</A>


https://developers.google.com/chart/interactive/docs/gallery


var EstudentsGdl = (data['GDL']['2016-2'].students.length);
console.log(estudents);
