export interface FormularioContato {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  consent: boolean;
}

export const INITIAL_FORM_VALUES: FormularioContato = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  consent: false,
};
