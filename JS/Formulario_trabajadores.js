
$("#formTrabajador").validate({
      rules:{
        nombre: {
          required: true,
          minlength: 5,
          maxlength: 20
        },

        apellido: {
          required: true

        },

        rut:{
          required:true,
          maxlength: 12
        },

        email:{
        required: true,
        email: true
        }
      },
      messages: {
        nombre: "Favor ingresar el nombre de trabajador",
        apellido: "Favor ingresar el apellido del trabajador",
        rut: "Favor ingresar el run del trabajador",
        email: "Favor ingresar el email"
      }
});