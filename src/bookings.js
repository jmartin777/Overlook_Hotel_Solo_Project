class Bookings{
    constructor(customerProfile,data) {
        let tempRoomID = [];
        let tempUserID = [];
        let tempDate = [];
        let tempRoomNumber = [];
        for(var i = 0; i < data.bookings.length; i++) {
                if (data.bookings[i].userID === customerProfile.customerID) {
                    console.log('bookingFound');
                    tempRoomID.push(data.bookings[i].id); 
                    tempUserID.push(data.bookings[i].userID);
                    tempDate.push(data.bookings[i].date);
                    tempRoomNumber.push(data.bookings[i].roomNumber);
                }
            }
        //console.log(customerProfile.customerID)
        this.roomID = tempRoomID;
        this.userID = tempUserID;
        this.date = tempDate;
        this.roomNumber = tempRoomNumber;
    }
}
    
export default Bookings