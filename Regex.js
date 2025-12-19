// EMAIL
{
  let regex = /^[a-z]+.[0-9]+@[a-z]+.[a-z]+$/;
  let aga = "agadesh.123@gmail.com";
  let result = regex.test(aga);
  console.log(result);
}

// PHONE

{
  let regex = /\+\d{2}\s\d{10}$|\+\d{2}\d{10}$/;
  let aga = "agadeshwaran +91 6381458174";
  let result = regex.test(aga);
  console.log(result);
}

//STATEMENT

{
  let regex = /^\bThe price of the\b [a-z]+\s\bis\b\s([0-9,])/i;
  let aga = "The price of the car is 10,00,000";
  let result = regex.test(aga);
  console.log(result);
}
