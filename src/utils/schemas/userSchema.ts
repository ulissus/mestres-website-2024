import * as yup from 'yup';

export const userSchema = yup
  .object()
  .shape({
    name: yup.string().required('O nome é um campo obrigatório'),
    email: yup
      .string()
      .email('Por favor insira um email válido')
      .required('O email é um campo obrigatório'),
    country_code: yup.string(),
    cellphone: yup
      .string()
      .required('O telefone é um campo obrigatório')
      .min(10, 'O telefone deve ter no mínimo dez dígitos'),
    project_type: yup
      .string()
      .required('O tipo de projeto é um campo obrigatório')
      .nullable(),
    budget: yup.string().required('O orçamento é um campo obrigatório'),
    message: yup.string(),
  })
  .required();

export const leadSchema = yup
  .object()
  .shape({
    name: yup.string().required('O nome é um campo obrigatório'),
    email: yup
      .string()
      .email('Por favor insira um email válido')
      .required('O email é um campo obrigatório'),
    country_code: yup.string(),
    cellphone: yup
      .string()
      .required('O telefone é um campo obrigatório')
      .min(10, 'O telefone deve ter no mínimo dez dígitos'),
    message: yup.string(),
  })
  .required();

export const whatsSchema = yup
  .object()
  .shape({
    name: yup.string().required('O nome é um campo obrigatório'),
    email: yup
      .string()
      .email('Por favor insira um email válido')
      .required('O email é um campo obrigatório'),
    cellphone: yup
      .string()
      .required('O telefone é um campo obrigatório')
      .min(10, 'O telefone deve ter no mínimo dez dígitos'),
    message: yup.string(),
  })
  .required();

export default userSchema;
