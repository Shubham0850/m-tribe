import React, { useEffect, useState } from "react";
import { Container, Modal, Form } from "react-bootstrap";
import Moralis from "moralis";

function Card(data) {
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);

  return (
    <div className="card">
      <h3>
        <b>Name - </b> {data.name}
      </h3>
      <h3>
        <b>Vision Statement - </b> {data.visionStatement}
      </h3>
      <h3>
        <b> How is it aligned with DAO’s vision? - </b> {data.daoVision}
      </h3>
      <h3>
        <b>Why? List of benefits, value delivered. - </b> {data.valueDelivered}
      </h3>
      <h3>
        <b>Scope/Out of scope</b> - {data.scope}
      </h3>

      <h3>
        <b>Assumptions log</b> - {data.assumptionsLog}
      </h3>

      <h3>
        <b>estimateTimelines</b> - {data.estimateTimelines}
      </h3>

      <h3>
        <b>Budget Request</b> - {data.budgetRequest}
      </h3>

      <h3>
        <b>roles</b> - {data.roles}
      </h3>

      <h3>
        <b>Success Criteria (Thresholds)</b> - {data.success}
      </h3>

      <h3>
        <b>Risk Log </b> - {data.risk}
      </h3>

      <h3>
        <b>Communication Plan (Daily, Weekly)</b> - {data.communication}
      </h3>

      <div className="card__box">
        <button className="btns m-3" onClick={() => setUpvote(upvote++)}>
          Upvote - ({upvote})
        </button>
        <button className="btns m-3" onClick={() => setDownvote(downvote++)}>
          Downvote - ({downvote})
        </button>
      </div>
    </div>
  );
}

export default function Proposals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [proposalData, setProposalData] = useState([
    {
      name: "Transparent Treasury",
      visionStatement:
        "Build a dashboard that display distribution of community wallet funds among various projects",
      daoVision: "It brings transparency in the usage of DAO funds",
      valueDelivered:
        "Helps the DAO community members understand our burn rate and allocation of funds across projects",
      scope: "Dashboard displaying community wallet funds distribution",
      assumptionsLog:
        "Wallet funds are allocated to only proposals approved by Community",
      estimateTimelines: "2 weeks",
      budgetRequest: "1000$",
      roles: "Front end dev and Smart Contract dev",
      success: "Project Completed in 2 weeks under 1000$ budget",
      risk: "Bugs may create confusion among community members. Communication should be sent out",
      communication: "Daily Updates will be provided",
    },
  ]);

  const NewConnect = Moralis.Object.extend("Test");
  const connect = new NewConnect();

  const handleSubmit = async (event) => {
    event.preventDefault();
    for (let i = 0; i < 9; i++) {
      const key = event.target[i].id;
      const value = event.target[i].value;
      connect.set(key, value);
    }
    connect.set("upVote", 0);
    connect.set("downVote", 0);
    await connect.save();
  };

  const getData = async () => {
    const NewConnect = Moralis.Object.extend("Test");
    const allData = new Moralis.Query("Test");

    const testDataId = await allData.find({ useMasterKey: true });
    console.log(testDataId);
    let length = testDataId.length;
    console.log(length);
    for (let i = 0; i < length; i++) {
      setProposalData(testDataId[i].attributes);
    }
  };

  return (
    /*
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

          <p>
            {proposalData?.map((val) => (
              <Card
                name={val.name}
                daoVision={val.daoVision}
                visionStatement={val.visionStatement}
                valueDelivered={val.valueDelivered}
                scope={val.scope}
                assumptionsLog={val.assumptionsLog}
                estimateTimelines={val.estimateTimelines}
                budgetRequest={val.budgetRequest}
                roles={val.roles}
                success={val.success}
                risk={val.risk}
                communication={val.communication}
              />
            ))}
          </p>
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
            </Form> */
            {<form onSubmit={handleSubmit}>
              <p>
                <label>Name</label>
                <input type="text" name="name" id="name" required />
              </p>
              <p>
                <label>Vision Statement</label>
                <input
                  type="text"
                  name="visionstatement"
                  id="visionstatement"
                  required
                />
              </p>
              <p>
                <label>Vision Description</label>
                <input type="text" name="visiondesc" id="visiondesc" required />
              </p>
              <p>
                <label>Scope</label>
                <input type="text" name="scope" id="scope" required />
              </p>
              <p>
                <label>Assumptions Log</label>
                <input
                  type="text"
                  name="assumptionlog"
                  id="assumptionlog"
                  required
                />
              </p>
              <p>
                <label>Estimated Time Line</label>
                <input
                  type="date"
                  name="estimatedtimeline"
                  id="estimatedtimeline"
                  required
                />
              </p>
              <p>
                <label>Budget Request</label>
                <input
                  type="text"
                  name="budgetrequest"
                  id="budgetrequest"
                  required
                />
              </p>
              <p>
                <label>Required Resources</label>
                <input
                  type="text"
                  name="requiredresorces"
                  id="requiredresorces"
                  required
                />
              </p>
              <p>
                <label for="communicationFre">Communication Frequency</label>

                <select id="communicationFre">
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Bi-Weekly">Bi-Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </p>
            </form> }
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
