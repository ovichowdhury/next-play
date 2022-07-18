import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

export default function AiCamera({
  modelUrl = "https://ovichowdhury.github.io/face-api-models/",
}) {
  const stream = useRef(0);

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
          const dims = faceapi.matchDimensions(canvas, videoEl, true);

          // const dims = { width: 500, height: 400 };
          // canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

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
          ></video>
          <canvas
            id="overlay"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
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
        <img src="" alt="Preview Image"></img>
      </div>
    </div>
  );
}
