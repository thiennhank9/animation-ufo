import { Link } from "react-router-dom";

const routes = [
  {
    path: "/404",
  },
  {
    path: "/maintenance",
  },
];

export default function PageIndex() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            {routes.map(({ path }) => (
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
