import React, { useEffect } from 'react';
import {
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaAngellist,
  FaTwitter,
} from 'react-icons/fa';
import { Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll('.input');
    inputs.forEach((input) => {
      input.addEventListener('focus', (e) => {
        const parent = e.target.parentNode;
        parent.classList.add('focus');
      });
      input.addEventListener('blur', (e) => {
        const parent = e.target.parentNode;
        if (e.target.value === '') {
          parent.classList.remove('focus');
        }
      });
    });
  }, []);
  return (
    <div className="component-container contact-container">
      <h1 className="component-title mb-5">Contact</h1>
      <div className="inner-container">
        <div className="contact-details-container">
          <h2 className="mb-5">Get in touch</h2>
          <ul className="contact-list">
            <li>
              <FaRegEnvelope className="contact-info-icons" />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@adornchoga@gmail.com
            </li>
            <li>
              <FaPhoneAlt className="contact-info-icons" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+263 778 970 245
            </li>
            <li>
              <FaMapMarkerAlt className="contact-info-icons" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Harare, Zimbabwe
            </li>
          </ul>
          <div className="mt-5 social-icons">
            <ul>
              <li>
                <a href="https://github.com/AdornChoga">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/adorn-choga/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://angel.co/u/adornchoga">
                  <FaAngellist />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/adorn_choga">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-form">
          <Form action="https://formspree.io/f/xeqnwqdv" method="POST">
            <Form.Group className="mb-5 form-group" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="fullName"
                required
                className="input"
              />
              <Form.Label>Full Name</Form.Label>
              <span>Full Name</span>
            </Form.Group>
            <Form.Group
              className="mb-5 form-group"
              controlId="formBasicPassword"
            >
              <Form.Control
                type="email"
                name="email"
                required
                className="input"
              />
              <Form.Label>Email</Form.Label>
              <span>Email</span>
            </Form.Group>
            <Form.Group
              className="mb-5 form-group textarea"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                className="input"
              />
              <Form.Label>Message</Form.Label>
              <span>Message</span>
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
              Send
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
