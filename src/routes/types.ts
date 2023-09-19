type AddOnsType = {
  active: boolean;
  pricePerMonth: number;
  pricePerYear: number;
};

type SubscriptionType = "monthly" | "yearly";

type Subscription = {
  price: number;
  name: string;
  type: SubscriptionType;
};

type UserInformation = {
  name: string;
  email: string;
  phoneNumber: string;
  subscription: Subscription;
  addOns: Record<string, AddOnsType>;
};
