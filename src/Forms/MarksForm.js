import React from 'react';
import { Container, Form, Header, Button } from 'semantic-ui-react';

class MarksForm extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { key: 'u', text: 'Upper Primary', value: 'up' },
      { key: '8', text: '8 th', value: 'eight' },
      { key: '9', text: '9 th', value: 'nine' },
    ]
    this.getMarks = this.getMarks.bind(this);
  }
  getMarks(event) {
    const target = event.target;
    const data = {
      class: target.name,
      division: target.division
    }
    this.props.get(data);
  }
  render() {
    return (
      <Container>
        <Header>Marks Form</Header>
        <Form onSubmit={this.getMarks}>
          <Form.Select fluid label='Section' options={this.options} placeholder='Section' name='section' />
          <Form.Group widths='equal'>
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
            <Button type='submit' positive>Continue</Button>
          </Container>
        </Form>
      </Container>
    );
  }
}

export default MarksForm;