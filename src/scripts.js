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
const loginPass = document.getElementById('password');
// Event Listeners
form.addEventListener('submit', submitForm);



function submitForm(event){
    event.preventDefault();
    const nameInput = loginName.value;
    const passInput = loginPass.value;
    //console.log(nameInput);
    //console.log(passInput);
    
    fetchAll()
    .then(data => {
        
            
        var customerProfile = new Customers(nameInput, passInput, data[0]);
        console.log(customerProfile.name)

        if(!(customerProfile.name === false)){
            console.log("found user profile")
            var bookingProfile = new Bookings(customerProfile,data[1]);
            console.log(bookingProfile.roomNumber)
        }
        
        if(!(typeof bookingProfile === "undefined")){
            console.log("found booking profile")
            var roomsProfile = new Rooms(bookingProfile,data[2])
            console.log(roomsProfile)
        } else {
            console.log("match not found");
        }
    })
}




