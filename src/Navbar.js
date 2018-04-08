import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.PureComponent {
  render() {
    return (
      <Segment inverted textAlign="center">
        <Link to="/" className="unstyled-link">
          <Header className="white">PROMOTIONS LIST</Header>
        </Link>
      </Segment>
    );
  }
}

export default withRouter(Navbar);
