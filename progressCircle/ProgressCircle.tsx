import React, {
  FunctionComponent,
  useEffect,
  useRef,
  ReactElement,
  useState,
} from "react";
import "./progressCircle.scss";

interface IProps {
  percent: number;
  strokeColor?: string;
  trailColor?: string;
  strikeWidth?: number;
}

const ProgressCircle: FunctionComponent<IProps> = ({
  percent,
  strokeColor = "#1890ff",
  trailColor = "#f5f5f5",
  strikeWidth = 10,
}): ReactElement => {
  const [_percent, set_percent] = useState<number>(percent);
  const leftCircle = useRef<HTMLDivElement>(null);
  const rightCircle = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (percent >= 0 && percent <= 100) {
      set_percent(percent);
      if (percent > 0 && percent <= 50) {
        setRotate(rightCircle.current, percent);
      } else if (percent > 50 && percent <= 100) {
        setRotate(leftCircle.current, percent - 50);
      }
    }
  }, [percent]);

  useEffect(() => {
    setSemiCircleBorder(leftCircle.current, strokeColor, trailColor);
    setSemiCircleBorder(rightCircle.current, trailColor, strokeColor);
  }, [strokeColor, trailColor]);

  const setSemiCircleBorder = (
    node: HTMLElement,
    strokeColor: string,
    trailColor: string
  ) => {
    const border = `${strikeWidth}px solid `;
    node.style["border-left"] = border + strokeColor;
    node.style["border-bottom"] = border + strokeColor;

    node.style["border-top"] = border + trailColor;
    node.style["border-right"] = border + trailColor;
  };

  const setRotate = (node: HTMLElement, percent: number) => {
    node.style.transform = `rotate(${-135 + (360 / 100) * percent}deg)`;
  };

  return (
    <div className="progress-circle-container">
      <span className="title">{_percent}%</span>
      <div className="left-wrapper wrapper">
        <div ref={leftCircle} className="semi-circle"></div>
      </div>
      <div className="right-wrapper wrapper">
        <div ref={rightCircle} className="semi-circle"></div>
      </div>
    </div>
  );
};

export default ProgressCircle;
