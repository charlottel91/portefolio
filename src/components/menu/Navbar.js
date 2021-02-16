import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import BuildIcon from '@material-ui/icons/Build';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink, withRouter } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        backgroundColor: "#145c88",
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    icon: {
        color: "white",
    }
});

function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <NavLink to='/projects'>
                <BottomNavigationAction value="projects" icon={<FolderIcon className={classes.icon} />} />
            </NavLink>
            <NavLink to='/home'>
                <BottomNavigationAction value="home" icon={<HomeIcon className={classes.icon} />} />
            </NavLink>
            <NavLink to='/home'>
                <BottomNavigationAction value="skills" icon={<BuildIcon className={classes.icon} />} />
            </NavLink>
        </BottomNavigation>
    );
};

export default withRouter(Navbar); 