  // 4. Create an object to represent a record player called Jukebox.
  // Create another object to represent a Record.
  // The Jukebox should be able to tell you what Record is currently playing, 
  // and allow you to switch the currently playing record. 
  // The currently playing Record returned should be an object that allows you to query for the title
  // and artist of that record as well as the title and artist combined together into one string
  // Create instances of each object defined to prove that your object model works
  console.log("----------", "Exercise 4", "----------");
  
  function Record(artist, title) {
    this.artist = artist;

    this.title = title;

    this.isRecord = true;

    this.getRecord = function() {
      return artist + ", " + title;
    }
  }

  function RecordPlayer(recordList) {
    this.recordList = [];

    this.addRecord = function(x) {
      
      if (x.isRecord) {
        this.recordList.push(x);
      }
    }

    this.playRecord = function(songNumber) {
      // find the record using songNumber
      var song = this.recordList[songNumber];

      // console log that we are playing the song
      return "Current song playing is " + song.getRecord();
    }

  }

  var recordOne = new Record("Taylor Swift", "Shake It Off");
  var recordTwo = new Record("Nicki Minaj", "Anaconda");
  var recordThree = new Record("Iggy Azalea", "Black Widow");


  var jukebox = new RecordPlayer();
  jukebox.addRecord(recordOne);
  jukebox.addRecord(recordTwo);
  jukebox.addRecord(recordThree);

  console.log(jukebox.recordList);
  console.log(jukebox.recordList[0].title);
  console.log(jukebox.recordList[2].getRecord());
  console.log(jukebox.playRecord(1));