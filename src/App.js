import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import GeneralForm from "./Forms/GeneralForm";
import StudentForm from "./Forms/StudentForm";
import ClassForm from "./Forms/ClassForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.classDetails = {
      section: "nine"
    };
  }
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Route exact path="/" component={GeneralForm} />
          <Route path="/class" component={ClassForm} />
          <Route path="/student" component={StudentForm} />
        </main>
      </Router>
    );
  }
}

export default App;
