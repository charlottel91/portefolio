import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import ohmyg from '../../assets/image/ohmyg.png'
import juleetlily from '../../assets/image/juleetlily.png'
import adoptamonster from '../../assets/image/adoptamonster.png'

const useStyles = makeStyles((theme) => ({
    actionArea: {
        margin: 20,
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
                    image={image === 'ohmyg' ? ohmyg : (image === 'juleetlily' ? juleetlily : adoptamonster)}
                    title={title}
                />
            </Card>
        </CardActionArea>
    );
}