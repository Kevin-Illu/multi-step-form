import { UserData } from "../../routes/store";

export function SaveAddOns(data: Array<{ [key: string]: AddOnsType }>) {
  UserData.update((uData) => {
    data.forEach((data) => {
      const [name, value] = Object.entries(data)[0];
      uData.addOns[name] = value;
    });
    return uData;
  });
}
