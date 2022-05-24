
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
          maxlength: 12
        },

        email:{
        required: true,
        email: true
        }
      },
});