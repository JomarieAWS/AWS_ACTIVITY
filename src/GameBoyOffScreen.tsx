import React, { useEffect, useState } from "react";

const GameBoyOffScreen: React.FC = () => {
  const [redirectToLoading, setRedirectToLoading] = useState(false);
  const [rotateAndZoom, setRotateAndZoom] = useState(false);

  const handleButtonClick = () => {
    // Trigger the rotation and zoom animation
    setRotateAndZoom(true);

    // Set the state to trigger the redirection after the animation
    setTimeout(() => {
      setRedirectToLoading(true);
    }, 1000); // Adjust the timeout duration according to your animation duration
  };

  // Use useEffect to reset the rotateAndZoom state after the animation completes
  useEffect(() => {
    if (rotateAndZoom) {
      const timeoutId = setTimeout(() => {
        setRotateAndZoom(false);
      }, 1000); // Adjust the timeout duration to match the animation duration
      return () => clearTimeout(timeoutId);
    }
  }, [rotateAndZoom]);

  // Use useEffect to handle the redirection when redirectToLoading state changes
  useEffect(() => {
    if (redirectToLoading) {
      // Redirect to the next page
      window.location.href = "/loading"; // Replace '/loading' with the path of your next page
    }
  }, [redirectToLoading]);

  return (
    <div>
      <div className={`Pitsur ${rotateAndZoom ? "Zoom" : ""}`}></div>
      <div
        className={`GameBoy ${rotateAndZoom ? "rotateAndZoom" : ""}`}
        onClick={handleButtonClick}
      >
        {/* Content inside GameBoy div */}
      </div>
    </div>
  );
};

export default GameBoyOffScreen;
