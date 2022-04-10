import React, { useState } from "react";
import { Container, Modal, Form } from "react-bootstrap";

export default function Proposals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <div className="bg"></div>
      <Container fluid className="cont">
        <div className="header__box">
          <h1 className="h2">
            Proposals{" "}
            <button className="btns" onClick={handleShow}>
              Add new
            </button>
          </h1>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>New Proposal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  as="textarea"
                  placeholder="Vision Statement ( Description )"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  as="textarea"
                  placeholder="How is it aligned with DAO’s vision?"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  as="textarea"
                  placeholder="Why? List of benefits, value delivered."
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control as="textarea" placeholder="Scope/Out of scope" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control as="textarea" placeholder="Assumptions log" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control as="textarea" placeholder="Estimated Timelines" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control as="textarea" placeholder="Budget Request" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  as="textarea"
                  placeholder="Roles and Responsibilities"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  as="textarea"
                  placeholder="Success Criteria (Thresholds)"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control as="textarea" placeholder="Risk Log " />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  as="textarea"
                  placeholder="Communication Plan (Daily, Weekly)"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btns" onClick={handleClose}>
              Cancel
            </button>
            <button className="btns">Submit</button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
