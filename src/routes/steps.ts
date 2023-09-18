import type { ComponentType } from "svelte";
import UserInfo from "./steps/UserInfo/UserInfo.svelte";
import Other from "./steps/Other.svelte";
import { UserInfoValidator } from "./steps/UserInfo/validateForm";

interface ISteps {
  [id: string]: {
    title: string;
    component: ComponentType;
    formValidator: (args?: any) => boolean;
  };
}

export const Steps: ISteps = {
  1: {
    title: "Your Info",
    component: UserInfo,
    formValidator: UserInfoValidator,
  },
  2: {
    title: "Select Plan",
    component: Other,
    formValidator: () => true,
  },
  3: {
    title: "Add-Ons",
    component: Other,
    formValidator: () => true,
  },
  4: {
    title: "Sumary",
    component: Other,
    formValidator: () => true,
  },
};
