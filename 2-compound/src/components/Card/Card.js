import React from 'react';
import classnames from 'classnames';
import { Container, Body, Title, Text, Image, Button } from './style';

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classnames('card', classes)} {...restProps}>
      {children}
    </Container>
  );
}

Card.Body = function CardBody({ classes, children, ...restProps }) {
  return (
    <Body className={classnames('card__body', classes)} {...restProps}>
      {children}
    </Body>
  );
};

Card.Title = function CardTitle({ classes, children, ...restProps }) {
  return (
    <Title className={classnames('card__title', classes)} {...restProps}>
      {children}
    </Title>
  );
};

Card.Text = function CardTitle({ classes, children, ...restProps }) {
  return (
    <Text className={classnames('card__text', classes)} {...restProps}>
      {children}
    </Text>
  );
};

Card.Image = function CardImage({ src, classes, children, ...restProps }) {
  return <Image src={src} className={classnames('card__image', classes)} {...restProps} />;
};

Card.Button = function CardButton({ classes, children, ...restProps }) {
return <Button type="button" className={classnames('card__button', classes)} {...restProps}>{children}</Button>;
};
