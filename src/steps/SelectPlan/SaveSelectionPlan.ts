import { UserData } from "./../../routes/store";

export function SavePlan(subscription: Subscription) {
  UserData.update((userData) => {
    userData.subscription = subscription;
    return userData;
  });
}
