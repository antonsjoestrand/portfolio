import "../../sass/app.scss";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to='/'>
      <h1 className='logo'>Anton Sjöstrand</h1>
    </Link>
  );
}