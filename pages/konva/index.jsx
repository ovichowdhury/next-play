import React from "react";
import { useEffect } from "react";
import Konva from "konva";

export default function Index() {

  const drawCircle = (w, h) => {
    let circle = new Konva.Circle({
      x: w / 2,
      y: h / 2,
      radius: 90,
      fill: "gray",
      stroke: "lightgray",
      strokeWidth: 4,
    });
    return circle;
  }

  const drawShape = (w, h) => {
    let shape = new Konva.Shape({
      fill: '#00D2FF',
      stroke: 'black',
      strokeWidth: 4,
      sceneFunc: function (context) {
        context.beginPath();
        
        context.moveTo(60, 60);
        context.lineTo(200, 200);

        context.quadraticCurveTo(150, 100, 260, 170);

        context.closePath();
        // special Konva.js method
        context.fillStrokeShape(this);
      }
    })
    return shape
  }

  useEffect(() => {
    // first we need to create a stage
    let stage = new Konva.Stage({
      container: "container", // id of container <div>
      width: 500,
      height: 500,
    });

    // then create layer
    let layer = new Konva.Layer();

    // add the shape to the layer
    layer.add(drawShape(stage.width(), stage.height()));
    layer.add(drawCircle(stage.width(), stage.height()))

    // add the layer to the stage
    stage.add(layer);

    // draw the image
    layer.draw();
  }, []);
  return (
    <div>
      <h1>Welcome to Konva</h1>
      <div id="container"></div>
    </div>
  );
}
