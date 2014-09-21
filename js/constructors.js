  // 2. Define an object using a constructor function that
  // has at least one attribute and one method
  console.log("----------", "Exercise 2", "----------");


  function Cat(catColor, catFat, catDiet){

    this.catColor = catColor;
    this.catFat = catFat;
    this.catDiet = catDiet;

    this.eat = function(){
      if(this.catFat){
        return " likes to eat " + this.catDiet;
      }
    }
  }

  var garfield = new Cat("orange", true, "lasagna");
  console.log("Garfield " + garfield.eat());

  Cat.prototype.isLazy = true;
  console.log("It's " + garfield.isLazy + " Garfield is lazy.");

  Cat.prototype.looksLike = function(){
    return "Garfield looks like an " + garfield.catColor + " cheese ball."
  };
  console.log(garfield.looksLike());