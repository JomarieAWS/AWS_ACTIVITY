import React, { useEffect, useState } from "react";
import Axios from "axios";
import JasonCard from "./Components/JasonCard";
import { Button, Col, Container, Row } from "react-bootstrap";
import backgroundMusic from "./IMG/JasonMarioBG.mp3";

export default function Jason() {
  const [JasonValue, GetJasonValue] = useState<[] | null>(null);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    Axios.get(apiUrl).then((res) => {
      GetJasonValue(res.data);
    });
  }, []);

  const navigateToHomePage = () => {
    window.location.href = "/home"; // Specify the path to your home page
  };

  return (
    <div className="Jason_Background">
      <div
        className="JasonBack"
        onClick={() => {
          navigateToHomePage();
        }}
      ></div>
      <Container>
        <Row>
          <p className="Jason_Title"> JASON & FRIENDS </p>
        </Row>
      </Container>
      <Container>
        <Row></Row>
      </Container>
      <Container className="Jason_Container">
        <Row>
          {JasonValue?.map((user: any, index) => {
            return (
              <Col xs={12} md={6} lg={6} xl={4}>
                <JasonCard
                  name={user.name}
                  userName={"User Name : " + user.username}
                  email={"E Mail : " + user.email}
                  street={"Street : " + user.address.street}
                  suite={"Suite : " + user.address.suite}
                  city={"City : " + user.address.city}
                  zipCode={"Zip Code : " + user.address.zipcode}
                  placeholderImg={"./" + index + ".png"}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <audio id="kahitano" controls loop autoPlay hidden>
        <source src={backgroundMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
