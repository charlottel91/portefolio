import Navbar from './components/menu/Navbar';
import Sidebar from './components/menu/Sidebar';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import SkillsPage from './components/pages/SkillsPage';
import { Switch, Redirect, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery('(min-width:492px)');

  return (
    <>
      {matches ? (<div>
        <Sidebar />
        <Container>
          < Switch >
            <Redirect exact from='/' to='/home' />
            <Route exact from="/home" render={props => <HomePage {...props} />} />
            <Route exact path="/projects" render={props => <ProjectsPage {...props} />} />
            <Route exact path="/skills" render={props => <SkillsPage {...props} />} />
          </Switch >
        </Container>
      </div>) : (
          <div>
            <Container>
              < Switch >
                <Redirect exact from='/' to='/home' />
                <Route exact from="/home" render={props => <HomePage {...props} />} />
                <Route exact path="/projects" render={props => <ProjectsPage {...props} />} />
                <Route exact path="/skills" render={props => <SkillsPage {...props} />} />
              </Switch >
            </Container>
            <Navbar />
          </div >
        )}
    </>)
}

export default App;
