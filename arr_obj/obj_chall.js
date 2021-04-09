let house = {
    rooms: [
        {
            doors:3,
            windows: 4,
            flooring: 'carpet',
            name: 'bedroom',
            current_occupants : []
        },

        {
            doors:3,
            windows: 4,
            flooring: 'tile',
            name: 'bath',
            current_occupants : []

        },
        {
            doors:0,
            windows: 2,
            flooring: 'hardwood',
            name: 'kitchen',
            current_occupants : []
        },
    ],
    people: [
        {
            name:'Justin',
            age:28
        },
        {
            name:'Tony',
            age:8
        },
    ]
}

// console.log(house.rooms[1].name)
// console.log(house.rooms.name)  //[bedroom, bath, kitchen]

// console.log(house.rooms.map(room=> room.name))
console.log(house.rooms[2])

house.rooms[2].current_occupants = 
    house.people


// house.rooms[2].current_occupants.push(house.people)

console.log(house.rooms[2])

