import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Adoptamonster, Juleetlily, Ohmyg } from '../../assets/index'

const useStyles = makeStyles((theme) => ({
    actionArea: {
        marginBottom: 20,
        marginTop: 20,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    root: {
        width: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

}));

export default function ProjectCard({ title, image }) {
    const classes = useStyles();

    return (
        <CardActionArea className={classes.actionArea}>
            <Card className={classes.root}>
                <CardHeader
                    title={title}
                />
                <CardMedia
                    className={classes.media}
                    // component="img"
                    alt="Projet en cours..."
                    image={image === 'ohmyg' ? Ohmyg : (image === 'juleetlily' ? Juleetlily : (image === 'adoptamonster' ? Adoptamonster : "null"))}
                    title={title}
                />
            </Card>
        </CardActionArea>
    );
}