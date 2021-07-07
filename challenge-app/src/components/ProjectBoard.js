import React from 'react'
import { connect } from 'react-redux';
import { getProjects } from '../actions';

class ProjectBoard extends React.Component {
    componentDidMount() {
        this.props.getProjects();
    }
    render() {
        return(
            <div className='project-container'>
                {this.props.projects.map(project => {
                    return(
                        <div className='ind-project' key={project.id}>
                        <h1 className={(project.name === '') ? 'project-name-hidden' : 'project-name'}>{project.name}</h1>
                        <p className={(project.name === '') ? 'project-description-alt' : 'project-description'}>{project.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    projects: state.projects
})

export default connect(mapStateToProps, { getProjects })(ProjectBoard);