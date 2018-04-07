import React from 'react';
import { Segment, Form } from 'semantic-ui-react';

function Personal() {
  return (
    <Segment>
      <Form.Field>
        <label>Admission Number</label>
        <input type="number" name="admission" placeholder="Admission Number" />
      </Form.Field>
      <Form.Field>
        <label>Name</label>
        <input type="text" name="name" placeholder="Name" />
      </Form.Field>
      <Form.Group widths='equal'>
        <Form.Field>
          <label>Religion/Caste</label>
          <input type="text" name="religion" placeholder="Religion/Caste" />
        </Form.Field>
        <Form.Field>
          <label>Date of Birth</label>
          <input type="date" name="dob" placeholder="Date of Birth" />
        </Form.Field>
      </Form.Group>
    </Segment>
  );
}

export default Personal;

