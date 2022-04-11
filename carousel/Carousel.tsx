import React, {
  useState,
  useEffect,
  ReactNode,
  FunctionComponent,
  ReactElement,
} from "react";
import "./Carousel.scss";
import toArray from "../utils/Children/toArray";

interface CarouselProps {
  autoplay?: boolean;

  duration?: number;
  children?: ReactNode;
}

const Carousel: FunctionComponent<CarouselProps> = ({
  autoplay = false,
  duration = 3000,
  children,
  ...props
}): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childList = toArray(children);
  const itemLength = childList.length;

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setIndex("next");
    }, duration);

    return () => clearInterval(timer);
  }, [autoplay, duration]);

  const setIndex = (direction) => {
    switch (direction) {
      case "next":
        setCurrentIndex((prevIdx) =>
          prevIdx + 1 === itemLength ? 0 : prevIdx + 1
        );
        break;
      case "prev":
        setCurrentIndex((prevIdx) =>
          prevIdx === 0 ? itemLength - 1 : prevIdx - 1
        );
        break;
      default:
        break;
    }
  };

  const dotOnClick = (idx) => {
    setCurrentIndex(idx);
  };

  return (
    <div className="carousel">
      <div className="inner">
        <div className="arrow left-arrow" onClick={() => setIndex("prev")}>
          &#10094;
        </div>
        <div className="arrow right-arrow" onClick={() => setIndex("next")}>
          &#10095;
        </div>
        {childList.map((item, idx) => (
          <div
            key={idx}
            className="carousel-item"
            style={{ display: idx === currentIndex ? "" : "none" }}
          >
            {item}
          </div>
        ))}
      </div>
      <ul className="dots">
        {[...Array(itemLength).keys()].map((idx) => (
          <li
            key={idx}
            onClick={() => dotOnClick(idx)}
            className={`dot ${idx === currentIndex && "active"}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
