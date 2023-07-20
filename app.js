function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  //same keys and values ES2015


  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//computedPropertyNames ES2015


var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  //ObjectMethods ES2015

  //write a function which generates an animal object
  //accept 3 arguments: 
    //species: the species of animal ('cat', 'dog')
    //verb: a strung used to name a function ('bark', 'bleet')
    //noise: a string to be printed when above function is called ('woof', 'baaa')
    
    //const d = createAnimal('dog', 'bark', 'woof!')
        //{species: 'dog', bark: ƒ}
    //d.bark()//"woof!"