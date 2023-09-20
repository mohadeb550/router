
import { NavLink } from "react-router-dom"


export default function Header() {
  return (
    <>
    
    <header className="shadow-lg flex items-center justify-around p-6">
        <h2 className="text-2xl font-bold italic"> Amazon </h2>
    <nav className="space-x-6">
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/Products'> Products </NavLink>
        <NavLink to='/Dashboard'> Dashboard </NavLink>
    </nav>
    </header>
    </>
  )
}
