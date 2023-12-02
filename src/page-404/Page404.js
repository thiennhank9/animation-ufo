import { motion } from "framer-motion";
import "./Page404.css";
import { useState } from "react";

export default function Page404() {
  const [ufo, setUfo] = useState("initial");

  return (
    <div className="page404">
      <div className="container">
        <h1 className="title">Sorry, page not found</h1>
        <div className="box404">
          <p className="char4">4</p>
          <img
            alt="char-0"
            src={require("./assets/0.png")}
            width={180}
            height={230}
          />
          <p className="char4">4</p>
        </div>
        <motion.img
          className="zero-ground-right"
          alt="0-ground-right"
          src={require("./assets/0-ground-right.png")}
          width={212}
          height={212}
          animate={
            ["initial", "left"].includes(ufo)
              ? {
                  opacity: [0, 1],
                }
              : {
                  opacity: [1, 0],
                }
          }
          transition={{
            duration: 0.3,
            times: [0, 1],
            ease: "linear",
          }}
        />
        <div className="ground">
          <img alt="ground" src={require("./assets/ground.png")} width={1440} />
        </div>
        {ufo !== "initial" && (
          <motion.img
            className="zero-top-left"
            alt="0-top-left"
            src={require("./assets/0-top-left.png")}
            width={120}
            height={120}
            animate={
              ufo === "right"
                ? {
                    opacity: [0, 1],
                  }
                : {
                    opacity: [1, 0],
                  }
            }
            transition={{
              duration: 0.3,
              times: [0, 1],
              ease: "linear",
            }}
          />
        )}
        <img
          alt="moon-left"
          src={require("./assets/moon-left.png")}
          width={200}
          height={200}
          className="moon-left"
        />
        <img
          alt="moon-right"
          src={require("./assets/moon-right.png")}
          width={100}
          height={100}
          className="moon-right"
        />

        <motion.img
          alt="ufo-left"
          onHoverStart={() => setUfo("right")}
          className="ufo-left"
          src={require("./assets/ufo-left.png")}
          width={490}
          height={780}
          animate={
            ["left", "initial"].includes(ufo)
              ? {
                  x: [-500, 0],
                  y: [700, 0],
                  rotate: [-70, -30],
                }
              : {
                  x: [0, -500],
                  y: [0, 700],
                  rotate: [-30, -70],
                }
          }
          transition={{
            duration: 0.5,
            times: [0, 1],
            ease: "easeInOut",
            repeat: 0,
          }}
        />

        {ufo !== "initial" && (
          <motion.img
            alt="ufo-right"
            className="ufo-right"
            onHoverStart={() => setUfo("left")}
            src={require("./assets/ufo-right.png")}
            width={490}
            height={780}
            animate={
              ufo === "right"
                ? {
                    x: [500, 0],
                    y: [700, 0],
                    rotate: [70, 30],
                  }
                : {
                    x: [0, 500],
                    y: [0, 700],
                    rotate: [30, 70],
                  }
            }
            transition={{
              duration: 0.5,
              times: [0, 1],
              ease: "easeInOut",
            }}
          />
        )}
      </div>
    </div>
  );
}
