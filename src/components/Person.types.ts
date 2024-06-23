// First Method
// export type PersonProp = {
//     name: {
//         first: string,
//         last: string
//     }
// }

export type Name = { // we can use it anywhere used - Person and PersonList
    first: string
    last: string
}

export type PersonProp = {
    name: Name
}