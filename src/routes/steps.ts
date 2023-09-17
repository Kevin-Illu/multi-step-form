import type { ComponentType } from "svelte";
import UserData from "./UserData.svelte";
import Other from "./Other.svelte";

interface Steps {
  [id: string]: {
    title: string;
    component: ComponentType;
  };
}

export const StepsStore: Steps = {
  1: {
    title: "Your Info",
    component: UserData,
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
