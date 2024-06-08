import Nav from "./Nav"
function Header({title,subtitle,nav}){

  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Nav navElements={nav} />
     
    </header>
  )
}

export default Header