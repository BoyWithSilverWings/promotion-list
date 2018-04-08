import React from "react";
import { Container, Header, Form, Button } from "semantic-ui-react";

class GeneralForm extends React.Component {
  constructor(props) {
    super(props);
    this.name = window.localStorage.getItem("SCHOOL_NAME");
    this.days = window.localStorage.getItem("DAYS");
    this.getSchoolName = this.getSchoolName.bind(this);
  }
  getSchoolName(event) {
    const data = {
      name: event.target.schoolName.value,
      days: event.target.days.value
    };
    window.localStorage.setItem("SCHOOL_NAME", data.name);
    window.localStorage.setItem("DAYS", data.days);
    this.props.history.push("/class");
  }
  render() {
    return (
      <Container>
        <Header>School Details</Header>
        <Form onSubmit={this.getSchoolName}>
          <Form.Field required>
            <label>School Name</label>
            <input
              placeholder="School Name"
              name="schoolName"
              required
              defaultValue={this.name}
            />
          </Form.Field>
          <Form.Field>
            <label>Total Number of School Days</label>
            <input
              type="number"
              placeholder="Days"
              name="days"
              required
              defaultValue={this.days}
            />
          </Form.Field>
          <Container textAlign="center">
            <Button type="submit" positive>
              Continue
            </Button>
          </Container>
        </Form>
      </Container>
    );
  }
}

export default GeneralForm;
