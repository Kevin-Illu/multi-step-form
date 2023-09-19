import { UserData } from "../../store";

export function SavePlan(subscription: Subscription) {
  UserData.update((userData) => {
    userData.subscription = subscription;
    return userData;
  });
}
