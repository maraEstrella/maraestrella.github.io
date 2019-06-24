import React, {Component} from 'react';
import './Contact.css'

class Contact extends Component {
    
    render(){
        return(
            <div className="contact">
            <h2 className="getName">Get In Touch</h2>
            <ul class="list-group-horizontal-md networks">
  <i class="fab fa-linkedin"></i>
  <i class="fab fa-github-square"></i>
  <i class="fas fa-mobile-alt"></i>
</ul>
            <div class="container-fluid ">
    <form className="col-md-6 offset-md-4">
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputName">Name</label>
                        <input type="name" class="form-control" id="inputName" placeholder="Name"></input>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email"></input>
                    </div>
                 </div>
                 <div class="form-group">
    <label for="exampleFormControlTextarea1" >Comments</label>
    <textarea class="form-control col-md-8" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
    </div>
            </div>
            
            
            
           
        );
        
    }
}
export default Contact;