import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { Home } from "./pages/home/home";
import { ChatGpt4 } from "./pages/chat-gpt4/chat-gpt4";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gemini-ai" element={<ChatGpt4 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export const Contact = () => {
  return <h1>Contact</h1>;
};

export const NotFound = () => {
  return <h1>Not yet available</h1>;
};
