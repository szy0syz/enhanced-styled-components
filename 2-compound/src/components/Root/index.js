import React from 'react';
import porrot from '../../parrot.jpg';
import { Card } from '../../components/Card';

const Root = () => (
  <main>
    <Card>
      <Card.Image src={porrot} />
      <Card.Body>
        <Card.Title>Card-Title</Card.Title>
        <Card.Text className="Text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        <Card.Button>Porrat</Card.Button>
      </Card.Body>
    </Card>

    <Card>
      <Card.Image src={porrot} />
      <Card.Body>
        <Card.Title>Card-Title</Card.Title>
        <Card.Text className="Text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        <Card.Button>Porrat</Card.Button>
      </Card.Body>
    </Card>
  </main>
);

export default Root;
