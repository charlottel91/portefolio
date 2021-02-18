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

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction value="projects" icon={
                <NavLink to='/projects'>
                    <FolderIcon className={classes.icon} />
                </NavLink>} />
            <BottomNavigationAction value="home" icon={
                <NavLink to='/home'><HomeIcon className={classes.icon} />
                </NavLink>} />
            <BottomNavigationAction value="skills" icon={
                <NavLink to='/skills'>
                    <BuildIcon className={classes.icon} />
                </NavLink>} />
        </BottomNavigation>
    );
};

export default withRouter(Navbar); 