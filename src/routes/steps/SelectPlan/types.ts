type Subscription = {
  [key: string]: {
    iconPath: string;
    price: {
      [key in SubscriptionType]: number;
    };
  };
};
