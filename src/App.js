import React, {useEffect, useState} from 'react';
import Day from "./components/Day";
import axios from "axios";

function App() {

  const [cats, setCats] = useState([]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  useEffect(() => {
    axios.get("https://cataas.com/api/cats").then((response) => {
      const allShuffledCats = shuffle(response.data);
      const thirtyOneCats = allShuffledCats.slice(0, 31);
      setCats(thirtyOneCats);
    });
  }, []);

  let dayElements = cats.map((cat, index) => <Day cat={cat} day={index + 1} key={cat.id} />);

  return (
    <div className="calendar">
      <div className="nya">Nyadvent Calender</div>
      <div className="day"></div>
      <div className="day"></div>
      <div className="day"></div>
      {dayElements}
      <div className="day"></div>
      <a href="https://www.freepik.com/vectors/christmas">Christmas vector created by freepik - www.freepik.com</a>
    </div>
  );
}

export default App;
