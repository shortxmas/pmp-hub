import * as React from "react";
import ExampleComponent from "../components/ExampleComponent";
import { createRoot } from "react-dom/client";

const Index = () => {
  return (
    <>
      <div className="container text-left">
        This is the index page.
        <ExampleComponent />
        <figure>
          <img className="img-fluid w-50" src="./assets/img.jpg"></img>
          <figcaption>This is an example asset</figcaption>
        </figure>
      </div>
    </>
  );
};

export default Index;
const root = document.getElementById("root");
createRoot(root).render(<Index />);