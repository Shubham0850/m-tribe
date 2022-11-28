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
                <h1 className="h1">{`n-DAO dao tools & standards`}</h1>
                <p className="p mb-5">
                At n-DAO, we are focused on building DAO tools and standards to empower existing NFT Communities transform into fully functioning DAOs. We leverage good organizational practices from Web-2.0  and use them for effective collaboration in Web-3.0 (DAOs).
                </p>
                <Row>
                  <Col>
                    <Link href="/collections/12">
                      <button className="btns">NFT Communities</button>
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
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/decentralized-finance-4731024-3934283.png" alt="header"/>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
