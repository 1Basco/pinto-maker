import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const cardPinto = () => (
  <Card>
    <Card.Content>
      <Title>Pinto de *****</Title>
      <Card.Cover source={{ uri: 'https://gartic.com.br/imgs/mural/jo/jonathanrb/pinto.png' }} />
    </Card.Content>
  </Card>
);

export default cardPinto;