interface AddOn {
  name: string;
  description: string;
  price: {
    month: number;
    year: number;
  };
}

interface AddOns {
  [id: number]: AddOn;
}
