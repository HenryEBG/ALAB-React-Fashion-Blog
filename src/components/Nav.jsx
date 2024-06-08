
function Nav({navElements}){
  return (
    <nav>
      <ul>      
      {navElements.map((element,index) => {
       return <li key={index}><a>{element}</a></li>
      })}
      </ul>
    </nav>
  )
}

export default Nav
