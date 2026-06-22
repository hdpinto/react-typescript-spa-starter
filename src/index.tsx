import { App } from "app";
import { createRoot } from "react-dom/client";

import "style/index.css";

const container = document.getElementById("app-mount");
if (container) {
  const root = createRoot(container);

  root.render(<App />);
}

// no-op
