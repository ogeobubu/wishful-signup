import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
// import DashboardFooter from "./components/DashboardFooter/DashboardFooter";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <SignUp />
        </Route>
        <Route path="/dashboard">
          <DashboardHeader />
          <div className="container">
            <Sidebar />
            <Dashboard />
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
