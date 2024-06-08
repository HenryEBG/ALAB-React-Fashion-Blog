
function Nav({navElements}){
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul>      
      {navElements.map((element,index) => {
       return <li key={index}><a>{element}</a></li>
      })}
      </ul>
    </nav>
  )
}

export default Nav
