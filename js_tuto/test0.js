//functional block scope, anonymous function, closures, IIFE

const arr = [10, 12, 15, 21, 32];

const arr1 = [23, 24, 25];

for (var i = 0; i < arr.length; i++) {

  // pass in the variable i so that each function
  // has access to the correct index

  setTimeout(function(i_local) {

    return function() {

      console.log('The index of this number is: ' + i_local);

    }

  }(i), 3000);
}

for (var j = 0; j < arr1.length; j++) {

  // pass in the variable i so that each function
  // has access to the correct index

  setTimeout(function(i_local) {

    return function() {

      console.log('2_ The index of this number is: ' + i_local);

    }

  }(j), 3000);
}
