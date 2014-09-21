  // 5. Implement an object model that allows you to store strings that represent a Photo.
  // Your model should include an Album object that can contain many Photo objects in its photos attribute.
  // Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. 
  // Each Photo should tell you the photo’s file name and the location the photo was taken in.
  // Create instances of each object defined to prove that your object model works
  console.log("----------", "Exercise 5", "----------");

  function Photo (location, filename){
    this.location = location;
    this.filename = filename;
  }

  function Album (){
    this.photoAry = [];
    this.addNew = function(p){
      this.photoAry.push(p);
    }
  }

  var photoOne = new Photo("Italy", "Rome_1");
  var photoTwo = new Photo("Italy", "Rome_2");
  var photoThree = new Photo("Italy", "Milan_1");
  var photoFour = new Photo("Italy", "Florence_1");


  var italyAlbum = new Album();
  italyAlbum.addNew(photoOne);
  italyAlbum.addNew(photoTwo);
  italyAlbum.addNew(photoThree);
  italyAlbum.addNew(photoFour);

  console.log(photoOne.location);
  console.log(photoTwo.filename);
  console.log(italyAlbum.photoAry);
  console.log(italyAlbum.photoAry[3]);
  console.log(italyAlbum.photoAry[2].location);