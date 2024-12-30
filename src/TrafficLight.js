import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const trafficStates = {
    red: {
      duration: 4000,
      backgroundColor: "red",
      next: "green",
    },
    yellow: {
      duration: 1000,
      backgroundColor: "yellow",
      next: "red",
    },
    green: {
      duration: 3000,
      backgroundColor: "green",
      next: "yellow",
    },
  };

  const handleDropdown = () => {
    // const res = Object.keys(trafficStatesData).filter(
    //   (item) => trafficStatesData[item].backgroundColor === selectedColor
    // );
    // const res1 = Object.keys(trafficStatesData).map((item) => ({
    //   ...(trafficStatesData[item].backgroundColor = selectedColor),
    // }));
    // console.log(trafficStatesData[res], res1);
  };

  const [currentColor, setColor] = useState("red");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [trafficStatesData, setData] = useState(trafficStates);

  useEffect(() => {
    const { duration, next } = trafficStatesData[currentColor];
    const timer = setTimeout(() => {
      setColor(next);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [currentColor]);

  return (
    <>
      <p>TrafficLight</p>
      <div>
        Choose Light color:
        <select
          className="dropdown"
          // onChange={(e) => setSelectedColor(e.target.value)}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="red">Red </option>
          <option value="yellow">Yellow </option>
          <option value="green">Green </option>
        </select>
        Choose Time Limit:
        <input
          className="input_box"
          type="text"
          onChange={(e) => selectedDuration(e.target.value)}
        />
        <button className="btn" onClick={handleDropdown}>
          Submit{" "}
        </button>
      </div>
      <div className="traffic_wrapper">
        {Object.keys(trafficStates).map((color, index) => (
          <div
            key={index}
            className="traffic_light"
            style={{
              backgroundColor:
                color === currentColor && trafficStates[color].backgroundColor,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default TrafficLight;
