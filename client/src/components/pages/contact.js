import React from 'react';
import Header from "../header"
import '../../css/contact.css';
const Contact = () => {
    return(

        <div>
            <Header/>
            <h1>Here are some ways to contact us</h1>
            <p><button class = "contactbutton"><a class = "linkemail" href="https://github.com/MichaelM1999/PROJECT-3">Visit our Github Repo</a></button></p>

            <p><button class = "contactbutton"><a class = "linkemail" href = "mailto:dyl6999@hotmail.com?subject = Feedback&body = Message">
            dyl6999@hotmail.com
            </a></button></p>

            <p><button class = "contactbutton"><a class = "linkemail" href = "mailto:mariea.michael@gmail.com?subject = Feedback&body = Message">
            mariea.michael@gmail.com
            </a></button></p>
             
        </div>
    )
}
export default Contact;
