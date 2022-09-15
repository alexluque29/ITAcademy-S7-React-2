
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="app">App</Link>
        </div>
    </>
  )
}