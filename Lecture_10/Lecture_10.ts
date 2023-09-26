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

function getId(id: number | string) {
  console.log(`Your ID: ${id}`);
}

getId("8142");
getId(3525);

export {};
