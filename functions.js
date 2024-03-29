function sort(){
    let names = ["fanny", "frida", "fancy", "faith"];
    console.log(names.sort());
    console.log(names.reverse());
}
sort()

let employee = [
    { id: 62 },
    { name: "madina" },
    { salary: [12000, 67000, 10000, 33000] },
  ];
    employee.sort(function(a, b) {
    return a.salary - (b.salary);
  });
  employee.forEach((individual) => console.log(employee.salary));
 console.log(employee);

function multiply(numbers) {
    numbers.forEach((number) => {
       console.log(number * 2);
    });
   }
   multiply([10, 22, 43, 74]);
    function changeArray2(arr) {
    const firstFour = arr.slice(0, 4).map(item => item * 8);
    const lastTwo = arr.slice(-2).map(item => item + 5);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
   }
   changeArray2([8, 7,9,4,2,9]);

   