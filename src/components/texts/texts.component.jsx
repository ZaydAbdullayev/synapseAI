// import React from "react{ useRef } from "react";

// export const animatedText = (text) => {
//     let currentIndex = 0;
//     const originalText = text;
//     const typingRef = useRef();

//   const animateText = () => {
//     typingRef.current.style.width = `${typingRef.current.scrollWidth}px`; // Genişlik güncellemesi
//     currentIndex++;

//     if (currentIndex <= originalText.length) {
//       requestAnimationFrame(animateText);
//     }
//   };

//   if (currentIndex === 0) {
//     animateText();
//   }

//   return originalText;
// };
