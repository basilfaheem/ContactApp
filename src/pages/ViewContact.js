import React, { useContext } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ContactContext } from "../context/Context";



const ViewContact = () => {
  const { state } = useContext(ContactContext);
  // destructuring contact from the state
  // and rendering it in state

  const { contact } = state;
  var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


  return (
    <Container fluid>
      <Row className="mt-5 mb-5">
        <Col md="5" className="offset-md-3">
          <Card className="pt-3 pb-5 mt-5">
            <CardBody className="text-center">
              <img
                height="120"
                width="120"
                className="cardImg profile border-dark"
                src={contact?.picture}
              />
              <CardTitle className="text-dark mt-3">
                <h1>{contact?.name}</h1>
              </CardTitle>
              <CardSubtitle>
                <h3>
                  <FaPhone className="mr-2"/>
                  {contact?.phoneNumber}
                </h3>
 
              </CardSubtitle>
              <a
                className="btn btn-dark btn-block"
                target="_blank"
                href={`mailto:{contact?.email}`}
              >
                <FaEnvelope className="icon mr-2" />
                {contact?.email}
              </a>

              <a
                className="btn btn-dark btn-block"
                target="_blank"
                //TODO: add google maps
                href={`https://maps.google.com/?=${contact?.address}`}
              >
                
                {contact?.address}
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewContact;
