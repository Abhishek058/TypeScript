function addTwo(num: number): number {
  return num + 2;
  //   return "hello";
}

addTwo(5);

function signUp(id: number, email: string, employee: boolean) {}
function logIn(id: number, email: string, employee: boolean = false) {}

signUp(1234, "abhi@chd.co", true);
logIn(0, "a@c.co");

const getVal = (myVal: number): boolean => {
  if (myVal > 5) {
    return true;
  }
  //   return "200 Ok";
  return false;
  // return statement must be there
};

export {};
