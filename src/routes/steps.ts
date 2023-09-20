import type { ComponentType } from "svelte";

import UserInfo from "./../steps/UserInfo/index.svelte";
import { SaveUserData } from "./../steps/UserInfo/SaveUserData";
import { UserInfoValidator } from "./../steps/UserInfo/validateForm";

import SelectPlan from "./../steps/SelectPlan/index.svelte";
import { SavePlan } from "./../steps/SelectPlan/SaveSelectionPlan";

import AddOns from "./../steps/AddOns/index.svelte";
import { SaveAddOns } from "../steps/AddOns/SaveAddOns";

import Finishing from "../steps/Finishing.svelte";
import End from "../steps/End.svelte";

interface ISteps {
  [id: string | "null"]: {
    title: string;
    component: ComponentType;
    formValidator: (args?: any) => boolean;
    saveData: (args?: any) => void;
  };
}

export const Steps: ISteps = {
  1: {
    title: "Your Info",
    component: UserInfo,
    formValidator: UserInfoValidator,
    saveData: SaveUserData,
  },
  2: {
    title: "Select Plan",
    component: SelectPlan,
    formValidator: () => true,
    saveData: SavePlan,
  },
  3: {
    title: "Add-Ons",
    component: AddOns,
    formValidator: () => true,
    saveData: SaveAddOns,
  },
  4: {
    title: "Sumary",
    component: Finishing,
    formValidator: () => true,
    saveData: () => null,
  },
  null: {
    title: "Thank You",
    component: End,
    formValidator: () => true,
    saveData: () => null,
  },
};
