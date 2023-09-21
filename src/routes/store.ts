import { writable } from "svelte/store";

const defaultUserData: UserInformation = {
  name: "",
  email: "",
  phoneNumber: "",
  subscription: {
    price: 0,
    name: "",
    type: null,
  },
  addOns: {},
};

export const PageIndex = writable(0)
export const UserData = writable<UserInformation>(defaultUserData);
