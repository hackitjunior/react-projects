import React, { createContext } from "react";
import { render } from "react-dom";

import { ColorProvider } from "./color-hooks.js";
import App from "./App";

export const ColorContext = createContext();


render(<ColorProvider><App></App></ColorProvider>, document.getElementById("root"));