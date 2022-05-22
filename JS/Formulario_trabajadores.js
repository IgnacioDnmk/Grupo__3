$("#formLogin").validate({
    rules:{
      nombre: "required",
      apellido: "required",
      rut:"required",
      email:"required"
    },
    messages: {
      nombre: "Favor ingresar el nombre de trabajador",
      apellido: "Favor ingresar el apellido del trabajador",
      rut: "Favor ingresar el run del trabajador",
      email: "Favor ingresar el run del trabajador"
    }
  });

$("#formTrabajador").validate({
    
        nombre: {
          required: true,
          minlength: 5,
          maxlength: 10
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
});