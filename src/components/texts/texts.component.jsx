import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

export const TypingCodeAnimation = ({ text, language }) => {
  const [displayText, setDisplayText] = useState("");
  const typingRef = useRef(null);
  const animationSpeed = 20;

  useEffect(() => {
    let currentIndex = 0;
    const contentLength = text.length;

    const animateContent = () => {
      setDisplayText(text.slice(0, currentIndex));
      typingRef.current.style.width = `${typingRef.current.scrollWidth}px`;
      currentIndex++;

      if (currentIndex <= contentLength) {
        setTimeout(animateContent, animationSpeed);
      }
    };

    if (currentIndex === 0) {
      animateContent();
    }
  }, [text]);

  const highlightedCode = Prism.highlight(
    displayText,
    Prism.languages[language],
    language
  );

  return (
    <div
      ref={typingRef}
      style={{
        width: "100%",
        display: "inline-block",
        overflow: "hidden",
        lineHeight: "1.6",
      }}
    >
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </div>
  );
};
