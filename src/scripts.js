// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import fetchAll from './apiCalls';
import Customers from './customer';
import Bookings from './bookings';
import Rooms from './rooms';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// variables

const loginButton = document.getElementById('login-button');
const form = document.getElementById("formID");
const loginName = document.getElementById('name');
// Event Listeners
form.addEventListener('submit', submitForm);



function submitForm(event){
    event.preventDefault();
    const nameInput = loginName.value;
    //console.log(nameInput);
    let currentCustomer = 999;
    let customerFound = false;
    fetchAll()
    .then(data => {
        for(var i = 0; i < data[0].customers.length; i++) {
            //console.log(data[0].customers[i].name + "vs" + nameInput);
            if (data[0].customers[i].name === nameInput) {
                currentCustomer = i;    // position which customer was found
                customerFound = true;
                console.log("match found");
            }
            
        }
        if(customerFound === true){
            data[0].customers[currentCustomer].id;
            console.log("UserID = " + data[0].customers[currentCustomer].id);
            
            
            var customerProfile = new Customers(nameInput, data[0].customers[currentCustomer].id);
            var bookingsProfile = new Bookings(customerProfile,data[1]);
            console.log(bookingsProfile.roomID[0])
        }
        else{
            console.log("match not found");
        }
   //
   //customerProfile.findCustomer();
           
    })
}




