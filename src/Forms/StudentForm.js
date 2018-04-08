import React from "react";
import { Container, Form, Header, Button } from "semantic-ui-react";
import Personal from "./Marks/Personal";
import Marks from "./Marks/Marks";

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: ""
    };
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
        <Form onSubmit={this.getMarks} autoComplete="on">
          <Personal dob={this.state.dob} setDob={this.setDob} />
          <Marks section={this.props.section} />
          <Container textAlign="center">
            <Button type="submit" primary>
              Save and Add Another
            </Button>
            <Button type="submit" positive>
              Complete
            </Button>
          </Container>
        </Form>
      </Container>
    );
  }
}

export default StudentForm;
