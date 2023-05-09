
import ArticleList from '../components/ArticleList'
const ArticleListPage = ({articles}) => {
  return (
    <>

    <h1 className='text-5xl p-5 mb-5'>Newly Added Articles</h1>
   <ArticleList articles={articles}/>
    
    </>
  )
}

export default ArticleListPage