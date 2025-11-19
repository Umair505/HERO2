{
  const user = {
    name: "Moinul",
    age: 24,
  };

  const user2 = {
    id: 1,
    ...user,
    address: "halishahar k block",
  };
  const numbers: number[] = [1, 2, 3, 4, 5, 5, 6];
  const numbers2: number[] = [0, ...numbers, 7, 8];
  // console.log(numbers2)
  // console.log(user2)
  function restFn(...num: number[]): void {
    console.log(num);
  }
  restFn(1, 2, 3, 4, 4, 5);
  const {name,age} = user2;
//   console.log(name,age);
let time = 11.12
const status = time >=12 ? "fashi hobe shekh hasinar" : "Wait koro rai dibe ektupor";
console.log(status);

}
