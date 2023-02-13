import { ArticleCard } from '../ArticleCard/ArticleCard'
import { Container } from './styles'
import { useSearch } from '../../context/SearchContext'
import { Oval } from 'react-loader-spinner'

export function ArticlesArea() {
  const { articlesList, isLoading } = useSearch()

  return (
    <Container>
      {!isLoading ? (
        articlesList.map((article) => {
          return (
            <ArticleCard
              date={article.created_at}
              number={article.number}
              summary="teste"
              title={article.title}
              key={article.id}
            />
          )
        })
      ) : (
        <Oval
          height={80}
          width={80}
          color="#3294F8"
          wrapperClass="loader"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#3294F8"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
    </Container>
  )
}
