import React from "react";
import { Container, Form, Header, Button, Divider } from "semantic-ui-react";
import Personal from "./Marks/Personal";
import Marks from "./Marks/Marks";
import db from "../db";

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: ""
    };
    this.setDob = this.setDob.bind(this);
    this.getStudentDetails = this.getStudentDetails.bind(this);
    this.getMarks = this.getMarks.bind(this);
  }
  setDob(dob) {
    this.setState({
      dob
    });
  }
  getMarks(subjectCode, mark, part) {
    this.setState({
      [subjectCode]: mark
    });
  }
  getStudentDetails(event) {
    const { dob, ...rest } = this.state;
    const target = event.target;
    const student = {
      name: target.name.value,
      admission: target.admission.value,
      religion: target.religion.value,
      dob: this.state.dob[0],
      standard: this.props.section,
      marks: rest
    };
    db
      .table("students")
      .add(student)
      .then(id => console.log(id));
  }
  render() {
    return (
      <Container>
        <Header>ADD STUDENT DETAILS</Header>
        <Form onSubmit={this.getStudentDetails} autoComplete="on">
          <Personal dob={this.state.dob} setDob={this.setDob} />
          <Marks section={this.props.section} emit={this.getMarks} />
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
