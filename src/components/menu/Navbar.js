import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import BuildIcon from '@material-ui/icons/Build';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles({
    root: {
        backgroundColor: "#145c88",
        width: '100%',
    },
    icon: {
        color: "white",
    }
});

export default function Sidebar() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction value="projects" icon={<FolderIcon className={classes.icon} />} />
            <BottomNavigationAction value="home" icon={<HomeIcon className={classes.icon} />} />
            <BottomNavigationAction value="skills" icon={<BuildIcon className={classes.icon} />} />
        </BottomNavigation>
    );
}