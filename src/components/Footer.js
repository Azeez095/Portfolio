import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import img from "../assets/img/logo.jpeg"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={img} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/akolade-amoo-9635b6143/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://m.facebook.com/profile.php?id=100014437712657&name=xhp_nt__fb__action__open_user" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Azeez095" target="_blank"><img src={navIcon4} alt="Icon" /></a>
              
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
