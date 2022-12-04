/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";

export default function Camera({ onConfirm }) {
  const stream = useRef(0);
  const [img, setImg] = useState("/img/avatar.png");

  useEffect(() => {
    async function run() {
      stream.current = await navigator.mediaDevices.getUserMedia({ video: {} });
      const videoEl = document.getElementById("inputVideo");
      videoEl.srcObject = stream.current;
    }
    run();

    return () => {
      console.log("[INFO] Releasing Camera.");
      stream.current.getTracks().forEach(function (track) {
        track.stop();
      });
    };
  }, []);

  const onImageCapture = (e) => {
    const video = document.getElementById("inputVideo");
    const canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 240;
    canvas.getContext("2d").drawImage(video, 0, 0, 320, 240);
    const imageRaw = canvas.toDataURL("image/jpeg");
    setImg(imageRaw);
  };

  const onImageConfirm = (e) => {
    try {
      const base64Image = img.split(",")[1];
      if (typeof onConfirm === "function") onConfirm(base64Image);
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <div className="border-2 border-indigo-400 bg-slate-200 p-4 rounded-lg flex flex-col sm:flex-row justify-center items-center gap-4">
      {/* Left Panel of the design */}
      <div className="flex flex-col flex-1 justify-center items-center gap-4">
        <p className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-600">Click to Capture an Image</p>
        <video
          className="rounded-lg"
          autoPlay
          width="320"
          height="240"
          id="inputVideo"
        ></video>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-900 text-white font-bold py-2 px-4 rounded"
          onClick={onImageCapture}
        >
          Capture
        </button>
      </div>
      {/* Right Panel of the design */}
      <div className="flex flex-col flex-1 justify-center items-center gap-4">
        <p className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-500 to-rose-600">Image Captured</p>
        <img
          className="rounded-lg w-[320px] h-[240px]"
          width="320"
          height="240"
          id="imgCap"
          alt="Captured Image"
          src={img}
        />
        <button
          className="bg-purple-500 hover:bg-purple-700 active:bg-purple-900 text-white font-bold py-2 px-4 rounded"
          onClick={onImageConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
