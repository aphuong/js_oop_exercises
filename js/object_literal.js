  // 1. Try creating an object that represents something in the “real world”
  // using the object literal notation (Car, Person, User)
  console.log("----------", "Exercise 1", "----------");
  var dog = {
    legs : 4,
    breed : "maltese",
    color : "white",
    barks : true
  }

  // Write a method that lists the properties of a JavaScript object
  for (i in dog){
    console.log(i);
  }