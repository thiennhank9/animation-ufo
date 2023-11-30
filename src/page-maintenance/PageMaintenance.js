import { motion } from "framer-motion";
import "./PageMaintenance.css";

const duration = 7.5;

export default function PageMaintenance() {
  return (
    <div className="pageMaintenance">
      <img
        alt="moon-right"
        src={require("./assets/moon-right.png")}
        width={250}
        height={301}
        className="moon-right"
      />
      <img
        alt="moon-left"
        src={require("./assets/moon-left.png")}
        width={131}
        height={131}
        className="moon-left"
      />

      <h1 className="title">We are under...</h1>
      <h2 className="status">Maintenance</h2>
      <img
        alt="ground"
        src={require("./assets/ground.png")}
        width={1439}
        height={460}
        className="ground"
      />

      <div className="hoistingAndUfo">
        <img
          alt="hoisting-machine"
          src={require("./assets/hoisting-machine.png")}
          width={887}
          height={732}
          className="hoisting-machine"
        />
        <div className="container">
          <motion.div
            className="wireAndUfo"
            animate={{
              rotate: [0, 15, -15, 15, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              delay: 0,
              repeatDelay: 0,
              duration,
              times: [
                0,
                0.5 / duration,
                1 / duration,
                1.5 / duration,
                2 / duration,
                2.5 / duration,
              ],
            }}
          >
            <motion.img
              src={require("./assets/wire.png")}
              width={191}
              height={177}
              className="wire"
              animate={{
                height: [177, 177, 387, 387, 177],
              }}
              transition={{
                repeat: Infinity,
                delay: 0,
                repeatDelay: 0,
                duration,
                times: [
                  0,
                  3 / duration,
                  3.5 / duration,
                  5.5 / duration,
                  6 / duration,
                ],
              }}
            />

            <motion.img
              className="ufo"
              src={require("./assets/ufo.png")}
              width={277}
              height={145}
              animate={{
                y: [0, 0, 190, 190, 190, 0, 0, 0, 0],
                opacity: [1, 1, 1, 1, 0, 0, 0, 0, 1],
              }}
              transition={{
                repeat: Infinity,
                delay: 0,
                repeatDelay: 0,
                duration,
                times: [
                  0,
                  3 / duration,
                  3.5 / duration,
                  5.4 / duration,
                  5.5 / duration,
                  6 / duration,
                  6.5 / duration,
                  7.4 / duration,
                  7.5 / duration,
                ],
              }}
            />

            <motion.img
              className="ufo-light"
              src={require("./assets/ufo-light.png")}
              width={277}
              height={145}
              animate={{
                y: [0, 0, 0, 0, 0, -190, -190, -190, -190],
                opacity: [0, 0, 0, 0, 1, 1, 1, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                delay: 0,
                repeatDelay: 0,
                duration,
                times: [
                  0,
                  3 / duration,
                  3.5 / duration,
                  5.4 / duration,
                  5.5 / duration,
                  6 / duration,
                  6.5 / duration,
                  7.4 / duration,
                  7.5 / duration,
                ],
              }}
            />
          </motion.div>

          <img
            alt="bottle"
            src={require("./assets/bottle.png")}
            width={290}
            height={218}
            className="bottle"
          />

          <img
            alt="bottle"
            src={require("./assets/bottle.png")}
            width={290}
            height={170}
            className="bottle-half"
          />

          <img
            width={256}
            height={58}
            src={require("./assets/label.png")}
            alt="label"
            className="label"
          />
        </div>
      </div>
    </div>
  );
}
