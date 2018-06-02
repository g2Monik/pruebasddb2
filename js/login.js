//funcionalidad basica del Login

function go(){
if (document.form.password.value=='CONTRASENA' && document.form.login.value=='USUARIO'){
       alert("Bienvenido");
       document.form.submit();
   }
   else{
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
   }
}
