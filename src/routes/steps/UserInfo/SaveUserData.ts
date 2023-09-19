import { UserData } from "../../store";
import type { FormDataType, FormErrors } from "./types";

export function Save({
  _,
  data,
}: {
  _: FormErrors;
  data: FormDataType;
}) {
  UserData.update((userData) => {
    userData.email = data.email;
    userData.phoneNumber = data.phone;
    userData.name = data.username;
    return userData;
  });
}
