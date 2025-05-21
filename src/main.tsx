import { createRoot } from "react-dom/client";
import "./index.css";
import RouteProvider from "./providers/router.provider";
createRoot(document.getElementById("root")!).render(<RouteProvider />);
