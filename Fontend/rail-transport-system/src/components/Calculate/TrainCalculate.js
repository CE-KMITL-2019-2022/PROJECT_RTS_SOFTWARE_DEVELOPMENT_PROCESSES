import React, { useState } from "react";
import "./TrainCalculate.css";
import { Link, useHistory } from "react-router-dom";
import SelectforCal from "./SelectforCal";
import { UserContextS } from "./UseContextSource";
import { UserContextD } from "./UseContextDest";
import { useContext } from "react";
import { Col, Row, Button, Modal } from "react-bootstrap";
import "../../App.css";
const Cal = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1 className="Cal">คำนวณค่าโดยสาร</h1>
      </div>
    </div>
  );
};
const StaSource = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="BgS">
        <h1 className="StaS">สถานีต้นทาง</h1>
      </div>
      <div className="BgSelect1">
        <ButSelSta />
      </div>
    </div>
  );
};

const StaDest = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="BgS">
        <h1 className="StaS">สถานีปลายทาง</h1>
      </div>
      <div className="BgSelect1">
        <h1 className="Select1">เลือกสถานี</h1>
        <ButSelSta />
      </div>
    </div>
  );
};

const ButSelSta = () => {
  return (
    <Link to="/SelectStation">
      <button type="button" className="botton">
        Click Me!
      </button>
    </Link>
  );
};

const ButOkCal = () => {
  return (
    <Link to="/calculation-result">
      <button className="bottonok">
        <h1 className="textok">คำนวณค่าโดยสาร</h1>
      </button>
    </Link>
  );
};

const Navbar = () => {
  return <div className="navbara"></div>;
};

export default function TrainCalculate() {
  const history = useHistory();
  const { clickS, setclickS } = useContext(UserContextS);
  const { clickD, setclickD } = useContext(UserContextD);

  const handleSetdefault = () => {
    setclickS("Please Select Sourrce :");
    setclickD("Please Select Sourrce :");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <Row>
        <Row>
          <Col style={{ marginTop: "10%" }}>
            <h1
              style={{
                backgroundColor: "#9C9B9C",
                marginBottom: "5%",
                borderRadius: "12px",
                width: "300px",
                alignContent: "center",
                textAlign: "center",
                margin: "20px",
                color: "white",
              }}
            >
              คำนวณค่าโดยสาร
            </h1>
            <div
              style={{
                backgroundColor: "#F9F9F8",
                borderRadius: "12px",
                width: "auto",
                textAlign: "center",
                marginLeft: "20px",
                borderStyle: "solid",
                borderColor: "#7E7D81",
              }}
            >
              <h2>
                สถานีต้นทาง :
                <Link to="/SelectStation">
                  <Button
                    variant="outline-cal"
                    size="lg"
                    style={{
                      width: "auto",
                      borderRadius: "10px",
                      margin: "20px",
                      textAlign: "center",
                    }}
                  >
                    {clickS}
                  </Button>
                </Link>
              </h2>
              <h2>
                สถานีปลายทาง :
                <Link to="/select-station-dest">
                  <Button
                    variant="outline-cal"
                    size="lg"
                    style={{
                      width: "auto",
                      borderRadius: "12px",
                      margin: "20px",
                    }}
                  >
                    {clickD}
                  </Button>
                </Link>
              </h2>
            </div>
            <Button
              onClick={() => {
                if (
                  clickS == "Please Select Source" ||
                  clickD == "Please Select Dest" || clickD == clickS
                ) {
                  handleShow();
                } else {
                  history.push("/calculation-result");
                }
              }}
              variant="outline-cal"
              size="lg"
              style={{
                width: "auto",
                borderRadius: "12px",
                margin: "20px",
              }}
            >
              คำนวณค่าโดยสาร
            </Button>
          </Col>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            ไม่สามารถสั่งคำนวณเส้นทางได้ กรุณาเลือกข้อมูลให้ครบถ้วนและถูกต้อง
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                ตกลง
              </Button>
            </Modal.Footer>
          </Modal>
          <Col>
            <img
              src="images/ตารางรถไฟฟ้า.png"
              style={{
                width: "80vh",
                height: "80vh",
                borderRadius: "60px",
                borderStyle: "solid",
                borderStyle: "solid",
                borderWidth: "10px",
                borderColor: "#7E7D81",
                margin: "10%"
              }}
            />
          </Col>
        </Row>
      </Row>
    </div>
  );
}
