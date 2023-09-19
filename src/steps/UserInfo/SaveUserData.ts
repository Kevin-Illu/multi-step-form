import { UserData } from "./../../routes/store";
import type { FormDataType } from "./types";

export function SaveUserData(data: FormDataType) {
  UserData.update((uData) => {
    uData.email = data.email.trim();
    uData.phoneNumber = data.phone.replaceAll(" ", "").trim();
    uData.name = data.username.trim();
    return uData;
  });
}
