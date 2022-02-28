import "../Navigation/Navigation.scss";
import "./Projects.scss";
import LogoAlt from "../Navigation/LogoAlt";

export default function ProjectNav({ nav }) {
  return (
    <nav className='navigation'>
      <ul className='navbar'>
        <li>
          <LogoAlt />
        </li>
      </ul>
      <div>
        {nav}
      </div>
    </nav>
  );
}
