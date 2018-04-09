import React from "react";
import { Container, Form, Header, Button, Divider } from "semantic-ui-react";
import Personal from "./Marks/Personal";
import Marks from "./Marks/Marks";
import db from "../db";

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: "",
      marks: {}
    };
    this.section = window.localStorage.getItem("SECTION");
    this.class = window.localStorage.getItem("CLASS");
    this.division = window.localStorage.getItem("DIVISION");
    this.setDob = this.setDob.bind(this);
    this.setStudentDetails = this.setStudentDetails.bind(this);
    this.getMarks = this.getMarks.bind(this);
  }
  setDob(dob) {
    this.setState({
      dob
    });
  }
  getMarks(subjectCode, mark, part) {
    this.setState(prevState => ({
      marks: {
        ...prevState.marks,
        [subjectCode]: mark
      }
    }));
  }
  setStudentDetails(event) {
    const { dob, marks } = this.state;
    const target = event.target;
    const student = {
      name: target.name.value,
      admission: target.admission.value,
      religion: target.religion.value,
      dob: this.state.dob[0],
      standard: this.section,
      marks,
      class: this.class,
      division: this.division
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
        <Form onSubmit={this.setStudentDetails} autoComplete="on">
          <Personal dob={this.state.dob} setDob={this.setDob} />
          <Marks
            section={this.section}
            marks={this.state.marks}
            emit={this.getMarks}
          />
          <Divider hidden />
          <Container textAlign="center">
            <Button type="submit" primary>
              Save and Add Another
            </Button>
            <Button type="button" positive>
              Complete
            </Button>
          </Container>
        </Form>
      </Container>
    );
  }
}

export default StudentForm;
