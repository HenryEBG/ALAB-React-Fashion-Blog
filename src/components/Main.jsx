import Article from "./Article.jsx"
import articles from "../data/articles.js"


function Main(){
  return (
   <main> 
    {articles.map((article,index)=>{
      return (
        <Article key={index} data={article}/>
      )
    })}
    
   </main>
  )
}

export default Main