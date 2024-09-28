import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

function Contact() {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        >
          <a href="" className="items">
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100053768207242"
            target="_blank"
            className="items"
          >
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/najeeb-khan90?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a href="" className="items" target="_blank">
            <BsTwitterX className="icons" />
          </a>
          <a
            href="https://github.com/NAJEEBKHAN123"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:najeebkhanlaku@gmail.com"
            target="_blank"
            className="items"
          >
            <MdOutgoingMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
