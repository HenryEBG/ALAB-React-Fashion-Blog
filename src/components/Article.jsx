function Article ({data}){
  return (
    <article>
      <p className="date">{data.date}</p>
       <p className="titleArticle">{data.title}</p>
      <img src={data.img} alt={data.alt} />
      <p className="content">{data.content}</p> 
      <p className="continues">Continues...</p>
    </article>
  )
}

export default Article