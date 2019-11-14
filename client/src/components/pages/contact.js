import React from 'react';
import Header from "../header"
import '../../css/contact.css';
const Contact = () => {
    return(

        <div>
            <Header/>
            <div id = contactpagetext>
            <h1>Here are some ways to contact us</h1>
            <p>
            Thank you for visiting our site! You may have already seen that some functions of our app aren't working if done quickly, this is due to us using a free api for this project making it difficult to display all the info we want with limited calls. If you are having problems with a certain function try slowing down to let our api catch up or report this issue to one of the developers below.
            </p>
            </div>
            <p><button class = "contactbutton"><a class = "linkemail" href="https://github.com/Dylster99/Project3final">Visit our Github Repo</a></button></p>
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
