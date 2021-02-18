import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import { GithubIcon } from '../../assets/index';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    icon: {
        color: 'grey',
    },
    text: {
        textAlign: 'justify',
        marginBottom: 20,
    },
    github: {
        textAlign: 'center',
    }
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectModal = ({ open, handleClose, data }) => {
    const classes = useStyles();

    return (
        <div>
            {data && data ? <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <div className={classes.header}>
                    <DialogTitle id="alert-dialog-slide-title">{data.title}</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            <CloseIcon className={classes.icon} />
                        </Button>
                    </DialogActions>
                </div>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" className={classes.text}>
                        {data.description}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-slide-description" className={classes.text}>
                        Technos utilisées: {data.tech.join(', ')}
                    </DialogContentText>
                    {data.github_link && <DialogContentText id="alert-dialog-slide-description" className={classes.github}>
                        <a target="_blank" href={data.github_link} rel='noreferrer'>
                            <img src={GithubIcon} alt='Lien github' />
                        </a>
                    </DialogContentText>}
                </DialogContent>
            </Dialog> : null}
        </div>
    );
}
export default ProjectModal;