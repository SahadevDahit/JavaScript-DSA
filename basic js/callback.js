var func1 = () => {
    setTimeout((callfunc2) => {
        console.log("Hello this is from function 1");
        callfunc2;
    }, 3000);
}
var func2 = () => {
    setTimeout(() => {
        console.log("Hello this is from function 2");

    }, 1000);
}

func1(func2());

//Callback function is the processs in which we pass the 
//function as a variable or aurguement to another function