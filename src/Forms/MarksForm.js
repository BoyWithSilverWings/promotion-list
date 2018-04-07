import React from 'react';
import { Container, Form, Header, Button } from 'semantic-ui-react';
import Personal from './Marks/Personal';

class MarksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: ''
    }
    this.setDob = this.setDob.bind(this);
  }
  setDob(dob) {
    this.setState({
      dob
    });
  }
  render() {
    return (
      <Container>
        <Header>ADD STUDENT DETAILS</Header>
        <Form onSubmit={this.getMarks}>
          <Personal dob={this.state.dob} setDob={this.setDob} />
        </Form>
      </Container>
    );
  }
}

export default MarksForm;