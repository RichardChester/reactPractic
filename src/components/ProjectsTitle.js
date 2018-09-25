import React, { Component } from 'react';
import ProjectsItemsExport from './ProjectItemFile.js'


class ProjectsTitleExport extends Component {
    render() {
        let ProjectItemsVar;
        if(this.props.ProjectsArrayPass){
            ProjectItemsVar=this.props.ProjectsArrayPass.map(projectMapping =>{
                console.log(ProjectItemsVar);
                return (
                    <ProjectsItemsExport key={projectMapping.title}  projectMap={projectMapping}/>
                )
            });
       }
      //console.log(this.props); {/*/displays the array created in App.js to the console*/}

        return (
            <div className="ProjectClassName">
                {ProjectItemsVar}
                {this.props.test} {/*/makes it print hello world from the test prop locatd in app.js*/}
            </div>
        );
    }
}

export default ProjectsTitleExport;
