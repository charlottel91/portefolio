import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/menu/Navbar';
import Sidebar from './components/menu/Sidebar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SkillsPage from './components/pages/SkillsPage';
import { Switch, Redirect, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  navbar: {
    marginBottom: 60,
  }
}))

function App() {
  const matches = useMediaQuery('(min-width:492px)');
  const classes = useStyles();

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
          <div className={classes.navbar}>
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
