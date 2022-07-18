import AiCamera from "@components/camera/AiCamera";
import React, { useState } from "react";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Render Toggle
      </button>
      <br />
      <br />
      {isOpen && <AiCamera />}
    </div>
  );
}
