type AddOnsType = {
  active: boolean;
  pricePerMonth: number;
  pricePerYear: number;
};

type SubscriptionType = "monthly" | "yearly";

type subscription = {
  price: number;
  name: SubscriptionType;
}

type UserInformation = {
  name: string;
  email: string;
  phoneNumber: string;
  subscription: subscription;
  addOns: Record<string, AddOnsType>;
};
