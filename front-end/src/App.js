import logo from './logo.svg';
import Router from './Route';
import { DoubleNavbar } from "./components/SideNavBarType1.tsx";
import { mainRoutesList } from './RouteManifast' 
function App() {
  return (
    <div className="App">
      <Router>
        <DoubleNavbar style={{ height: "100vh" }} />
      </Router>
    </div>
  );
}

export default App;
