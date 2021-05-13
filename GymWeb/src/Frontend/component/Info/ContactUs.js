import React from 'react';

function ContactUs(props) {
    return (
        <div className="container">
            <div className="row contact-background">
                <div className="col-md-6 container-contact">
                    
                    <h1 className="text-light">Contact Us</h1>
                    {/* contact on facebook */}
                    <div className="contact-box">
                        <img alt="facebook" className="contact-icons" src='https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png' />
                        <a href="//facebook.com" target="_blank" rel="noreferrer" className="dev-contact">Tran Hoang Long</a>
                    </div>

                    {/* contact on gmail */}
                    <div className="contact-box">
                        <img alt="facebook" className="contact-icons" src='https://img-authors.flaticon.com/google.jpg' />
                        <a href="//gmail.com" target="_blank" rel="noreferrer" className="dev-contact">Tran Hoang Long</a>
                    </div>

                   
                </div>
            </div>
        </div>
    );
}

export default ContactUs;