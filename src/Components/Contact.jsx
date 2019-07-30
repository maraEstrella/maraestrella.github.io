import React, {Component} from 'react';
import './Contact.css'

class Contact extends Component {
    
    render(){
        return(
            <div id="contact" className="contact">
            <h2 className="getName">Get In Touch</h2>
            <ul class="list-group-horizontal-md networks">
  <a href="https://www.linkedin.com/in/mara-estrella-5a097a105/"><i className="fab fa-linkedin" ></i></a>
  <a href="https://github.com/marali5"><i class="fab fa-github-square"></i></a>
  <a href="https://www.dropbox.com/h?preview=CvMaraEstrella.pdf"><i className="fas fa-file-download"></i></a>
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
                <button type="submit" class="subBtn btn btn-primary">Send</button>
            </form>
    </div>
            </div>
            
            
            
           
        );
        
    }
}
export default Contact;