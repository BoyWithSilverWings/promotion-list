import React from "react";
import { Segment, Header } from "semantic-ui-react";

class Navbar extends React.PureComponent {
  render() {
    return (
      <Segment inverted textAlign="center">
        <Header>PROMOTIONS LIST</Header>
      </Segment>
    );
  }
}

export default Navbar;
