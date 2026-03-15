export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// export interface FormErrors {
//   [key: string]: string;
// }

export type FormErrors ={
  [key: string]: string;
}