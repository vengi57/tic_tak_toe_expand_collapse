import React, { useEffect, useState } from "react";

const SearchBar = () => {
  let currentIndex;
  const userData = [
    {
      id: 1,
      name: "pbtrick ",
    },
    {
      id: 2,
      name: "Ervin Howell",
    },
    {
      id: 3,
      name: "peefme",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
    },
    {
      id: 5,
      name: "patrick boy",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
    },
    {
      id: 9,
      name: "Glenna Reichert",
    },
    {
      id: 10,
      name: "pzzzekfmekfm",
    },
    {
      id: 11,
      name: "zzzekpzfmekfm",
    },
    {
      id: 12,
      name: "pdjfkzmkifei",
    },
  ];

  const [data, setData] = useState(userData);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value !== "") {
      console.log(value);
      const res = data.filter((item, index) => {
        if (item.name.toLocaleLowerCase().startsWith(value)) {
          currentIndex = value.length;
          return item.name.toLowerCase().startsWith(value);
        } else {
          console.log(value.substring(0, currentIndex));
          return item.name
            .toLowerCase()
            .startsWith(value.substring(0, currentIndex));
        }
      });
      setData(res);
    } else {
      setData(userData);
    }
  }, [value, currentIndex]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      {data.map((item) => (
        <div key={item.id}>
          <li>{item.name}</li>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
