import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";



const SERVICE_ID = "service_p52e953";
const TEMPLATE_ID = "template_d5uvz0h";
const USER_ID = "uL3ygp64mdvkB03f8";
// Form initial state


const ContactForm = () => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        
      },
      (error) => {
        console.log(error.text);
        
      }
    );
    e.target.reset();
  };
  return (
    <div className="contact-form">
      <h2>Get In Touch</h2>

      <form onSubmit={handleOnSubmit}>
        <div className="container">
          <div className="row">
           
            <div className="col-lg-6">
              <div className="form-group">
                <input
                className="form-control"
                  id="form-input-control-email"
                  control={Input}
                  label="Email"
                  name="user_email"
                  placeholder="Email"
                  required
                  icon="mail"
                  iconPosition="left"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                className="form-control"
                  id="form-input-control-last-name"
                  control={Input}
                  label="Name"
                  name="user_name"
                  placeholder="Name.."
                  required
                  icon="user circle"
                  iconPosition="left"
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <input
                className="form-control"
                  id="form-input-control-opinion"
                  control={TextArea}
                  label="Message"
                  name="user_message"
                  placeholder="Message"
                  required
                />
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <Button type="submit" className="btn btn-primary">
                Gönder
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
