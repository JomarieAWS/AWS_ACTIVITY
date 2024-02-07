import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonGroup, Container, Modal } from "react-bootstrap";
import d1 from "./IMG/SHUMI/3dModel1.jpg";
import d2 from "./IMG/SHUMI/3dModel2.jpg";
import a1 from "./IMG/SHUMI/Animation1.gif";
import a2 from "./IMG/SHUMI/Animation2.gif";
import gd1 from "./IMG/SHUMI/GD1.png";
import gd2 from "./IMG/SHUMI/GD2.png";
import cp1 from "./IMG/SHUMI/Cosplay.jpg";
import cp2 from "./IMG/SHUMI/Cosplay2.jpg";
import Taylor from "./IMG/SHUMI/TS.mp3";
import Paramore from "./IMG/SHUMI/PM.mp3";

import backgroundMusic from "./IMG/ShumiBGM.mp3";

var showAudio = false;
var locX = 100; //Location X of the Tile Blocks
var locY = 300; //Location Y of the Tile Blocks
var separatorX = 75; //Distance between different blocks X of the Tile Blocks
var separatorY = 90; //Distance between different blocks X of the Tile Blocks

var ModalTitle = "";
var ModalContent = "gumagana";
var rightImg = "";
var leftImg = "";

export default function Shumi() {
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Adjust volume level here (0.5 is 50%)
    }
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleSpecialBoxClick = (parameter: number) => {
    switch (parameter) {
      case 0:
        ModalTitle = "Game Development";
        rightImg =
          "https://qph.cf2.quoracdn.net/main-qimg-ff00266f9b708bf046422d1546a33369";
        leftImg =
          "https://qph.cf2.quoracdn.net/main-qimg-e1ae93c9706ea0b2153efccb2d771bdd";
        ModalContent =
          "I love game development; the reason why I got hooked into programming is that I want to make my own game. I started creating CMD games using C++, like Snake and mazes, and then progressed to 2D games imitating retro games. It's so much fun knowing how things work behind the scenes in games. My dream is that someday I want to publish my own game.";
        showAudio = false;
        break;
      case 1:
        ModalTitle = "Animation";
        rightImg = a1;

        leftImg = a2;
        showAudio = false;
        ModalContent =
          " I love watching animators in YouTube,  and got interested and curious on HOW THE F DID THAY DO THAT ??  then I start studying and creating simple animations, using ADOBE ANIMATE and BLENDER . understanding how FAME WOKS ? .. got the pun ?   ";
        break;
      case 2:
        ModalTitle = "3D Model";
        rightImg = d1;
        leftImg = d2;
        showAudio = false;
        ModalContent =
          "During our 4th year, we had a subject called Computer Graphics and Visual Design. This required us to create 3D models in Blender. This marked the beginning of sleepless nights spent creating 3D models. During the pandemic, I became addicted to creating various 3D models and got hooked on how steep the learning curve is. Every day, there's too much to learn, but the latest Blender update kills me. Geometry nodes, this is your fault!";
        break;
      case 3:
        ModalTitle = "Graphic Design";
        rightImg = gd1;
        leftImg = gd2;
        ModalContent =
          "I enjoy creating graphic designs, especially when I learn the psychology behind design—like color theory, white spaces, and various graphic concepts that enhance my design skills. Additionally, witnessing the evolution from my first design to my current ones is a source of joy, showcasing how much I've grown. The beauty of graphic design lies in the ability to learn from mistakes and ensure improvement with each subsequent design";
        showAudio = false;
        break;

      case 4:
        ModalTitle = "Watching Anime";
        rightImg =
          "https://ih1.redbubble.net/image.4237614935.3964/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg";
        leftImg =
          "https://m.media-amazon.com/images/M/MV5BYmYyOGI4MDktZTdiZS00NWU4LWIxNjEtNjNkMGJjNTFhOTUyXkEyXkFqcGdeQXVyNjc5OTUxNjY@._V1_FMjpg_UX1000_.jpg";
        ModalContent =
          "I love watching anime, especially those that I can relate to and learn real-life lessons from. Before, I was drawn to anime with special abilities like Flame of Recca,Naruto,Dragon Ball, and more. But now, I'm more into real-life anime, ones set in a realistic world without superpowers. I find myself particularly drawn to these types of anime because they often explore themes and situations that mirror real-life experiences, allowing me to connect with the characters on a deeper level and learn valuable lessons along the way. Im really into these realistic anime settings. Currently, my favorite anime are Haikyuu and Rent a Girlfriend. Im eagerly awaiting more seasons!";
        showAudio = false;
        break;

      case 5:
        ModalTitle = "Music";
        rightImg =
          "https://people.com/thmb/bnv58OSnUSsOsnwP_c9f85fBdv0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(992x0:994x2)/taylor-swift7-2000-48f9bfb372c34e36866773b1ede0b372.jpg";
        leftImg =
          "https://live.staticflickr.com/4178/34479170672_0702c52a39_z.jpg";
        ModalContent =
          "I enjoy listening to music, and my two favorite artists are Taylor Swift and Paramore. My favorite albums are Reputation and After Laughter. Taylor Swift's songs are my go-to for happy moments; I usually listen to her music whenever I'm feeling upbeat or in a good mood. Paramore serves as my mood booster; I turn to their music whenever I'm feeling sad or depressed. Some Paramore songs feel like they were made just for me. Paramore thought me that you can still dance while crying  ";
        showAudio = true;
        break;

      case 6:
        ModalTitle = "Cosplay";
        rightImg = cp1;

        leftImg = cp2;
        ModalContent =
          "I've recently got Isekaied into the world of cosplaying, and it's like hitting the Character Switch in life's game! It's my mini getaway from reality, where I can be anyone for a moment. Im eager to try my hand at cosplaying my favorite anime characters, especially the cross-dressing kind. Because why stick to the same old script?Im looking forward to future cosplay events and attending as many as possible. ";
        showAudio = false;
        break;
      default:
        console.log("Invalid day");
    }

    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const boxLocation = [
    [locX - separatorX, locY + separatorY],
    [locX, locY + separatorY],
    [locX + separatorX * 2, locY + separatorY],
    [locX + separatorX * 3, locY + separatorY],
    [locX + separatorX * 5, locY],
    [locX + separatorX * 7, locY],
    [locX + separatorX * 9, locY + separatorY],
    [locX + separatorX * 10, locY + separatorY],
    [locX + separatorX * 12, locY + separatorY],
    [locX + separatorX * 13, locY + separatorY],
    [locX + separatorX * 16, locY],
    [locX + separatorX * 18, locY],
    [locX + separatorX * 21, locY + separatorY],
    [locX + separatorX * 22, locY + separatorY],
    [locX + separatorX * 25, locY + separatorY],
    [locX + separatorX * 24, locY + separatorY],
    [locX + separatorX * 27, locY],
    [locX + separatorX * 28, locY],
    [locX + separatorX * 30, locY],
    [locX + separatorX * 31, locY],

    [locX + separatorX * 33, locY + separatorY],
    [locX + separatorX * 35, locY + separatorY],
  ];
  const specialBoxLocation = [
    [locX + separatorX, locY + separatorY],
    [locX + separatorX * 6, locY],
    [locX + separatorX * 11, locY + separatorY],
    [locX + separatorX * 17, locY],
    [locX + separatorX * 23, locY + separatorY],
    [locX + separatorX * 29, locY],
    [locX + separatorX * 34, locY + separatorY],
  ];

  return (
    <div className="customCurserSiteWide">
      <div className="Shumi_BackGround">
        <div className="ClickMe"> </div>
        <div className="ClickMePipe"> </div>
        {boxLocation.map((location, index) => (
          <div
            className="box"
            key={index}
            style={{ left: location[0], top: location[1] }}
          ></div>
        ))}

        {specialBoxLocation.map((location, index) => (
          <div
            className="specialBox"
            key={index}
            style={{ left: location[0], top: location[1] }}
            onClick={() => handleSpecialBoxClick(index)}
          ></div>
        ))}
        <div className="Pipe" onClick={() => {}}>
          <Button className="PipeButton" variant="outline-primary" href="/home">
            Back Home
          </Button>{" "}
        </div>

        <div className="FlagPole"> </div>
        <div className="Castle"></div>
        <div className="Floor"></div>

        <Modal show={showModal} onHide={handleCloseModal} size="xl" centered>
          <Modal.Header closeButton>
            <Modal.Title className="ModalTitle">{ModalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-between">
              {/* Left Image */}
              <img
                src={rightImg}
                alt="Left Image"
                style={{ maxWidth: "30%", marginRight: "10px" }}
              />

              {/* Middle Text */}
              <div style={{ flex: 1 }}>
                <p className="ModalContent">{ModalContent}</p>

                {showAudio ? (
                  <audio id="kahitano" controls>
                    <source src={Taylor} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                ) : null}
                {showAudio ? (
                  <audio id="kahitano" controls>
                    <source src={Paramore} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                ) : null}
              </div>

              {/* Right Image */}
              <img
                src={leftImg}
                alt="Right Image"
                style={{ maxWidth: "30%", marginLeft: "10px" }}
              />
            </div>
          </Modal.Body>

          <Modal.Footer>{/* */}</Modal.Footer>
        </Modal>
      </div>
      <audio ref={audioRef} id="BGmusic" controls loop autoPlay hidden>
        <source src={backgroundMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
