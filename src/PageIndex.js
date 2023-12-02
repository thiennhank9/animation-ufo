import { Link } from "react-router-dom";
import route from "./route";

export default function PageIndex() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            {route.map(({ path }) => (
              <li key={path}>
                <Link to={path}>{path}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
