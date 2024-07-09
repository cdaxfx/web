import * as Yup from 'yup';

export interface IEmployment {
  occupation: string;
  name: string;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
}

export const validationForm = Yup.object({
  occupation: Yup.string().required('Enter your occupation'),
  name: Yup.string().required('Enter your name'),
  address1: Yup.string().required('Enter your address'),
  address2: Yup.string(),
  address3: Yup.string(),
  address4: Yup.string(),
});
