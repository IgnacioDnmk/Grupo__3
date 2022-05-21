$("#formLogin").validate({
    rules:{
      username: "required",
      password: "required"
    },
    messages: {
      username: "Favor ingresar el nombre de usuario",
      password: "Favor ingresar la contraseña"
    }
  });

$("#formRegistro").validate({
  rules:{
    nombres: {
      required: true,
      minlength: 10,
      maxlength: 20
    },

    apellidos: {
        required: true,
        minlength: 10,
        maxlength: 20
    },
    email: {
      required: true,
      email: true
    },
    password1: {
      required: true,
      minlength: 10
    },
    password2:  {
      required: true,
      minlength: 10,
      equalTo: "#password1"
    },
  },
  messages: {
    username: {
      minlength: "Pon 10 caracteres como minimo po loco!",
      maxlength: "Te pasaste poh, son 20 caracteres como maximo!"
    },
  }
});