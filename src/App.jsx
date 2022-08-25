import { useState } from "react";
import Modal from "./comps/Modal";
import ModalCo from "./comps/ModalCo";

function App() {
  const [rated, setRated] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [oneStar, setOneStar] = useState(0);
  const [twoStar, setTwoStar] = useState(0);
  const [threeStar, setThreeStar] = useState(0);
  const [fourStar, setFourStar] = useState(0);
  const [fiveStar, setFiveStar] = useState(0);

  function submitEl() {
    setIsPressed((prevState) => !prevState);
  }

  function rateAgain() {
    setIsPressed((prevState) => !prevState);
    setRated((prevState) => !prevState);
    setOneStar(0);
    setTwoStar(0);
    setThreeStar(0);
    setFourStar(0);
    setFiveStar(0);
  }

  function rateOneStar() {
    setRated((prevState) => !prevState);
    setOneStar(1);
    setTwoStar(0);
    setThreeStar(0);
    setFourStar(0);
    setFiveStar(0);
  }

  function rateTwoStar() {
    setRated((prevState) => !prevState);
    setOneStar(0);
    setTwoStar(2);
    setThreeStar(0);
    setFourStar(0);
    setFiveStar(0);
  }

  function rateThreeStar() {
    setRated((prevState) => !prevState);
    setOneStar(0);
    setTwoStar(0);
    setThreeStar(3);
    setFourStar(0);
    setFiveStar(0);
  }

  function rateFourStar() {
    setRated((prevState) => !prevState);
    setOneStar(0);
    setTwoStar(0);
    setThreeStar(0);
    setFourStar(4);
  }

  function rateFiveStar() {
    setRated((prevState) => !prevState);
    setOneStar(0);
    setTwoStar(0);
    setThreeStar(0);
    setFourStar(0);
    setFiveStar(5);
  }

  return (
    <div className="bg-neutral-900 grid place-items-center h-screen">
      {!isPressed ? (
        <Modal
          submitEl={submitEl}
          rated={rated}
          rateOneStar={rateOneStar}
          rateTwoStar={rateTwoStar}
          rateThreeStar={rateThreeStar}
          rateFourStar={rateFourStar}
          rateFiveStar={rateFiveStar}
        />
      ) : (
        <ModalCo
          rateAgain={rateAgain}
          oneStar={oneStar}
          twoStar={twoStar}
          threeStar={threeStar}
          fourStar={fourStar}
          fiveStar={fiveStar}
        />
      )}
    </div>
  );
}

export default App;
