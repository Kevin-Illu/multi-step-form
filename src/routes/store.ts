import { writable } from "svelte/store";

const defaultUserData: UserInformation = {
  name: "",
  email: "",
  phoneNumber: "",
  subscription: {
    price: 0,
    name: "",
    type: ""
  },
  addOns: {},
};

export const UserData = writable<UserInformation>(defaultUserData);
