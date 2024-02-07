import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import backgroundMusic from "./IMG/CalcMarioBGM.mp3";
import numberButtonSound from "./IMG/CoinSound.mp3";
import equalButtonSound from "./IMG/EqualsSound.mp3";
import errorSound from "./IMG/ErrorSound.mp3";

export default function Calculator() {
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8; // Adjust volume level here (0.5 is 50%)
    }
  }, []);
  //SampleCreation
  //let num: string = "";

  const [myString, setString] = useState("0");
  const [isError, setError] = useState(false);

  const buttonPressAudio = new Audio(numberButtonSound);
  buttonPressAudio.volume = 0.6;
  const EqualbuttonPressAudio = new Audio(equalButtonSound);
  EqualbuttonPressAudio.volume = 0.4;
  const ErrorAudio = new Audio(errorSound);
  ErrorAudio.volume = 1;

  var isOperator = false;

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      // Set the volume to a value between 0 and 1 (e.g., 0.5 for 50% volume)
      audioRef.current.volume = 0.2;
    }
  }, []);

  useEffect(() => {
    // Get the audio element
    const audioElement = document.getElementById("BGmusic") as HTMLAudioElement;

    // Autoplay the audio
    audioElement?.play();
  }, []);

  const numberInputter = (num: String) => {
    const lastCharacter: string = myString[myString.length - 1];

    if (
      lastCharacter === "+" ||
      lastCharacter === "-" ||
      lastCharacter === "*" ||
      lastCharacter === "/"
    ) {
      isOperator = true;
    }

    if (isOperator === true) {
      if (
        `${num}` === "*" ||
        `${num}` === "/" ||
        `${num}` === "-" ||
        `${num}` === "+"
      ) {
        return setString(myString.slice(0, -1) + num);
      } else if (`${num}` === "0") {
        return myString;
      }
    }

    if (
      (`${num}` === "*" ||
        `${num}` === "/" ||
        `${num}` === "-" ||
        `${num}` === "+") &&
      (myString === "0" || isError === true)
    ) {
      setError(false);
      return setString("0");
    }

    if (isError === true) {
      setError(false);
      return setString("" + num);
    } else if (myString == "0") {
      return setString(String(num));
    } else if (
      `${num}` === "*" ||
      `${num}` === "/" ||
      `${num}` === "-" ||
      `${num}` === "+"
    ) {
      return setString(myString + num);
    } else {
      buttonPressAudio.play();
      return setString(myString + num);
    }
  };

  const clearContent = () => {
    return setString("0");
  };

  const calculateContent = () => {
    try {
      // use a template literal to convert the result to a string

      var Result = eval(myString);
       Result = Result.toFixed(2);
      Result = Math.round(Result);
      EqualbuttonPressAudio.play();
      return setString(Result);
    } catch (error) {
      // if there is an error, display a message
      setError(true);
      ErrorAudio.play();

      return setString("☠☠☠☠☠☠☠☠☠☠");
    }
  };

  return (
    <div className="Calculator_BG">
      <p className="Calculator_Title"> MARIOLATOR </p>
      <div className="ClickMePipe"> </div>
      <Container className="Calculator_Container">
        <Row>
          <Col>
            <input
              className="Calculator_TextBox"
              type="text"
              value={myString}
            />
          </Col>
        </Row>

        <Row className="Calculator_Row">
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("1")}
            >
              1
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("2")}
            >
              2
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("3")}
            >
              3
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("+")}
            >
              +
            </Button>{" "}
          </Col>
        </Row>

        <Row className="Calculator_Row">
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("4")}
            >
              4
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("5")}
            >
              5
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("6")}
            >
              6
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("-")}
            >
              -
            </Button>{" "}
          </Col>
        </Row>
        <Row className="Calculator_Row">
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("7")}
            >
              7
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("8")}
            >
              8
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("9")}
            >
              9
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("*")}
            >
              x
            </Button>{" "}
          </Col>
        </Row>
        <Row className="Calculator_Row">
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => clearContent()}
            >
              C
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("0")}
            >
              0
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => calculateContent()}
            >
              =
            </Button>{" "}
          </Col>
          <Col>
            <Button
              className="CalculatorButton"
              variant="primary"
              onClick={() => numberInputter("/")}
            >
              /
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      <div className="Pipe" onClick={() => {}}>
        <Button className="PipeButton" variant="outline-primary" href="/home">
          Back Home
        </Button>{" "}
      </div>

      <audio ref={audioRef} id="BGmusic" controls loop autoPlay hidden>
        <source src={backgroundMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
