import React from 'react';
import { Container, Form, Header, Button } from 'semantic-ui-react';
import Personal from './Marks/Personal';

class MarksForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header>ADD STUDENT DETAILS</Header>
        <Form onSubmit={this.getMarks}>
          <Personal />
        </Form>
      </Container>
    );
  }
}

export default MarksForm;