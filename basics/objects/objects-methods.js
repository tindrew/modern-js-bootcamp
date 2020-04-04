let restaurant = {
    name: 'ASB', 
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (guests) {
        this.guestCount = this.guestCount + guests
    },

    removeParty: function(guests) {
        this.guestCount = this.guestCount - guests
    }

}




restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

// seatParty(5)
// console.log(restaurant.guestCount)
// removeParty(3)
// console.log(restaurant.guestCount)
