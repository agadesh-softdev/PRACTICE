// IF ELSE
{
  let aga = 10;
  if (aga >= 10) {
    console.log("number is greater than 10");
  } else {
    console.log("number is less than 10");
  }
}

// ELSE IF

{
  let agi = 21;
  if (agi <= 10) {
    console.log("number is less than 10");
  } else if (agi <= 20) {
    console.log("number is less than 20 but greater than 10");
  } else {
    console.log("number is greater than 20");
  }
}

// SWITCH CASE

{
  let ak = "agadesh";
  switch (ak) {
    case "aga":
      console.log("aga is found");
      break;
    case "agi":
      console.log("agi is found");
      break;
    case "agadesh":
      console.log("agadesh is found");
      break;
    default:
      console.log("Sorry name not found");
  }
}

// TERNARY

{
  let agadesh = true;
  let agi = agadesh ? "yes it's" : "Not found";
  console.log(agi);
}
