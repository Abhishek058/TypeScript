const user = {
  name: "Abhishek",
  email: "abhi@co.in",
  isActive: true,
};

const createUser = ({ name: string, isPaid: boolean }) => {};

createUser({ name: "abhi", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "ReactJS", price: 599 };
}


export {};
