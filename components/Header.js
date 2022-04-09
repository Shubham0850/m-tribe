import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <div className="header">
      <div className="bg"></div>
      <Container fluid className="cont">
        <div className="header__container">
          <Row className="header__row">
            <Col sm={12} md={6} className="header__col">
              <div>
                <h1 className="h1">{`m-tRibe dao tools & standards`}</h1>
                <p className="p mb-5">
                At M-tribe, we are focused on building DAO tools and standards to empower existing NFT Communities to transform into fully functioning DAOs. We leverage good organizational practices from Web-2.0  and use them for effective collaboration in Web-3.0 (DAOs).
                </p>
                <Row>
                  <Col>
                    <Link href="/collections/12">
                      <button className="btns">Collections</button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={12} md={6} className="header__col sm-mb-5">
              {/* <HeaderNftCard
                imgSrc={
                  "https://boardroom.tv/wp-content/uploads/2021/11/Overtime-x-NFT-FC.gif"
                }
              /> */}
              <img src="/header.png" alt="header"/>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
