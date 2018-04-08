import React from "react";
import { Container, Form, Header, Button } from "semantic-ui-react";

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { key: "u", text: "Upper Primary", value: "up" },
      { key: "8", text: "8 th", value: "eight" },
      { key: "9", text: "9 th", value: "nine" }
    ];
    this.state = {
      section: "up"
    };
    this.getMarks = this.getMarks.bind(this);
    this.sectionChange = this.sectionChange.bind(this);
  }
  getMarks(event) {
    const target = event.target;
    const data = {
      class: target.name.value,
      division: target.division.value,
      section: this.state.section
    };
    window.localStorage.setItem("CLASS", data.class);
    window.localStorage.setItem("SECTION", data.section);
    window.localStorage.setItem("DIVISION", data.division);
    this.props.history.push("/marks");
  }
  sectionChange(event, select) {
    this.setState({
      section: select.value
    });
  }
  render() {
    return (
      <Container>
        <Header>Class Form</Header>
        <Form onSubmit={this.getMarks}>
          <Form.Select
            fluid
            label="Section"
            value={this.state.section}
            options={this.options}
            placeholder="Section"
            name="section"
            onChange={this.sectionChange}
          />
          <Form.Group widths="equal">
            <Form.Field>
              <label>Class</label>
              <input type="text" name="class" placeholder="Class Name" />
            </Form.Field>
            <Form.Field>
              <label>Division</label>
              <input type="text" name="division" placeholder="Division" />
            </Form.Field>
          </Form.Group>
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

export default ClassForm;
