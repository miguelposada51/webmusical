import React, { Component } from "react";
import FormComponent from "./FormComponent";
import Particles from "./ParticlesComponent";


export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        name: "",
        description: "",
        level: "Junior",
        salary: 30000
      },
      jobs: ["Butcher","chief"],
      particles : false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => ({
      jobs: [...prevState.jobs, prevState.post],
      post: { name: "este", description: "esta", level: "bien", salary: 30000 },
      particles: true
    }));
  };

  render() {
    // #TO DO validar si click en submit para renderizar component particles
    //let showComponent = "";
   if(this.state.particles){
    
   }
    
    return (
      <div className="App">
        <nav>
          <button className="btn btn-primary">Post it!</button>
        </nav>
        * This is the section i've been trying to put in a separate component...
        *
        
        {
         this.state.particles ? <Particles toggle={this.togglePop} /> :
          <FormComponent
            handleChange={this.handleChange}
            post={this.state.post}
            handleSubmit={this.handleSubmit}
          />
        }
        <div className="post-container">
          <ul>
            {this.state.jobs.map((job, index) => (
              <li key={index}>
                <ul className="post-tile">
                  <li className="post-tile-name">{job.name}</li>
                  <li className="post-tile-level">{job.level}</li>
                  <li className="post-tile-description">{job.description}</li>
                  <li className="post-tile-salary">£{job.salary}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

