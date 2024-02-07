import React from 'react'
import { Card, Container } from 'react-bootstrap'

interface CardProps {
 
    
    name: string;
    userName: string;
    email: string;
    street: string;
    suite: string;
    city: string;
    zipCode: string;
 
    placeholderImg: string;
  }

type Props = {}

function JasonCard  ({  name, placeholderImg,userName,email,street,suite,city,zipCode } :CardProps)  {
    const placeholderSVG = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          stroke="green"
          strokeWidth="4"
        >
          <image href={placeholderImg} width="100" height="100" />
          <circle cx="50" cy="50" r="48" fill='transparent' />
        </svg>);
 
 return (
    
    <Card className="custom-card">
    <div className="profile-picture-container">
      {placeholderSVG}

    </div>
    <Card.Title className='CardTitle'>{name}</Card.Title>
    <Card.Body className='CardBody'>

      <Card.Text>{userName}</Card.Text>
      <Card.Text>{email}</Card.Text>
      <Card.Text>{street}</Card.Text>
      <Card.Text>{suite}</Card.Text>
      <Card.Text>{city}</Card.Text>
      <Card.Text>{zipCode}</Card.Text>
    </Card.Body>
  </Card>

  );
    }
export default JasonCard