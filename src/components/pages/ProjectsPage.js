import React from 'react';
import Cards from "../projectCards/ProjectCard";
import projects from '../../projects.json'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    containerCards: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    cards: {
        width: '50%'
    }
}));

const ProjectsPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.containerCards}>
            {projects && projects.map((project, i) => (
                <Cards key={i} className={classes.cards} title={project.title} image={project.image} />
            ))}
        </div>
    )
}

export default ProjectsPage;