import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

function UserDetails(props) {
  const { id, title, firstName, lastName, picture } = props.user;
  return (
    <>
      <Card>
        <Card.Body>
          <img src={picture} height="100px"></img>
          <div className="card-content">
            <div>
              {title} {firstName} {lastName}
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default UserDetails;
