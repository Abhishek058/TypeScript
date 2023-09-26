let score: number | string = 33; // " | " --> union

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let abhishek: User | Admin = { name: "Abhishek", id: 234 };

abhishek = { username: "abhi123", id: 452 };
