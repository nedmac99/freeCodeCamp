/* Complete the function using the rules below to modify the object passed to the function.

    Your function must always return the entire records object.        -Check
    If value is an empty string, delete the given prop property from the album.
    If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
    If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.

Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object. */



// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {

    if(value == ''){
        delete records[id][prop];
    }
    else if(prop != "tracks"){
        records[id][prop] = value;
    }
    else if(!records[id].hasOwnProperty('tracks')){
        records[id].tracks = [];
        records[id].tracks.push(value);
    }
    else{
        records[id].tracks.push(value);
    }

    return records;
  }
  