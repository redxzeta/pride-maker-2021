import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./pages/landingpage/LandingPage";


function App() {
  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <Container>
          <Switch>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
