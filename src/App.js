import React from "react";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Download, X } from "react-bootstrap-icons";
import { Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import order_complete_icon from "./Images/success_icon.jpeg";
import Fedex from "./Images/Fedex.png";
import BlueDart from "./Images/blue_dart.jpg";
import dtdc from "./Images/dtdc.jpg";
import { Title, DispatchedData } from "./data";

export default class Locofast extends React.Component {
  state = {
    Title: Title,
    Data: DispatchedData
  };
  render() {
    const renderDispatchedList = (item, index) => {
      var logo = Fedex;
      if (item.type === "Blue Dart") {
        logo = BlueDart;
      }
      if (item.type === "DTDC") {
        logo = dtdc;
      }
      return (
        <ListGroup.Item
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <div>
            <img
              style={{
                width: "100px",
                height: "100px",
                marginRight: "20px"
              }}
              src={logo}
              alt="logo"
            />
          </div>
          <div>
            <div className="details" style={{ marginTop: "10px" }}>
              {item.details}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px"
              }}
            >
              <div>
                <div className="small_text">Tracking Id</div>
                <div className="bold_text">{item.tracking_id}</div>
              </div>
              <div>
                <div className="small_text">Quantity</div>
                <div className="bold_text">{item.quantity}</div>
              </div>
              <div>
                <div className="small_text">No. of Boxes</div>
                <div className="bold_text">{item.no_of_box}</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "10px"
              }}
            >
              <Button variant="light" size="sm">
                E-way Bill &nbsp;
                <Download />
              </Button>
              &nbsp;
              <Button variant="light" size="sm">
                Invoice copy &nbsp; <Download />
              </Button>
              &nbsp;
              <Button variant="light" size="sm">
                Packing list &nbsp; <Download />
              </Button>
              &nbsp;
              <Button variant="light" size="sm">
                Challan copy&nbsp; <Download />
              </Button>
            </div>
          </div>
        </ListGroup.Item>
      );
    };
    return (
      <div className="App">
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px"
            }}
          >
            <div className="title">{this.state.Title}</div>
            <X color="#00000" size={26} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card border="light" style={{ background: "#dbfaea" }}>
              <Card.Body>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div className="details">Order complete!</div>
                    <div style={{ color: "#008000" }}>
                      This order has been fully dispatched.
                    </div>
                  </div>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={order_complete_icon}
                    alt="order_complete_icon"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <ListGroup variant="flush">
              {this.state.Data.map(renderDispatchedList)}
            </ListGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
