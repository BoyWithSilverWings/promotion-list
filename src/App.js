import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import GeneralForm from './Forms/GeneralForm';
import MarksForm from './Forms/MarksForm';
import ClassForm from './Forms/ClassForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.getGeneralDetails = this.getGeneralDetails.bind(this);
    this.getClassDetails = this.getClassDetails.bind(this);
  }
  getGeneralDetails(data) {
    this.schoolDetails = data;
  }
  getClassDetails(data) {
    this.classDetails = data;
  }
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Route exact path='/' render={(props) => <GeneralForm {...props} get={this.getGeneralDetails} />} />
          <Route path='/class' render={(props)=> <ClassForm {...props} get={this.getClassDetails} /> } />
          <Route path='/marks' render={(props)=> <MarksForm {...props} />} />
        </main>
      </Router>
    );
  }
}

export default App;
