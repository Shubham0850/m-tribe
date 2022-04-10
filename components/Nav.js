import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMoralis } from "react-moralis";

export default function Nav() {
  const router = useRouter();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [address, setAddress] = useState();
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

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
    setAddress(user?.attributes?.accounts[0]);

    // if (address) {
    //   router.push({
    //     pathname: "/nft-communities",
    //     query: {
    //       address,
    //     },
    //   });
    // }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll, authenticate, user]);

  return (
    <div className={`nav ${visible && `nav-blured-bg`}`}>
      <Container fluid className="cont">
        <Row className="nav__row">
          <Col md={3} className="nav__logo">
            <Link href="/">
              <img src="/logo.png" alt="logo" />
            </Link>
          </Col>
          <Col sm={0} md={6} className="nav__links hide-on-phone">
            <span className="nav__link">
              <Link href="/roadmap">Roadmap</Link>
            </span>

            <span className="nav__link">
              <Link href="/about-us">About Us</Link>
            </span>

            <span className="nav__link">
              <Link href="/proposals">Proposals</Link>
            </span>

            <span className="nav__link">
              <Link href="/nft-communities">Nft Communities</Link>
            </span>
          </Col>

          <Col md={3} className="nav__cta">
            {isAuthenticated ? (
              <button className="btns--connected btns" onClick={logout}>
                Logout
              </button>
            ) : (
              <button className="btns" onClick={authenticate}>
                Connect wallet
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
