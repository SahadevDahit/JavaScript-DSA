function func() {
    console.log("Nornally used function");
    var d = new Date();
    console.log("The current time is " + d.getTime());

}

var func1 = (name) => {
    console.log("fat arrow function");
    console.log("Hello welcome to you ❤️ 💋 " + name);
}
func();
func1("Dahit");