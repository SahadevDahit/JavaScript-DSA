let biodata = [{
        name: "Sahadev",
        contact: 9800
    }, {
        name: "Dahit",
        contact: 7788
    },
    {
        name: "Robin",
        contact: 9988
    }
];
let user = [{
        username: "Admin",
        password: "1234"
    },
    {
        ...biodata
    }
]
console.log(user);
// console.log(biodata[1].name)
// biodata.map((value, key) => {
//     console.log(key)
//     console.log(value.name)
//     console.log(value.contact)

// })
let display = (data) => {
    console.log(data)
}

// 
// biodata.map(value => {
//     display(value.name)
// })