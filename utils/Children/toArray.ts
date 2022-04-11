import React from "react";
import { isFragment } from "react-is";

// reference: https://github.com/react-component/util/blob/master/src/Children/toArray.ts
export default function toArray(
  children: React.ReactNode
): React.ReactElement[] {
  let result: React.ReactElement[] = [];

  // https://reactjs.org/docs/react-api.html#reactchildren
  React.Children.forEach(children, (child: any) => {
    if (child === undefined || child === null) return;

    if (Array.isArray(child)) {
      result = result.concat(toArray(child));
    } else if (isFragment(child) && child.props) {
      result = result.concat(toArray(child.props.children));
    } else {
      result.push(child);
    }
  });

  return result;
}
