import { writable } from "svelte/store";

type AddOnsType = {
  active: boolean;
  pricePerMonth: number;
  pricePerYear: number;
};

type SubscriptionType = "monthly" | "yearly";

type UserInformation = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: {
    name: string;
    price: number;
  };
  subscriptionType: SubscriptionType;
  addOns: Record<string, AddOnsType>;
};

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
