import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import backgroundMusic from "./IMG/GameboySound.mp3"; // Replace with the correct path to your audio file

export default function GameBoy() {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Get the GIF container element
    const gifContainer = document.getElementById("gif-container");

    // Set a timeout to hide the GIF container after 3 seconds
    const hideGifTimeout = setTimeout(() => {
      // Hide the GIF container by adding a 'hidden' class
      gifContainer?.classList.add("hidden");
    }, 2600);

    // Set a timeout to navigate after the GIF duration
    const gifDuration = 1800;
    const navigateTimeout = setTimeout(() => {
      navigate("/home");
    }, gifDuration + 2600); // Add 3000 to account for the 3-second delay before navigation

    return () => {
      // Clear the timeouts to avoid unexpected behavior
      clearTimeout(hideGifTimeout);
      clearTimeout(navigateTimeout);
    };
  }, [navigate]);

  useEffect(() => {
    // Get the GIF element
    const gif = document.getElementById("gif") as HTMLImageElement;

    // Set the GIF duration in milliseconds
    const gifDuration = 1800;

    // Play the GIF
    gif.style.animation = `playGif ${gifDuration}ms linear forwards`;

    // Play background music when GIF starts playing
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  useEffect(() => {
    // Create an Audio element for background music
    const audio = new Audio(backgroundMusic);

    // Store the audio element in the ref
    audioRef.current = audio;

    // Cleanup audio on component unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
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
    <div>
      <div className="gif-container">
        <img src="./GameBoyGif.gif" alt="Your GIF" id="gif" />
      </div>
      <audio id="kahitano" controls loop autoPlay hidden>
        <source src={backgroundMusic} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
