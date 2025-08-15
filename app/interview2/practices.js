function myresult() {
  function myfunction() {
    console.log("Hello from myfunction");
    return "This is my result from myfunction";
  }
  return myfunction;
}
const myDetails = myresult();
console.log(myDetails());
