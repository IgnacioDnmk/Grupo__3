
$("#formTrabajador").validate({
      rules:{
        nombre: {
          required: true,
          minlength: 5,
          maxlength: 15
        },

        apellido: {
          required: true,
          minlength: 5,
          maxlength: 15
        },

        rut:{
          required:true,
          minlength: 11,
          maxlength: 12
        },

        email:{
        required: true,
        email: true
        }
      },
      messages: {
        nombre: {
          required: "Campo obligatorio",
          minlength: "Ingrese un Minimo de 5 caracteres",
          maxlength: "Debe contener maximo 15 caracteres"
        },
        apellido: {
          required: "Campo obligatorio",
          minlength: "Ingrese un Minimo de 5 caracteres",
          maxlength: "Debe contener maximo 15 caracteres"
        },
        rut: {
          required: "Campo obligatorio"
        },
        email: {
          required: "Campo obligatorio",
          email: "Formato requerido Ej: reg@trabajador.cl"
        },
      }
});