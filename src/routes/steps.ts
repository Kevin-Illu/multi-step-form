import type { ComponentType } from "svelte";
import UserInfo from "./UserInfo.svelte";
import Other from "./Other.svelte";

interface ISteps {
  [id: string]: {
    title: string;
    component: ComponentType;
  };
}

export const Steps: ISteps = {
  1: {
    title: "Your Info",
    component: UserInfo,
  },
  2: {
    title: "Select Plan",
    component: Other,
  },
  3: {
    title: "Add-Ons",
    component: Other,
  },
  4: {
    title: "Sumary",
    component: Other,
  },
};
