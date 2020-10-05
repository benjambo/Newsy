import React, { useState, useEffect } from 'react'
import {
  Container,
  Header,
  Button,
  Form,
  Grid,
  Image,
  List,
} from 'semantic-ui-react'
//import { NEWS_API_KEY } from '../config'
import articleList from '../articleList.json'
//import axios from 'axios'
import { FadeInSection } from './FadeInSection'

export const NewsIdle = () => {
  const [articles, setArticles] = useState([])
  const [apiError, setapiError] = useState('')
  const [searchNews, setSearchNews] = useState('')
  const [totalResults, setTotalResults] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(
      articleList
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
    <FadeInSection>
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
    </FadeInSection>
  )
}

export default NewsIdle
