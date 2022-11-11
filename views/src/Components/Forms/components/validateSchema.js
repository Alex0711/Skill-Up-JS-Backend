import * as yup from 'yup';

export const inputSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .required('Campo requerido'),
  lastName: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .required('Campo requerido'),
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Campo requerido'),
  password: yup
    .string()
    .min(4, 'Debe tener al menos 4 caracteres')
    .required('Campo requerido'),
});

export const inputLogin = yup.object().shape({
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Campo requerido'),
  password: yup
    .string()
    .min(4, 'Debe tener al menos 4 caracteres')
    .required('Campo requerido'),
});

export const updateSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .required('Campo requerido'),
  lastName: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .required('Campo requerido'),
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Campo requerido'),
  password: yup
    .string()
    .test(
      'len',
      'can be empty or with string of at least 4 characters',
      (val) => {
        if (val == undefined) {
          return true;
        }
        return ((val.length == 0 || (val.length >= 4 && val.length <= 130)))
      }
    ),
  /*   file: yup.mixed()
      .test(
        "Support",
        "File not supported",
        (file) => {
          const fileName = file.slice(-4)
          console.log(fileName.includes("svg"), "name")
          let arr = ["jpeg", "jpg", "svg", "webp", "png"].filter(e => fileName.includes(e));
          if (arr.length) return true
        }
      ) */
});