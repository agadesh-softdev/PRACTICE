{
  let a = 10;
  let b = 20;
  function greet(agi) {
    result = a + b;
    agi(result);
  }
  function aga(sum) {
    console.log("The answer is " + sum);
  }
  greet(aga);
}

{
  let email = "agadesh.softdev@gmail.com";
  let password = "12345";

  let agadesh = function logging(callback) {
    console.log("Fetching details");
    if (email == "agadesh.softdev@gmail.com" && password == "12345") {
      setTimeout(() => {
        callback("Succesfully logged in");
      }, 3000);
    } else {
      setTimeout(() => {
        callback("Failed to login");
      }, 1500);
    }
  };
  function show(mes) {
    console.log(mes);
  }
  agadesh(show);
}
