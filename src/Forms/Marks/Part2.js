import React from "react";
import { Header, Form } from "semantic-ui-react";

function Part2({ subjects, emit, marks }) {
  return (
    <React.Fragment>
      <Header>Part 2</Header>
      {subjects.map(subject => {
        return (
          <Form.Group inline widths="equal" key={subject.code}>
            <Form.Field>
              <label>{subject.name}</label>
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                maxLength={2}
                defaultValue={marks[subject.code] || ""}
                required
                name={subject.code}
                onChange={event => emit(subject.code, event.target.value)}
              />
            </Form.Field>
          </Form.Group>
        );
      })}
    </React.Fragment>
  );
}

export default Part2;
