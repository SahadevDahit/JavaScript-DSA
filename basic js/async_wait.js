var mypromise = new Promise((myresolve, reject) => {

    var site = "googgle";
    if (site == "google") {
        myresolve(site);

    } else {
        reject(site);
    }
});

async function func() {
    try {
        let completed = await (mypromise);
        console.log(`sucessfully entered into ${completed}`);
    } catch (error) {
        console.log(`unable to entered into ${error}`);

    }

}
func();