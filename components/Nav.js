import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [address, setAddress] = useState();

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        userName: "Unnamed",
        walletAddress: address,
      };

      const result = await client.createIfNotExists(userDoc);
      welcomeUser(result.userName);
    })();
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className={`nav ${visible && `nav-blured-bg`}`}>
      <Container fluid className="cont">
        <Row className="nav__row">
          <Col md={3} className="nav__logo">
            <img src="/logo.png" alt="logo" />
          </Col>
          <Col sm={0} md={6} className="nav__links hide-on-phone">
            <span className="nav__link">
              <Link href="/">Roadmap</Link>
            </span>

            <span className="nav__link">
              <Link href="/">About Us</Link>
            </span>

            <span className="nav__link">
              <Link href="/">Explore DAO's</Link>
            </span>
          </Col>

          <Col md={3} className="nav__cta">
            {address ? (
              <button className="btns--connected btns">{address}</button>
            ) : (
              <button
                className="btns"
                onClick={() => connectWallet("injected")}
              >
                Connect wallet
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
