import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="grad-border"></div>
      <div className="footer">
        <Container fluid className="cont">
          <Row>
            <Col md={2} className="sm-mb-5">
              <img src="/logo.png" alt="logo" className="footer__logo mb-3" />
              
             
            </Col>
            <Col md={10}><p className="p mb-3">
                {`At M-tribe, we are focused on building DAO tools and standards to empower existing NFT Communities transform into fully functioning DAOs. We leverage good organizational practices from Web-2.0  and use them for effective collaboration in Web-3.0 (DAOs).`}
              </p></Col>


          </Row>
        </Container>
        <p className="footer__cright p text-center p-3">
          © All Right is reserved by us. Design and Developed by{" "}
          <a href="http://shubhamraj.live/" rel="noreferrer" target="_blank">
            N-DAO Team
          </a>
        </p>
      </div>
    </div>
  );
}
