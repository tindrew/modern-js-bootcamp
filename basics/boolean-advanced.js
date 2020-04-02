let isAccountLocked = false
let userRole = 'user'


if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('welcome admin')
} else {
    console.log('welcome')
}


// challenge area

let temp = 81

if (temp <= 32) {
    console.log('its freezing outside')
} else if (temp >= 110) {
    console.log('its hot outside')
} else {
    console.log('Go for it, its pretty nice')
}
