import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import TrainTimeList from './TrainTimeList';

const stations = [
  'SALT LAKE SECTOR V',
  'KARUNA MOYEE',
  'CENTRAL PARK',
  'CITY CENTER',
  'BENGAL CHEMICAL',
  'SALT LAKE STADIUM',
  'PHOOL BAGAN',
  'SEALDAH'
];


function App() {
  const [selectedStation, setSelectedStation] = useState(stations[0]);

  const handleStationChange = (e) => {
    setSelectedStation(e.target.value);
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h1>Metro Time</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Select Station:</Form.Label>
              <Form.Control as="select" onChange={handleStationChange}>
                {stations.map((station, index) => (
                  <option key={index}>{station}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <TrainTimeList selectedStation={selectedStation} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
