import React from 'react'
import { getArticles, getPreArticles } from '../api/api'
import ArticleList from './ArticleList'
import SearchBar from './SearchBar'
import { FadeInSection } from './FadeInSection'
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
      <FadeInSection>
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
          <p style={{ textAlign: 'center' }}>
            Powered by{' '}
            <a
              href="https://newsapi.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NewsAPI.org
            </a>
          </p>
        </Container>
      </FadeInSection>
    )
  }
}

export default News

/*import React, { useState, useEffect } from 'react'
//import ArticleList from '../components/ArticleList'
//import SearchBar from '../components/SearchBar'
import { Container, Header, Button, Form, Grid, Image, List } from 'semantic-ui-react'
import { NEWS_API_KEY } from '../config'

export const News = () => {
  const [articles, setArticles] = useState([])
  const [apiError, setapiError] = useState('')
  const [searchNews, setSearchNews] = useState('')
  const [totalResults, setTotalResults] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setArticles(res.articles))
      .then((res) => setTotalResults(res.totalResults))
      .then(() => setLoading(true))
      .catch((err) => {
        setapiError(err)
        console.log(err)
      })
  }, [])

  const SearchItem = ({ allNews }) => {
    const mapNews = () =>
      allNews
        .filter((articleName) =>
          articleName.title.toLowerCase().includes(searchNews.toLowerCase())
        )
        .map((article) => (
          <List.Item style={{ padding: 30 }}>
            <Grid>
              <Grid.Column
                width={11}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <Header as="h3">{article.title}</Header>
                <List.Description style={{ margin: '20px 0' }}>
                  {article.description}
                </List.Description>
                <List bulleted horizontal>
                  <List.Item>
                    <a href={article.url}>{article.source.name}</a>
                  </List.Item>
                  <List.Item>{article.publishedAt.split('T')[0]}</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <Image src={article.urlToImage} />
              </Grid.Column>
            </Grid>
          </List.Item>
        ))
  return <div>{mapNews()}</div>
  }

  const searchHandler = (event) => {
    setSearchNews(event.target.value)
  }

  return (
    <div className="pages">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Form>
            <Form.Group>
              <Form.Input
                placeholder="Search topic"
                name="topic"
                value={searchNews}
                onChange={searchHandler}
                onKeyPress={searchHandler}
              />
              <Button type="submit" color="green">
                Search
              </Button>
            </Form.Group>
          </Form>
        </div>
        <Header as="h2" style={{ textAlign: 'center', margin: 20 }}>
          News articles
        </Header>
        {articles.length > 0 && (
          <Header as="h4" style={{ textAlign: 'center', margin: 20 }}>
            Found {totalResults} articles on "{searchNews}"
          </Header>
        )}
        <SearchItem allNews={articles} />
      </Container>
    </div>
  )
}

export default News*/
