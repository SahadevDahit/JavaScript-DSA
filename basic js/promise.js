work = () => {
    return mypromise = new Promise((resolve, reject) => {
        var site = "googgle";
        if (site === "google") {
            resolve(site);
        } else {
            reject(site);
        }
    });

}

// mypromise.then(message => {
//     console.log(`Sucessfully entered into ${message}`);
// }).catch(err => {
//     console.log(`promise rejected  into ${err}`);

// })
// console.log(work);
work().then(message => {
    console.log("Promise copleted");
}).catch(err => {
    console.log("Rejected");
})