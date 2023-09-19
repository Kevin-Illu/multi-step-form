import type { FormDataType, FormErrors, Validator } from "./types";
import { UserData } from "../../store";

export function UserInfoValidator(args: any) {
  const { errors, formData } = args;

  const newErrors = ValidateForm(errors, formData);

  if (Object.keys(newErrors).length === 0) {
    return true;
  }

  // update errors
  errors.update((error: any) => {
    error.email = newErrors.email;
    error.username = newErrors.username;
    error.phone = newErrors.phone;

    return error;
  });

  return false;
}

function ValidateForm(errors: FormErrors, formData: FormDataType) {
  errors = {};

  if (!formData.username) {
    errors.username = "This field is required";
  }

  if (!formData.email) {
    errors.email = "This field is required";
  } else if (!validator.email.validate(formData.email)) {
    errors.email = "Invalid email address";
  }

  if (!formData.phone) {
    errors.phone = "This field is required";
  } else if (!validator.phone.validate(formData.phone)) {
    errors.phone = "Invalid phone number";
  }

  return errors;
}

const validator: Validator = {
  phone: {
    validate: (phoneNumber: string) => {
      const regex = /^\d{8}$/;
      return regex.test(phoneNumber.replace(" ", ""));
    },
  },
  email: {
    validate: (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
};
