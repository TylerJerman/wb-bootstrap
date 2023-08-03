import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Hero({ title, lead }) {
  return (
    <Container fluid className="text-center py-5 bg-light">
      <Row bg="dark">

    <Col bg="dark" class="m">
      <h1 className = "bg-primary shadow-xl border-lg">{title}</h1>
      <p className = "py-10 shadow-lg">{lead}</p>
    </Col>
      </Row>
    </Container>
  );
}
