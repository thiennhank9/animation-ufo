import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="page">
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
          animate={{
            opacity: [1, 1, 0, 0, 0],
          }}
          transition={{
            duration: 2.6,
            times: [0, 0.3, 0.5, 0.8, 1],
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />

        <div className="ground">
          <img alt="ground" src={require("./assets/ground.png")} width={1440} />
        </div>

        <motion.img
          className="zero-top-left"
          alt="0-top-left"
          src={require("./assets/0-top-left.png")}
          width={120}
          height={120}
          animate={{
            opacity: [0, 0, 1, 1, 0],
          }}
          transition={{
            duration: 2.6,
            times: [0, 0.3, 0.5, 0.8, 1],
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
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
          className="ufo-left"
          src={require("./assets/ufo-left.png")}
          width={490}
          height={780}
          animate={{
            x: [0, 0, -500, -500, 0],
            y: [0, 0, 500, 500, 0],
            rotate: [-30, -30, -70, -70, -30],
          }}
          transition={{
            duration: 2.6,
            times: [0, 0.3, 0.5, 0.8, 1],
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.img
          alt="ufo-right"
          className="ufo-right"
          src={require("./assets/ufo-right.png")}
          width={490}
          height={780}
          animate={{
            x: [500, 500, 0, 0, 500],
            y: [500, 500, 0, 0, 500],
            rotate: [70, 70, 30, 30, 70],
          }}
          transition={{
            duration: 2.6,
            times: [0, 0.3, 0.5, 0.8, 1],
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default App;
