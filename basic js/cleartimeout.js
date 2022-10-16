var a = 0;
var clrtimeout = setInterval(() => {
    console.log(a);
    a++;
    if (a === 10) {
        clearInterval(clrtimeout);
    }
}, 1000);