import { createRoot } from "react-dom/client";

import AlbumsList from "./components/AlbumsList";

const App = ()=>{
    return  <AlbumsList></AlbumsList>
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
