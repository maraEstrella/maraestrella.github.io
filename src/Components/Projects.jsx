import React, {Component} from 'react';
import Burger from '../img/burger.png';
import DoorIn from '../img/doorIn.png';
import Pokemon from '../img/pokemon.png';
import './Projects.css'

class Projects extends Component {
    
    render(){
        return(
        <div id="projects" className="projects">
            <h1 class="projectsName">Projects</h1>
            <div class="card-deck">
                <div class="card">
                    <img className="img-fluid" src={Burger}/>
                    <div class="card-body">
                        <h5 class="card-title"><i class="fas fa-hamburger"></i> BurgerQueen</h5>
                        <p class="card-text">It is a fast food web application with options for ordering and viewing orders in the kitchen. Technologies used: React Js, Firebase, Bootstrap</p>
                        <a href="https://marali5.github.io/GDL002-burger-queen" target="_blank" class="btnCheck  btn btn-primary">Check Out</a>
                    </div>
                </div>
                    <div class="card">
                        <img className="img-fluid" src={DoorIn}/>
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-door-open"></i> DoorIn</h5>
                            <p class="card-text">It is a web app to register the visits in a work center with option to take a photo and there is a section to view history.
                            Technologies used: Vanilla JavaScript, Firebase</p>
                            <a href="https://marali5.github.io/GDL002-visitors/index.html" target="_blank" class="btnCheck btn btn-primary">Check Out</a>
                        </div>
                    </div>
                    <div class="card">
                        <img className="img-fluid" src={Pokemon}/>
                        <div class="card-body">
                         <h5 class="card-title"><i class="fas fa-gamepad"></i> Pokedex</h5>
                         <p class="card-text">It is a web app designed for beginners in the pokemon game, they can visualize the different avatars and filter them by type.
                            Technologies used: Vanilla JavaScript and CSS.</p>
                         <a href="https://marali5.github.io/GDL002-data-lovers/src/index.html" target="_blank"  class="btnCheck btn btn-primary">Check Out</a>
                        </div>
                     </div>
                    </div>
            </div>
       
        

        );
    }
}
export default Projects;