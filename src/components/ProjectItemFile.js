import React, { Component } from 'react';



class ProjectsItemsExport extends Component {
    render() {

        return (
            <li className="ProjectItemsClassName">
                <strong>{this.props.projectMap.title}</strong> - {this.props.projectMap.catagory}
            </li>
        );
    }
}

export default ProjectsItemsExport;