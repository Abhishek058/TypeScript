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

const data1: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: string[] | number[] = ["1", "2", "3"];
const data4: (string | number | boolean)[] = ["1", 2, "3", true];

export {};
