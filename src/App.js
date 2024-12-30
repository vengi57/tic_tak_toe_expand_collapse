import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import ContentBox from "./ContentBox";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import TrafficLight from "./TrafficLight";

const App = () => {
  const sampleData = [
    {
      id: 1,
      heading: "Heading 1",
      content:
        "React is a JavaScript library that allows developers to build interactive user interfaces (UIs) for web and native platforms",
      showContent: false,
    },
    {
      id: 2,
      heading: "Heading 2",
      content:
        "React is a JavaScript library that allows developers to build interactive user interfaces (UIs) for web and native platforms",
      showContent: false,
    },
    {
      id: 3,
      heading: "Heading 3",
      content:
        "React is a JavaScript library that allows developers to build interactive user interfaces (UIs) for web and native platforms",
      showContent: false,
    },
  ];

  const dropdownData = [
    { label: "Menu 1" },
    {
      label: "Menu 2",
      submenu: [
        {
          label: "Sub Menu 1",
          submenu: [
            { label: "Sub sub sub Menu 1" },
            { label: "Sub sub sub Menu 2" },
          ],
        },
        { label: "Sub Menu 2" },
      ],
    },
    {
      label: "Menu 3",
      submenu: [
        { label: "Sub Menu 1", submenu: [{ label: "Sub sub sub Menu 1" }] },
        {
          label: "Sub Menu 2",
          submenu: [
            {
              label: "Sub sub Menu 1",
              submenu: [
                { label: "Sub sub sub Menu 1" },
                { label: "Sub sub sub Menu 2" },
              ],
            },
            { label: "Sub sub Menu 2" },
          ],
        },
      ],
    },
    {
      label: "Menu 4",
      submenu: [
        {
          label: "Sub Menu 1",
          submenu: [{ label: "Sub sub Menu 1" }, { label: "Sub sub Menu 2" }],
        },
        { label: "Sub Menu 2" },
      ],
    },
  ];
  const [data, setData] = useState(sampleData);

  function expandData(id) {
    console.log("hello", id);

    setData(
      // data.map((item) => {
      //   return item.id === id
      //     ? { ...item, showContent: !item.showContent }
      //     : item;
      // })

      data.map((item) =>
        item.id === id ? { ...item, showContent: !item.showContent } : item
      )
    );
  }

  return (
    <div>
      <ContentBox data={data} expandData={expandData} />
      <Dropdown dropdownData={dropdownData} />
      <SearchBar />
      <TrafficLight />
    </div>
  );
};

export default App;
