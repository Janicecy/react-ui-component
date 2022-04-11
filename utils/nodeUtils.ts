import React from "react";
import toArray from "./Children/toArray";

export function parseChildren(children: React.ReactNode): React.ReactElement[] {
  return toArray(children).map((child, index) => {
    return React.cloneElement(child, )
  })
}