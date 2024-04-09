import "./style.css";
import { makeShadeupInstance } from "./main";

const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;

const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

resize();

window.onresize = resize;

(async () => {
  const engine = await makeShadeupInstance(canvas, {
    ui: true,
  });

  // The frame loop will start automatically

  // You can call pub functions on the engine instance
  // engine.example.main.exampleFunction();
})();
