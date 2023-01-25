import Camera from "@components/camera/Camera";
import React from "react";

export default function Custom() {
  const onCameraConfirm = (d) => {
    const url = `http://10.11.200.109:5000/faceapi/detect/liveliness`;
    const payload = {
      faceImage: d,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(ex => console.log(ex.toString()))
  };

  return (
    <div className="m-4">
      <Camera onConfirm={onCameraConfirm} />
    </div>
  );
}
