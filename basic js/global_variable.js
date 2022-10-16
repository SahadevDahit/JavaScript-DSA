// if the variable is declared without any datatypes
// or with var , let or const then it is considered as
//global variable

// Function to increment counter
function add() {
    let counter = 0;
    counter += 1;
    return console.log(counter);
}

// Call add() 3 times
add();
add();
add();

//The counter should now be 3. But it is 1.