  // 3. Create an object called Multiplier with two methods:multiply and getCurrentValue. 
  // Multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied. 
  // getCurrentValue should return the last answer returned from multiply.
  console.log("----------", "Exercise 3", "----------");

  var results = 1;
  var nums = [2, 3, 6];
  var getCurrentValue;

  var multiplier = {

    multiply : function(nums){

      for(i in nums){
        results = nums[i] * results; 

        getCurrentValue = function(){
          return results;
        }
      }
    }
  }

  multiplier.multiply(nums);
  

  console.log(getCurrentValue());