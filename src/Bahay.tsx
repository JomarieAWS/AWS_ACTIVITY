import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import backgroundMusic from "./IMG/MarioBGM.mp3";

export default function Bahay() {
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Adjust volume level here (0.5 is 50%)
    }
  }, []);

  useEffect(() => {
    // Get the audio element
    const audioElement = document.getElementById(
      "kahitano"
    ) as HTMLAudioElement;

    // Autoplay the audio
    audioElement?.play();
  }, []);

  return (
    <div className="Bahay_BG">
      <Row>
        <Col>
          <p className="topDesign">Score: </p>
          <p className="topDesign">696969 </p>
        </Col>
        <Col>
          <p className="topDesign"> ⛃100x </p>
        </Col>
        <Col>
          <p className="topDesign">World </p>
          <p className="topDesign"> 1-1 </p>
        </Col>
        <Col>
          <p className="topDesign">Time: </p>
          <p className="topDesign">60:30 </p>
        </Col>
      </Row>
      <Container className="Bahay_ContantContainter">
        <p className="Bahay_Title"> Digital </p>
        <p className="Bahay_Title2"> Transformation</p>
        <Row>
          <p className="Bahay_CreatedBy"> Created By Jomarie Dela Pena</p>
        </Row>
        <Row>
          <Button
            className="Bahay_Button"
            variant="outline-primary"
            href="Calculator"
          >
            Calculator
          </Button>{" "}
        </Row>
        <Row>
          <Button
            className="Bahay_Button"
            variant="outline-primary"
            href="/Jason"
          >
            JSON Reader
          </Button>{" "}
        </Row>
      </Container>

      <div className="TextBubble">
        <Button
          className="Bahay_ShumiButton"
          variant="outline-primary"
          href="/Shumi"
        >
          My Hobbies
        </Button>{" "}
      </div>
      <audio ref={audioRef} id="kahitano" controls loop autoPlay hidden>
        <source src={backgroundMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="Mario"> </div>
    </div>
  );
}

{
  /* <Row className="Bahay_Button_Row">
<Col ><Button className="Calculator_Button" variant="outline-primary"href="Calculator">Calculator</Button>{' '}</Col>
<Col ><Button className="JSON_Button"  variant="outline-primary"href="/Jason">JSON Reader</Button>{' '}</Col>
</Row>




<Row className="Bahay_Hobbies">

<Card className="Bahay_Card" style={{ width: '100rem', height: '20rem'}}>

<Card.Body>
<Card.Img className="Hobby_Img" variant="top" src="https://media.tenor.com/GoueKp_19I8AAAAi/taylor-swift-reactions-taylor-swift.gif" />
<Card.Title className="Card_Title">♥ Hello Fellow Swifties ♥ </Card.Title>
<Card.Text>
  Sorry the old JOM cant come to the phone right now, why ? coz he's Dead ! 
</Card.Text>
<Button className="HobbyButton" variant="primary" href="Shumi">HOBBIES</Button>
</Card.Body>
</Card>

</Row> */
}
