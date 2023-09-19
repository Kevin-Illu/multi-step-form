import { writable } from "svelte/store";

const defaultUserData: UserInformation = {
  name: "",
  email: "",
  phoneNumber: "",
  plan: {
    name: "",
    price: 0,
  },
  subscriptionType: "monthly",
  addOns: {},
};

export const UserData = writable<UserInformation>(defaultUserData);
