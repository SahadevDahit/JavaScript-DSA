var listItem = ["sahadev", "dahit", "Dhangadhi"];
console.log(listItem);
var show = listItem.slice(0, 2);
console.log(show);


(listItem).forEach(element => {
    console.log(element);
});
foundd = (item) => {
    if (item === "dahit")
        console.log("\n" + item + " found sucessfully");


}

listItem.find(foundd)