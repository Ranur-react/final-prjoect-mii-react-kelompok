import { Link } from "react-router-dom";
import PortoMember from "./PortoMember";

export function PortoNav() {
  return (
    <nav>
      <ul>
        {PortoMember.map((member) => (
          <li key={porto.id}>
            <Link to={porto.id}>Team - {porto.name} </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
