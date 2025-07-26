"use client";

import Background from "../components/background";
import Section from "../components/Section";


export default function Page() {

  // Render the Background component
  // This will create the 3D scene and render it in the background
  // deben estar en la misma linea porque sino no lo trae !!!
  return (
    <div>
      <div id="container">
        <Section />
        <Section />
        <Section />
      </div>
      <Background />

    </div>

  )
}