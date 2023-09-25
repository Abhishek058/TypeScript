type User = {
  readonly id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCart?: number; // ? -> use to set the field opetional
};

let myUser: User = {
  id: "1qw23e",
  name: "John",
  email: "j@j.mail",
  isActive: true,

  // creditCart: 1234567890, //can pass or may be  not
};

myUser.email = "j@bj.mail";

// myUser.id = "21233"; //readonly variable cant be changed

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetail = {
  cardDetail: string;
};

export {};
