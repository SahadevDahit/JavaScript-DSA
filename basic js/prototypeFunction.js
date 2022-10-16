function func() {
    console.log("parent function")
}
func.prototype.call = function () {
    console.log("prototype function")
}


let func_obj = new func();
func_obj.call();