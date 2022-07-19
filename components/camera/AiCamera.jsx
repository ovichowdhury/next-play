import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

export default function AiCamera({
  modelUrl = "https://ovichowdhury.github.io/face-api-models/",
  imgWidth = 320,
  imgHeight = 240,
  onImageCapture,
}) {
  const stream = useRef(0);
  const [img, setImg] = useState("");

  useEffect(() => {
    async function run() {
      stream.current = await navigator.mediaDevices.getUserMedia({ video: {} });
      const videoEl = document.getElementById("inputVideo");
      videoEl.srcObject = stream.current;

      await faceapi.loadTinyFaceDetectorModel(modelUrl);
    }
    run();

    return () => {
      console.log("[INFO] Releasing Camera.");
      stream.current.getTracks().forEach(function (track) {
        track.stop();
      });
    };
  }, [modelUrl]);

  const onPlay = async () => {
    const videoEl = document.getElementById("inputVideo");
    try {
      if (
        videoEl.paused ||
        videoEl.ended ||
        !faceapi.nets.tinyFaceDetector.params
      )
        return setTimeout(() => onPlay(), 100);
      // tiny_face_detector options
      else {
        let inputSize = 512;
        let scoreThreshold = 0.5;

        const options = new faceapi.TinyFaceDetectorOptions({
          inputSize,
          scoreThreshold,
        });

        const result = await faceapi.detectSingleFace(videoEl, options);

        if (result) {
          const canvas = document.getElementById("overlay");
          // const dims = faceapi.matchDimensions(canvas, videoEl, true);

          const dims = { width: imgWidth, height: imgHeight };
          canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

          faceapi.draw.drawDetections(
            canvas,
            faceapi.resizeResults(result, dims)
          );
        }

        setTimeout(() => onPlay(), 100);
      }
    } catch (ex) {
      console.log("[INFO] Detection stopped");
    }
  };

  const onCapture = () => {
    console.log("in");
    const video = document.getElementById("inputVideo");
    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, imgWidth, imgHeight);
    const imageRaw = canvas.toDataURL("image/png");
    const base64Image = imageRaw.split(",")[1];
    setImg(imageRaw);
    if (typeof onImageCapture === "function") onImageCapture(base64Image);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        margin: "20px",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid gray",
      }}
    >
      <div
        style={{
          padding: "20px",
        }}
      >
        <h3
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Please Capture Your Image Properly
        </h3>
        <div style={{ position: "relative" }}>
          <video
            onLoadedMetadata={onPlay}
            id="inputVideo"
            autoPlay
            muted
            playsInline
            width={imgWidth}
            height={imgHeight}
          ></video>
          <canvas
            id="overlay"
            style={{ position: "absolute", top: 0, left: 0 }}
            width={imgWidth}
            height={imgHeight}
          />
        </div>
        <button
          type="button"
          style={{
            padding: "15px 32px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "#ffff",
            marginTop: "15px",
            zIndex: 999,
          }}
          onClick={onCapture}
        >
          Capture
        </button>
      </div>
      <div style={{ padding: "20px" }}>
        <h3
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Captured Image
        </h3>
        <img src={img} alt="Preview Image" id="previewImage"></img>
      </div>
    </div>
  );
}
