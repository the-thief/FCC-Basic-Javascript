
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line

//use for loop to iterate through firstName properties of contacts object
// return value of property if variables passed in function, first name and property
// match contact
  for (var i =0; i < contacts.length; i++) {
if (firstName == contacts[i].firstName && contacts[i].hasOwnProperty(prop)) {
  return contacts[i][prop];
}
}
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
