import React, { useEffect } from "react";
import "./preload-page.sass";

export default function PreloadPage() {
  useEffect(() => {
    setTimeout(() => {
      typeLine();
    }, 100);
  });

  const text = [
    "Here you can find out\n",
    "all information you \n",
    "need about me and, \n",
    "if necessary, download a CV"
  ];

  let line = 0;
  let count = 0;
  let result = "";
  function typeLine() {
    const interval = setTimeout(
      () => {
        result += text[line][count];
        document.querySelector("pre").innerHTML = result +"|";

        count++;
        if (count >= text[line].length) {
          count = 0;
          line ++;
          if (line === text.length) {
            clearTimeout(interval);
            document.querySelector("pre").innerHTML = result;
            return true;
          }
        }
        typeLine();
      }, getRandomInt(getRandomInt(180*2.5)));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <>
      <div className="typewriter">
        <pre></pre>
      </div>
    </>
  );
}
