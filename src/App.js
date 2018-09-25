import React, { Component } from 'react';
import ProjectsTitleExport from './components/ProjectsTitle.js'
import './App.css';

class App extends Component {
    constructor(){

        super();
        this.state={
            projectsAray:[
                {
                title: 'business web',
                catagory: 'web design'
            },
            {
                title: 'Social app',
                catagory: 'Mobile Development'
            },
            {
                title: 'Ecomerce',
                catagory: 'web development'
            }
            ]

        };

componentWillMount()
    }


  render() {
    return (
      <div className="App">
       my app
          <ProjectsTitleExport test=' hello world' ProjectsArrayPass={this.state.projectsAray}/>
      </div>
    );
  }
}

export default App;
