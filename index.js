function wakeDog(dogName, dogBreed) {
   let wake = "Wake " + dogName + " the " + dogBreed;
   console.log(`Wake ${dogName} the ${dogBreed}`);
   return wake
  }

  function leashDog(dogName, dogBreed) {
    let leash = "Leash " + dogName + " the " + dogBreed;
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return leash
  }

  function walkToPark(dogName, dogBreed) {
    let walkto = "Walk to the park with " + dogName + " the " + dogBreed;
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return walkto
  }

  function throwFrisbee(dogName, dogBreed) {
    let throwF = "Throw the frisbee for " + dogName + " the " + dogBreed;
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return throwF
  }

  function walkHome(dogName, dogBreed) {
    let walkh = "Walk home with " + dogName + " the " + dogBreed;
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return walkh
  }

  function unleashDog(dogName, dogBreed) {
    let unleash = "Unleash " + dogName + " the " + dogBreed;
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return unleash
  }

  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

  function exerciseDog(dogName, dogBreed) {
    const new_array = routine.map(x => x(dogName, dogBreed))
  
    return new_array;
  }

