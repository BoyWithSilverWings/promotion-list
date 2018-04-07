import React from 'react';
import { Form, Segment } from 'semantic-ui-react'; 
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';

function Personal(props) {
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
          <Flatpickr
            value={props.dob}
            onChange={props.setDob} />
        </Form.Field>
      </Form.Group>
    </Segment>
  );
}

export default Personal;