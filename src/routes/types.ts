type AddOnsType = {
  active: boolean;
  price: number;
};

type SubscriptionType = "monthly" | "yearly";

type Subscription = {
  price: number;
  name: string;
  type: SubscriptionType | null;
};

type UserInformation = {
  name: string;
  email: string;
  phoneNumber: string;
  subscription: Subscription;
  addOns: Record<string, AddOnsType>;
};
