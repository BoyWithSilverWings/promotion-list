import React from "react";
import { Form, Header } from "semantic-ui-react";
import DualGroup from "./DualGroup";

class Part1 extends React.Component {
  emit = (subjectCode, marks) => {
    this.props.emit(subjectCode, marks, "Part 1");
  };
  render() {
    return (
      <React.Fragment>
        <Header>Part 1</Header>
        {this.props.subjects.map(subject => {
          if (this.props.dual) {
            return (
              <DualGroup
                key={subject.name}
                subject={subject}
                emit={this.emit}
                max={this.props.max}
              />
            );
          } else {
            return (
              <Form.Group inline widths="equal" key={subject.code}>
                <Form.Field>
                  <label>{subject.name}</label>
                </Form.Field>
                <Form.Field>
                  <input
                    type="text"
                    maxLength={1}
                    required
                    name={subject.code}
                    onChange={event =>
                      this.props.emit(subject.code, event.target.value)
                    }
                  />
                </Form.Field>
              </Form.Group>
            );
          }
        })}
      </React.Fragment>
    );
  }
}

export default Part1;
