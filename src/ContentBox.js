import React from "react";

const ContentBox = ({ data, expandData }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div onClick={() => expandData(item.id)}>{item.heading}</div>
          {item.showContent ? <p>{item.content}</p> : ""}
        </div>
      ))}
    </div>
  );
};

export default ContentBox;
