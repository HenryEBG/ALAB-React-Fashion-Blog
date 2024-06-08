import Nav from "./Nav.jsx"

function Footer({nav}){
  return (
   <footer>
    <Nav navElements={nav} />
    <p>&copy; 2013 Valet Industries, Inc</p>
   </footer>
  )
}

export default Footer