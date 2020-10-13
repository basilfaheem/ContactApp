// https://firebase.google.com/docs/database/web/read-and-write?authuser=1#read_data_once

import React, { useContext } from "react";
import { Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from "reactstrap";
import "../App.css"

import { FaEnvelope, FaMapMarkerAlt, FaPhone,FaCalendarAlt } from "react-icons/fa";

// icons
import { FaRegStar, FaStar, FaFrown, FaGrinHearts } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";


//TODO: DONE add firebase
import firebase from "firebase/app";

// context stuffs
//TODO: DONE import context and action: update and single_contact
import { ContactContext } from "../context/Context";
import { CONTACT_TO_UPDATE, SET_SINGLE_CONTACT } from "../context/action.types";

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

 const Contact = ({ contact, contactKey }) => {
  //TODO: DONE destructuring dispatch from the context
  const { dispatch } = useContext(ContactContext);

  // history hooks to get history
  const history = useHistory();

  // to delete the contact when delete contact is clicked
  const deleteContact = () => {
    //TODO: DONE create this method from firebase
    firebase
      .database()
      .ref(`/contacts/${contactKey}`)
      .remove()
      .then(() => {
        toast("Deleted Successfully", { type: "warning" });
      })
      .catch(err => console.log(err));
  };

  // update the star/important contact ,ie, star it or unstar the single contact
  const updateImpContact = () => {
    //TODO: DONE update (star) contact, use contactKey
    firebase
      .database()
      .ref(`/contacts/${contactKey}`)
      .update(
        {
          star: !contact.star
        },
        err => {
          console.log(err);
        }
      )
      .then(() => {
        toast("Contact Updated", { type: "info" });
      })
      .catch(err => console.log(err));
  };
  const updateImpMarkContact = () => {
    //TODO: DONE  update (star) contact, use contactKey
    firebase
    .database()
    .ref(`/contacts/${contactKey}`)
    .update(
      {
        imp: !contact.imp
      },
      err => {
        console.log(err)
      }
    )
    .then(() =>{
      if(!contact.imp)
      toast("Contact Marked as Read", {type: "warning"})
      else
      toast("Contact Marked as Unread", {type: "info"})

    })
    .catch(err => console.log(err))
  };

  // when the update icon/ pen ion is clicked
  const updateContact = () => {
    // dispatching one action to update contact
    //TODO: DONE use dispatch to update
    dispatch({
      type: CONTACT_TO_UPDATE,
      payload: contact,
      key: contactKey
    });

    // and pushing to the add contact screen
    history.push("/contact/add");
  };

  // to view a single contact in the contact/view screen
  const viewSingleContact = contact => {
    // setting single contact in state
    //TODO: use dispatch to view single contact
    dispatch({
      type: SET_SINGLE_CONTACT,
      payload: contact
    });

    // sending...
    history.push("/contact/view");
  };
  

  return (
    
    <div class="main_card" >
      <div class="header_card" onClick={() => viewSingleContact(contact)}>
        <img src={contact.picture} alt="" />
        
      </div>
      <div class="card_title">
          <h5>{contact.name}</h5>
      </div> 

        <div className="card_details_new">

        <h6><FaEnvelope className="mr-2" />{contact.email}</h6>
        <h6><FaPhone className="mr-2"/>{contact.phoneNumber}</h6>
        <h6><FaMapMarkerAlt className="mr-2"/>{contact.address}</h6>
        <h6> <FaCalendarAlt className="mr-2"/>{contact.newTime}</h6>
     
        </div>
<div className="card_details_buttons">
<MdDelete
            onClick={() => deleteContact()}
            color="danger"
            className="text-danger icon"
          />
          <MdEdit
            className="icon text-dark ml-2"
            onClick={() => updateContact()}
          />
  </div>
  </div>

            
            
            
      /*
        { <a href="#" class="link"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="link"><i class="fab fa-instagram"></i></a>
        <a href="#" class="link"><i class="fab fa-twitter"></i></a>
        <a href="#" class="link"><i class="fab fa-whatsapp"></i></a> }*/
      
      /*{ <div class="more"><a href="#">MORE</a></div>
      <div class="more"><a href="#">MORE</a></div> }*/
    

    /* 
 
    <div>
       <Row>
        <Col
          md="1"
          className="d-flex justify-content-center align-items-center"
        >
          <div className="icon" onClick={() => updateImpContact()}>
            {contact.star ? (
              <FaStar className=" text-primary" />
            ) : (
              <FaRegStar className="text-info" />
            )}
          </div>
          <div className="smiley" onClick={()=>updateImpMarkContact()}>
          {contact.imp ? (
              <FaGrinHearts/>
            ) : (
              <FaFrown className="text-info" />
            )}
          </div>
        </Col>
        <Col
          md="2"
          className="d-flex justify-content-center align-items-center"
        >
          <img src={contact.picture} alt="" className="img-circle profile" />
        </Col>
        <Col md="8" onClick={() => viewSingleContact(contact)}>
          <div className="text-primary">Name: {contact.name}</div>

          <div className="text-secondary">Mobile Number:{contact.phoneNumber}</div>
          <div className="text-secondary">Email: {contact.email}</div>

          <div className="text-dark">Address: {contact.address}</div>
            <div className="text-secondary">Created at: {contact.newTime} IST</div>
        </Col>
        
        <Col
          md="1"
          className="d-flex justify-content-center align-items-center"
        >
          <MdDelete
            onClick={() => deleteContact()}
            color="danger"
            className="text-danger icon"
          />
          <MdEdit
            className="icon text-dark ml-2"
            onClick={() => updateContact()}
          />
        </Col>
      </Row> 
    </div>
   */
  );
};

export default Contact;
