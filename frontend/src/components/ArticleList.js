import React from 'react'
import { Grid, Header, Image, List } from 'semantic-ui-react'
import { FadeInSection } from './FadeInSection'

const ArticleItem = (props) => {
  const { article } = props
  return (
    <FadeInSection>
      <List.Item style={{ padding: 30 }}>
        <Grid>
          <Grid.Column
            only="computer"
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
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.source.name}
                </a>
              </List.Item>
              <List.Item>{article.publishedAt.split('T')[0]}</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5} only="computer">
            <Image src={article.urlToImage} />
          </Grid.Column>
          <Grid.Column
            width={16}
            only="mobile tablet"
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
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.source.name}
                </a>
              </List.Item>
              <List.Item>{article.publishedAt.split('T')[0]}</List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </List.Item>
    </FadeInSection>
  )
}

const ArticleList = (props) => {
  return (
    <div>
      <List divided style={{ maxWidth: 900, margin: '0 auto' }}>
        {props.articles.map((article, index) => (
          <ArticleItem article={article} key={article.title + index} />
        ))}
      </List>
      <FadeInSection>
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
      </FadeInSection>
    </div>
  )
}

export default ArticleList
