import { Fragment, useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./pages/landingpage/LandingPage";
import Stories from "./pages/story/Stories";
import { markerReducer, markersInitialState } from "./reducers/markerReducer";
import { loadMarkers } from "./utils/FireBaseUtils";

function App() {
  const [state, dispatch] = useReducer(markerReducer, markersInitialState);
  useEffect(() => {
    const data = loadMarkers();
    dispatch({ type: "FETCH", markersList: data });
  }, []);
  const addMarker = (newMarker) =>
    dispatch({ type: "ADD", newMarker: newMarker });

  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <Container>
          <Switch>
            <Route path="/story">
              <Stories markersList={state.markersList} />
            </Route>
            <Route exact path="/">
              {state.markersList && (
                <LandingPage
                  markersList={state.markersList}
                  addNew={(newMarker) => addMarker(newMarker)}
                />
              )}
            </Route>
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
