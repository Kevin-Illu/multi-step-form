type SubscriptionData = {
  [key: string]: {
    iconPath: string;
    price: {
      [key in SubscriptionType]: number;
    };
  };
};
