let temp = 65

if (temp >= 60 && temp <= 90) {
    console.log('it is pretty nice out')
}


// challenge

// restaurant reservation system
let isGuestOneVegan = false
let isGuestTwoVegan = false

// are both vegan? only offer vegan food
if (isGuestOneVegan && isGuestTwoVegan){
    console.log('here are the vegan options.')
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('Heres some vegan and non-vegan options')
} else {
    console.log('here is the entire menu')
}
// if only one is vegan? offer both
// else if neither are vegan offer anything