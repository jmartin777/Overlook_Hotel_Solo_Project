class Customers{
    constructor(name, password, data){
        let currentCustomer = -1;
        let customerFound = false;
        const rootPass = "overlook2021"; //Site Password
        
        for(var i = 0; i < data.customers.length; i++) {
            console.log(name + "  " + password);
            console.log(data.customers[i].id);
            //console.log(data[0].customers[i].name + "vs" + nameInput);
            if (data.customers[i].id.toString() === name) {
                currentCustomer = i;    // position which customer was found
                customerFound = true;
                console.log("match found");
            }
        }
        if(customerFound === true){
            data.customers[currentCustomer].id;
            console.log("UserID = " + data.customers[currentCustomer].id);
            this.name = data.customers[currentCustomer].name;
            this.customerID = data.customers[currentCustomer].id;

        
        }
        else{
            this.name = false
            this.customerID = false
        }
    }
}



export default Customers