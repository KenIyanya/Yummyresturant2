<<<<<<< HEAD
import React from 'react'



const Contact = () => {
  return (
    <div>
    
   
   
    <div className="container">
        
        <div className="row">
            <div className="col-sm-12">
                <div className="contact-mf">
                    <div id="contact" className="box-shadow-full">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="title-box-2">
                                    <h5 className="title-left">
                                    Send Message To Us
                                    </h5>
                                </div>
                                <div>
                                    <form method="post" role="form" className="contactForm">
                                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                                        <div id="errormessage"></div>
                                        <div className="row">
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                    <div className="validation"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                    <div className="validation"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validation"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                    <div className="validation"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="title-box-2 pt-4 pt-md-0">
                                    <h5 className="title-left">
                                    Get in Touch
                                    </h5>
                                </div>
                                <div className="more-info">
                                    <p className="lead">
                                    You can contact us via email, call or across my social media pages!
                                    </p>
                                    <ul className="list-ico">
                                    <li><span className="ion-ios-telephone"></span> +2349055476920</li>
                                    <li><span className="ion-ios-telephone"></span> +2348108516510</li>
                                    <li><span className="ion-email"></span> yummyrestaurant@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="socials">
                                    <ul>
                                    <li><a href="https://www.facebook.com/yummyresturant"><span className="ico-circle"><i className="ion-social-facebook"></i></span></a></li>
                                    <li><a href="https://www.instagram.com/yummyresturant/"><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                                    <li><a href="https://twitter.com/yummyresturant"><span className="ico-circle"><i className="ion-social-twitter"></i></span></a></li>
                                    <li><a href="https://wa.me/+234"><span className="ico-circle"><i className="ion-social-whatsapp"></i></span></a></li>
                                    <li><a href="https://github.com/"><span className="ico-circle"><i className="ion-social-github"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</div>
  )
}

=======
import React from 'react'
import Navbar from '../Navbar/navbar'


const Contact = () => {
  return (
    <div>
    
    <div className="overlay-mf"></div>
    <Navbar />
    <div className="container">
        
        <div className="row">
            <div className="col-sm-12">
                <div className="contact-mf">
                    <div id="contact" className="box-shadow-full">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="title-box-2">
                                    <h5 className="title-left">
                                    Send Message Us
                                    </h5>
                                </div>
                                <div>
                                    <form method="post" role="form" className="contactForm">
                                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                                        <div id="errormessage"></div>
                                        <div className="row">
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                    <div className="validation"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                    <div className="validation"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                    <div className="validation"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                    <div className="validation"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="title-box-2 pt-4 pt-md-0">
                                    <h5 className="title-left">
                                    Get in Touch
                                    </h5>
                                </div>
                                <div className="more-info">
                                    <p className="lead">
                                    You can contact us via email, call or across my social media pages!
                                    </p>
                                    <ul className="list-ico">
                                    <li><span className="ion-ios-telephone"></span> +2349055476920</li>
                                    <li><span className="ion-ios-telephone"></span> +2348108516510</li>
                                    <li><span className="ion-email"></span> yummyrestaurant@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="socials">
                                    <ul>
                                    <li><a href="https://www.facebook.com/benjamin.oyejide/"><span className="ico-circle"><i className="ion-social-facebook"></i></span></a></li>
                                    <li><a href="https://www.instagram.com/benjamin_busari/"><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                                    <li><a href="https://twitter.com/bheejayrichard"><span className="ico-circle"><i className="ion-social-twitter"></i></span></a></li>
                                    <li><a href="https://wa.me/+2349055476920"><span className="ico-circle"><i className="ion-social-whatsapp"></i></span></a></li>
                                    <li><a href="https://github.com/benjamin3327?tab=repositories"><span className="ico-circle"><i className="ion-social-github"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</div>
  )
}

>>>>>>> cd8196ff4f196be23b7b3756cdbd09db32644d95
export default Contact