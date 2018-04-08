import React from "react";
import { Header, Form } from "semantic-ui-react";

function Part3({ subjects }) {
  return (
    <React.Fragment>
      <Header>Part 3</Header>
      {subjects.map(subject => {
        return (
          <Form.Group inline widths="equal" key={subject.code}>
            <Form.Field>
              <label>{subject.name}</label>
            </Form.Field>
            <Form.Field>
              <input type="text" maxLength={1} required name={subject.code} />
            </Form.Field>
          </Form.Group>
        );
      })}
    </React.Fragment>
  );
}

export default Part3;
