import "../../sass/app.scss";
import { Link } from "react-router-dom";

export default function LogoAlt() {
  return (
    <Link to='/'>
      <h1 className='logo logo-alt'>Anton Sjöstrand</h1>
    </Link>
  );
}
