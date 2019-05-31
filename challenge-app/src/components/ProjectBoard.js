import React from 'react'
import { connect } from 'react-redux';
import { getProjects } from '../actions';

class ProjectBoard extends React.Component {
    componentDidMount() {
        this.props.getProjects();
    }
    render() {
        return(
            <div>
                {this.props.projects.map(project => {
                    return(
                        <div className='ind-project'>
                        <h1>{project.name}</h1>
                        <h3>{project.description}</h3>
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