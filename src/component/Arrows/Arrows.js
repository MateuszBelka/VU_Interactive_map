import React from 'react';

import "./Arrows.css"
import arrows from "../../data/image/arrows.png";

var pageHeight = window.innerHeight;

function scrollDown() {
  window.scrollTo({top: pageHeight, behavior: 'smooth'});
}

export default function Arrows() {
  return (
    <div>
      <img
        className="arrows"
        src={arrows}
        alt="arrows"
        onClick={scrollDown}
      />
    </div>
  );
}
