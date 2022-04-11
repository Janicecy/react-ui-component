import { useState, useEffect } from "react";
import ProgressCircle from "../progressCircle";
import Modal from "../modal";
import Carousel from "../carousel";

function App() {
  const images = [
    "https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg",
    "https://yt3.ggpht.com/zDy6s5_67FlxYBOynD6Dfzqi9sW0pUG4g5LCnSJvHjIFaLQsXnhLu06AefFAwLytjPh3mM2Z02s=s900-c-k-c0x00ffffff-no-rj",
    "https://marvel-b1-cdn.bc0a.com/f00000000052994/www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/pet-care/Skyword/images/the-gray-cat-with-green-eyes-lies-on-a-sofa-347812-ref.png",
  ];

  return (
    <div className="App" style={{ width: 300 }}>
      <Carousel>
        {images.map((url) => (
          <img src={url} width="100%" />
        ))}
      </Carousel>
    </div>
  );
}

export default App;
