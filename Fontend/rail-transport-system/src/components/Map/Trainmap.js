import React, { memo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useHistory} from 'react-router-dom';
import './Trainmap.css'

function refreshPage(){
  window.scrollTo(0,0);
}

export default memo(function Trainmap() {
  return (
    <div style={{marginTop:"10px",width:"100%"}}>
    <Container align="center">
      <Row>
        <Col><h3>แผนที่สถานีรถไฟฟ้า</h3>
        </Col>
        <Col><h4>BTS,MRT and AIRPORTLINK</h4></Col>
      </Row>
      <Row>
        <Col >
        <a href="https://rail-transport-system.netlify.app/images/mapfull2564.jpg" target='_blank'>
        <img src='images/mapfull2564.jpg' style={{width: 600,height: 'auto',borderStyle: "solid",borderRadius: "10px",borderWidth: "10px",borderColor:"#8FB1EB"}} draggable="false" dragstart="false" class="unselectable">
        </img>
        </a>
        </Col>
        <Col>
          <Col>
              <Col>
                    <img src='images/BTS.jpg' style={{width: 280,height: 'auto'}} draggable="false" dragstart="false" class="unselectable"></img>
              </Col>
              <Col>
                    <img src='images/MRT.jpg'style={{width: 280,height: 'auto'}} draggable="false" dragstart="false" class="unselectable"></img>
              </Col>
              <Col>
                    <img src='images/airlink.jpg' style={{width: 280,height: 'auto'}} draggable="false" dragstart="false" class="unselectable"></img>
              </Col>
          </Col>
          <Col><h4>วิธีดูหมายเลขสถานี</h4></Col>
          <Row>
            <Row>
              <Col>
                <Row>
                  <Col xs="12" >
                    <Row>
                      <Col xs="2"><i className="fas fa-check-square"></i></Col>
                      <Col  style={{textAlign:"left"}}>ตัวอักษรภาษาอังกฤษแสดงชื่อของสายรถไฟ</Col>
                      <div style={{ borderTop: "5px solid #7f7df9 ", marginLeft: 15 ,width: 225}}></div>
                    </Row>
                  </Col>
                  <Col xs="12" >
                    <Row>
                      <Col xs="2"><i className="fas fa-check-square"></i></Col>
                      <Col  style={{textAlign:"left"}}>หมายเลขสถานีจะแสดงตามสายของรถไฟในแผนที่เส้นทางรถไฟใต้ดิน</Col>
                      <div style={{ borderTop: "5px solid #7f7df9 ", marginLeft: 15 ,width: 225}}></div>
                    </Row>
                  </Col>
                  <Col xs="12" >
                    <Row>
                      <Col xs="2"><i className="fas fa-check-square"></i></Col>
                      <Col  style={{textAlign:"left"}}>หมายเลขสถานีจะล้อมรอบด้วยวงกลมสีซึ่งแสดงถึงสีของสายรถไฟนั้น</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs="7">
                  <Row>
                      <Col><img src='images/btsgreen.png' style={{width: 150,height: 'auto'}} draggable="false" dragstart="false" class="unselectable"></img></Col>
                      <Col><img src='images/mrtblue.png' style={{width: 150,height: 'auto'}}></img></Col>
                  </Row>
                  <Row>
                      <Col><img src='images/btsgreenlight.png' style={{width: 150,height: 'auto'}} draggable="false" dragstart="false"  class="unselectable"></img></Col>
                      <Col><img src='images/mrtpurple.png' style={{width: 150,height: 'auto'}}></img></Col>
                  </Row>
                  <Row>
                      <Col><img src='images/btsgold.png' style={{width: 150,height: 'auto'}} draggable="false" dragstart="false" class="unselectable"></img></Col>
                  </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      <Link to='/calculate' onClick={refreshPage}><h2><i class="far fa-arrow-alt-circle-down"></i>คำนวณระยะทางค่าโดยสาร<i class="far fa-arrow-alt-circle-down"></i></h2></Link>
    </Container>
    </div>
    
  );
});
