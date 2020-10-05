import React from 'react'
import { getArticles, getPreArticles } from '../api/api'
import ArticleList from './ArticleList'
import SearchBar from './SearchBar'
import { Container, Header } from 'semantic-ui-react'

class News extends React.Component {
  state = {
    articles: [],
    preArticles: [],
    searchTopic: '',
    totalResults: '',
    loading: false,
    apiError: '',
  }

  searchForTopic = async (topic) => {
    try {
      this.setState({ loading: true })
      const response = await getArticles(topic)
      this.setState({
        articles: response.articles,
        searchTopic: topic,
        totalResults: response.totalResults,
      })
    } catch (error) {
      this.setState({ apiError: 'Could not find any articles' })
    }
    this.setState({ loading: false })
  }

  async componentDidMount() {
    try {
      const response = await getPreArticles()
      this.setState({ articles: response.articles })
    } catch (error) {
      this.setState({ apiError: 'Could not find any articles' })
    }
  }

  render() {
    const {
      preArticles,
      articles,
      apiError,
      loading,
      searchTopic,
      totalResults,
    } = this.state
    return (
      <Container>
        <Header as="h2" style={{ textAlign: 'center', margin: 20 }}>
          Search for a news topic
        </Header>
        <SearchBar searchForTopic={this.searchForTopic} />

        {loading && (
          <p style={{ textAlign: 'center' }}>Searching for articles...</p>
        )}
        {articles.length > 0 && searchTopic.length !== 0 ? (
          <Header as="h4" style={{ textAlign: 'center', margin: 20 }}>
            Found {totalResults} articles on "{searchTopic}"
          </Header>
        ) : (
          <Header as="h4" style={{ textAlign: 'center', margin: 20 }}>
            Trending articles right now
          </Header>
        )}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
        {preArticles.length > 0 && <ArticleList articles={preArticles} />}
      </Container>
    )
  }
}

export default News
