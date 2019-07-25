import React, {Component} from 'react';
import './About.css'
import Mara from '../img/Mara.jpg';
import Group from '../img/Group.png';
import Words from '../img/words.png';

class About extends Component {
    render(){
        return(
          <div id="about" className="about">
            <h1 class="aboutName">About me</h1>
            <div class="container">
  <div className="row">
    <div class="col-sm-5 col-md-6"><img className="photo img-fluid" src={Mara}/></div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><h4 className="font">Summary</h4>
    <p className="summary">I am an enthusiastic person who likes challenges and meet new things.
            Laboratoria is the beginning of a great path as a programmer,
            In the future I would like to join  my career as electronic engenering and programming.</p></div>
  </div>
  <div className="row">
    <div class="col-sm-6 col-md-5 col-lg-6"><h4 className="softfont">Soft Skills</h4><img className="img-fluid sSkills" src={Words}/></div>
    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><h4 className="font"></h4><img className="img-fluid tSkills" src={Group}/></div>
  </div>
</div>
</div>
        );
    }
}
export default About;