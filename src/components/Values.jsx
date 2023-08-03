import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Value({ title, description, action }) {
  return (
    <Container>

    <Card>
      <h2 className="shadow-lg">{title}</h2>
      <p>{description}</p>
      <Button>{action}</Button>
    </Card>
    </Container>
  );
}

export default function Values({ values }) {
  return (
    <Card>
      {values.map(({ title, description, action }, index) => (
        <Value key={index} title={title} description={description} action={action} />
      ))}
    </Card>
  );
}
