export type FormDataType = {
  username: string;
  email: string;
  phone: string;
};

export type FormErrors = { [key in keyof FormDataType]?: string };

export interface Validator {
  [key: string]: {
    validate: (value: any) => boolean;
  };
}