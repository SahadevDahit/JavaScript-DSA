let arr = [{
        id: 1,
        name: "Dahit",
        address: "Lalpur"
    },
    {
        id: 2,
        name: "Sahadev",
        address: "Attriya"
    },
    {
        id: 3,
        name: "tihad",
        address: "Dhangadhi"
    }
]
arr.map((value, key) => {
    const { id, name, address } = value;

    console.log("ID" + id)
    console.log("Name is " + name)
    console.log("And Address is " + address)
    console.log("And key is " + key)

})