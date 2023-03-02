class Rooms{
    constructor(bookingProfile,data){
        let tempRoomNumber = [];
        let tempRoomType = [];
        let tempBidet = [];
        let tempBedSize = [];
        let tempNumBeds = [];
        let tempCostPerNight =[];
        let tempBookingID = [];
        let tempTotalSpent = 0;
        let tempDate = [];
        for(var i = 0; i < bookingProfile.roomNumber.length; i++) {
            for(var x = 0; x < data.rooms.length; x++) {
                if (data.rooms[x].number === bookingProfile.roomNumber[i]) {
                    tempRoomNumber.push(data.rooms[x].number);
                    tempRoomType.push(data.rooms[x].roomType);
                    tempBidet.push(data.rooms[x].bidet);
                    tempBedSize.push(data.rooms[x].bedSize);
                    tempNumBeds.push(data.rooms[x].numBeds);
                    tempCostPerNight.push(data.rooms[x].costPerNight);
                    tempTotalSpent = tempTotalSpent + data.rooms[x].costPerNight;
                    tempBookingID.push(bookingProfile.roomID[i]);
                    tempDate.push(bookingProfile.date[i])
                }
            }
        } 
        this.roomNumber = tempRoomNumber;
        this.roomType = tempRoomType;
        this.bidet = tempBidet;
        this.bedSize = tempBedSize;
        this.numBeds = tempNumBeds;
        this.costPerNight = tempCostPerNight;
        this.bookingID = tempBookingID;
        this.totalSpent = tempTotalSpent;
        this.date = tempDate;
    }
}

export default Rooms