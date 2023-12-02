import React from "react";
import { motion } from "framer-motion";
import "./Page500.css";

const duration = 1.5;

export default function Page500() {
  return (
    <div className="page500">
      <div className="container">
        <h1 className="server-error">Server Error</h1>
        <img
          alt="500"
          className="text-500"
          src={require("./assets/500.png")}
          width={561}
          height={378}
        />
        <p className="description">
          Oops, something went wrong.
          <br />
          <br />
          Try to refresh this page or feel free to contact
          <br />
          us if the problem persists.
        </p>
        <img
          alt="moon-top"
          className="moon-top"
          src={require("./assets/moon-top.png")}
          width={200}
          height={200}
        />
        <img
          className="ground"
          alt="ground"
          src={require("./assets/ground.png")}
          width={1440}
        />
        <div className="boxUfoAndFire">
          <img
            alt="smoke"
            src={require("./assets/smoke.png")}
            className="smoke"
            width={408}
            height={667}
          />
          <img
            alt="ufo"
            src={require("./assets/ufo.png")}
            className="ufo"
            width={470}
            height={432}
          />
          <img
            alt="rock-left"
            src={require("./assets/rock-left.png")}
            className="rock-left"
            width={183}
            height={168}
          />
          <motion.img
            alt="fire-1"
            src={require("./assets/fire-1.png")}
            className="fire-1"
            width={227}
            height={183}
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration,
              times: [0, 0.5, 1],
              repeat: Infinity,
            }}
          />
          <motion.img
            alt="fire-2"
            className="fire-2"
            src={require("./assets/fire-2.png")}
            width={247}
            height={171}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              times: [0, 0.5, 1],
              repeat: Infinity,
            }}
          />
          <img
            alt="rock"
            src={require("./assets/rock.png")}
            width={432}
            height={217}
            className="rock"
          />
        </div>
      </div>
    </div>
  );
}
