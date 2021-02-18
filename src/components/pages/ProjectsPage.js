import React, { useState } from 'react';
import Cards from "../projectCards/ProjectCard";
import projects from '../../projects.json'
import { makeStyles } from '@material-ui/core/styles';
import ProjectModal from '../projectCards/ProjectModal';

const useStyles = makeStyles(() => ({
    containerCards: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        margin: 'auto',
        '@media (max-width: 1400px)': {
            width: '80%',
        },
        '@media (min-width: 492px)': {
            paddingTop: 80,
            paddingBottom: 20,
        },
    },
    cards: {
        width: '100%'
    }
}));

const ProjectsPage = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState()

    const handleClickOpen = (i) => {
        setOpen(true);
        setSelectedProject(projects[i])
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject()
    };

    return (
        <div className={classes.containerCards}>
            {projects && projects.map((project, i) => (
                <div key={i} onClick={() => handleClickOpen(i)} className={classes.cards}>
                    <Cards title={project.title} image={project.image} />
                </div>
            ))}
            <ProjectModal open={open} handleClose={handleClose} data={selectedProject && selectedProject} />
        </div>
    )
}

export default ProjectsPage;