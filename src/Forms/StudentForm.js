import React from "react";
import { Container, Form, Header, Button, Divider } from "semantic-ui-react";
import Personal from "./Marks/Personal";
import Marks from "./Marks/Marks";

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: ""
    };
    this.setDob = this.setDob.bind(this);
    this.getMarks = this.getMarks.bind(this);
  }
  setDob(dob) {
    this.setState({
      dob
    });
  }
  getStudentDetails(event) {
    console.log(event.target);
  }
  getMarks() {}
  render() {
    return (
      <Container>
        <Header>ADD STUDENT DETAILS</Header>
        <Form onSubmit={this.getStudentDetails} autoComplete="on">
          <Personal dob={this.state.dob} setDob={this.setDob} />
          <Marks section={this.props.section} />
          <Divider hidden />
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
