import React, { useState } from 'react'
import {
  Container,
  Header,
  Button,
  Form,
  Grid,
  Image,
  List,
} from 'semantic-ui-react'
//import articleList from '../articleList.json'
import { FadeInSection } from './FadeInSection'

import * as auth from './auth'

export const NewsIdle = () => {
  const [articles] = useState([{
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Anthony Ha",
      "title": "Cooler Screens raises $80M to bring interactive screens into cooler aisles",
      "description": "Cooler Screens, which replaces the glass doors in store cooler aisles with interactive digital displays, is announcing that it has raised more than $80 million in Series C funding. The startup has now raised more than $100 million in funding. The latest round…",
      "url": "http://techcrunch.com/2020/10/05/cooler-screens-series-c/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/pasted-image-0.jpg?w=613",
      "publishedAt": "2020-10-05T10:00:55Z",
      "content": "Cooler Screens, which replaces the glass doors in store cooler aisles with interactive digital displays, is announcing that it has raised more than $80 million in Series C funding. The startup has n… [+2648 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Mike Butcher",
      "title": "Crowdcube and Seedrs agree to merge, creating a significant private equity marketplace",
      "description": "The two main crowd-equity fundraising platforms in the UK, Crowdcube and Seedrs, have agreed terms on a long-rumoured merger, thus creating one of the world’s largest private equity marketplaces. The merger is being structured as an acquisition by Crowdcube o…",
      "url": "http://techcrunch.com/2020/10/05/crowdcube-and-seedrs-agree-to-merge-creating-a-significant-private-equity-marketplace/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/seedrs-crowdcube-merge.jpg?w=730",
      "publishedAt": "2020-10-05T09:49:35Z",
      "content": "The two main crowd-equity fundraising platforms in the UK, Crowdcube and Seedrs, have agreed terms on a long-rumoured merger, thus creating one of the worlds largest private equity marketplaces. The… [+2986 chars]"
    },
    {
      "source": {
        "id": "the-next-web",
        "name": "The Next Web"
      },
      "author": "Ali Ghodsi",
      "title": "The 3 keys to leading through a crisis: Preparation, data, and creativity",
      "description": "This year has challenged leaders of every industry to navigate a new landscape with their customers, employees, partners, and broader communities. As we enter yet another month of remote work, I’ve been reflecting on what’s worked for my team and how we can c…",
      "url": "https://thenextweb.com/growth-quarters/2020/10/05/the-3-keys-to-leading-through-a-crisis-preparation-data-and-creativity/",
      "urlToImage": "https://img-cdn.tnwcdn.com/image/growth-quarters?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F10%2Fkey-3-things-strategy-gq.png&signature=0305e2896b9527f950be865ff5534eb5",
      "publishedAt": "2020-10-05T08:52:01Z",
      "content": "This year has challenged leaders of every industry to navigate a new landscape with their customers, employees, partners, and broader communities. As we enter yet another month of remote work, Ive be… [+5217 chars]"
    },
    {
      "source": {
        "id": "the-next-web",
        "name": "The Next Web"
      },
      "author": "Clean Fleet Report",
      "title": "A closer look at Volkswagen’s all-electric SUV, the ID.4",
      "description": "This article was originally published by Steve Schaefer on Clean Fleet Report, a publication that gives its readers the information they need to move to cars and trucks with best fuel economy, including electric cars, fuel cells, plug-in hybrids, hybrids and …",
      "url": "https://thenextweb.com/shift/2020/10/05/a-closer-look-at-volkswagens-all-electric-suv-the-id-4-syndication/",
      "urlToImage": "https://img-cdn.tnwcdn.com/image/shift?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F10%2Fimage-6-1.png&signature=8558c7fe346f2ae0c3392dcac8d407b6",
      "publishedAt": "2020-10-05T07:52:35Z",
      "content": "This article was originally published by Steve Schaefer onClean Fleet Report, a publication that gives its readers the information they need to move to cars and trucks with best fuel economy, includi… [+8339 chars]"
    },
    {
      "source": {
        "id": "the-next-web",
        "name": "The Next Web"
      },
      "author": "Ivan Mehta",
      "title": "Google delays its 30% fee for Android developers in India amid Play Store row",
      "description": "Days after announcing 30% fees for in-app purchases on Google Play from September 2021, Google has given an exception to Indian developers. The company has delayed the charges for the country’s app makers until March 2022. The search giant said that after lis…",
      "url": "https://thenextweb.com/apps/2020/10/05/google-delays-its-30-fee-for-android-developers-in-india-amid-play-store-row/",
      "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2015%2F12%2FSundar-Pichai-Google-for-India.jpg&signature=3a8909815bb77f9b7fb8296df3f5afc5",
      "publishedAt": "2020-10-05T06:33:08Z",
      "content": "Days after announcing 30% fees for in-app purchases on Google Play from September 2021, Google has given an exception to Indian developers. The company has delayed the charges for the countrys app ma… [+3218 chars]"
    },
    {
      "source": {
        "id": "the-next-web",
        "name": "The Next Web"
      },
      "author": "Built In",
      "title": "5 easy ways you can push your sales team to do better",
      "description": "This article was originally published by Built In. If there is one department that is traditionally pushed to its very limits, it’s sales. No matter how well a company may be doing, you can always close more deals and get better numbers. One of the best ways …",
      "url": "https://thenextweb.com/growth-quarters/2020/10/05/5-easy-ways-you-can-push-your-sales-team-to-do-better-syndication/",
      "urlToImage": "https://img-cdn.tnwcdn.com/image/growth-quarters?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F10%2Fsales-team-gq.png&signature=2eae75ad41c5e1afedc3c9d68027cd02",
      "publishedAt": "2020-10-05T06:30:02Z",
      "content": "This article was originally published by Built In. If there is one department that is traditionally pushed to its very limits, its sales. No matter how well a company may be doing, you can always cl… [+9364 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Manish Singh",
      "title": "Google delays mandating Play Store's 30% cut in India to April 2022",
      "description": "Google is postponing the enforcement of its new Play Store billing policy in India to April 2022, days after more than 150 startups in the world’s second largest internet market forged an informal coalition to express concerns over the 30% charge the Android-…",
      "url": "http://techcrunch.com/2020/10/04/google-policy-cut-india-paytm-mini-app-store/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/GettyImages-501551872.jpg?w=600",
      "publishedAt": "2020-10-05T03:03:57Z",
      "content": "Google is postponing the enforcement of its new Play Store billing policy in India to April 2022, days after more than 150 startups in the worlds second largest internet market forged an informal coa… [+5075 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Ingrid Lunden",
      "title": "Ola fails to get ride-hailing license renewed in London, says it will appeal and continues to operate",
      "description": "Just six days after Uber won its appeal against London transportation regulators to continue operating in London for another 18 months, one of its bigger rivals has found itself in the hot seat. Ola, the India-based ride-hailing startup, is not getting its Tr…",
      "url": "http://techcrunch.com/2020/10/04/ola-fails-to-get-ride-hailing-license-renewed-in-london-says-it-will-appeal-and-continues-to-operate/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/06/GettyImages-1168245558.jpg?w=606",
      "publishedAt": "2020-10-04T22:39:02Z",
      "content": "Just six days after Uber won its appeal against London transportation regulators to continue operating in London for another 18 months, one of its bigger rivals has found itself in the hot seat. Ola,… [+3285 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Kirsten Korosec",
      "title": "Lime and Scoot veterans have built Ridepanda, a one-stop micromobility marketplace",
      "description": "Chinmay Malaviya and Charlie Depman found themselves at the center of the shared micromobility industry just as it took off, working for companies like Bird, Lime and Scoot. They experienced a rollercoaster ride of venture funding and skyrocketing demand, pro…",
      "url": "http://techcrunch.com/2020/10/04/lime-and-scoot-veterans-have-built-ridepanda-a-one-stop-micromobility-marketplace/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/ridepanda-Chinmay-Charlie.jpg?w=600",
      "publishedAt": "2020-10-04T21:56:42Z",
      "content": "Chinmay Malaviya and Charlie Depman found themselves at the center of the shared micromobility industry just as it took off, working for companies like Bird, Lime and Scoot. They experienced a roller… [+3583 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Kirsten Korosec",
      "title": "Einride raises $10 million to fast track its autonomous electric cargo pods",
      "description": "For the past four years, Swedish startup Einride has captured interest, investment and even a few customer contracts for its unusual-looking pods — electric and autonomous vehicles that are designed to carry freight. The company has made some progress with it…",
      "url": "http://techcrunch.com/2020/10/04/einride-raises-10-million-to-fast-track-its-autonomous-electric-cargo-pods/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/Einride_Pod_Front-Back_New-Logo.jpg?w=569",
      "publishedAt": "2020-10-04T19:42:11Z",
      "content": "For the past four years, Swedish startup Einride has captured interest, investment and even a few customer contracts for its unusual-looking pods electric and autonomous vehicles that are designed to… [+2017 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Anthony Ha",
      "title": "Original Content podcast: Netflix’s ‘Away’ deftly balances space exploration and human drama",
      "description": "“Away,” a new drama on Netflix, tells the story of the first manned expedition to Mars — Emma Green (played by Hilary Swank) leads an international team of astronauts on the three-year mission, while her husband Matt (Josh Charles) is part of the support team…",
      "url": "http://techcrunch.com/2020/10/04/original-content-netflix-away/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/Away_Season1_Episode7_00_48_40_13R.jpg?w=653",
      "publishedAt": "2020-10-04T17:01:06Z",
      "content": "“Away,” a new drama on Netflix, tells the story of the first manned expedition to Mars Emma Green (played by Hilary Swank) leads an international team of astronauts on the three-year mission, while h… [+1596 chars]"
    },
    {
      "source": {
        "id": "the-next-web",
        "name": "The Next Web"
      },
      "author": "The Markup",
      "title": "Can algorithms violate fair housing laws?",
      "description": "When Carmen Arroyo asked her apartment’s management company in 2016 if her son, Mikhail, could move in with her after a bad accident left him unable to care for himself, her request was denied. A tenant-screening background check had dredged up a minor (and c…",
      "url": "https://thenextweb.com/syndication/2020/10/04/can-algorithms-violate-fair-housing-laws/",
      "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F10%2Fimage-2.png&signature=7d20f0a1530c941244a3217123c7cb30",
      "publishedAt": "2020-10-04T17:00:52Z",
      "content": "When Carmen Arroyo asked her apartments management company in 2016 if her son, Mikhail, could move in with her after a bad accident left him unable to care for himself, her request was denied. A tena… [+6940 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Alex Wilhelm",
      "title": "Accel VCs Sonali De Rycker and Andrew Braccia say European deal pace is ‘incredibly active’",
      "description": "The other week TechCrunch’s Extra Crunch Live series sat down with Accel VCs Sonali De Rycker and Andrew Braccia to chat about the state of the global startup investing ecosystem. Given their firm’s broad geographic footprint, we wanted to know what was going…",
      "url": "http://techcrunch.com/2020/10/04/accel-vcs-sonali-de-rycker-and-andrew-braccia-say-european-deal-pace-is-incredibly-active/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/09/braccia-de-rycker-disrupt.jpg?w=714",
      "publishedAt": "2020-10-04T16:41:51Z",
      "content": "The other week TechCrunch’s Extra Crunch Live series sat down with Accel VCs Sonali De Rycker and Andrew Braccia to chat about the state of the global startup investing ecosystem. Given their firm’s … [+2779 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Alex Wilhelm",
      "title": "Digging into the next wave of tech IPOs",
      "description": "Welcome back to The TechCrunch Exchange, a weekly startups-and-markets newsletter for your weekend enjoyment. Let’s talk money, startups and spicy IPO rumors.",
      "url": "http://techcrunch.com/2020/10/04/digging-into-the-next-wave-of-tech-ipos-on-the-heels-of-asana-and-palantirs-direct-listings/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/06/NSussman_Techcrunch_Exchange-multicolor.jpg?w=533",
      "publishedAt": "2020-10-04T15:45:23Z",
      "content": "After taking five consecutive business days off from my work laptop and to shout at my personal laptop while losing games on Dominion online I am back. I missed you. And while The Exchanges regular c… [+5551 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Jonathan Shieber",
      "title": "Meet Cocoa Press, the Philly startup making a 3D printer for chocolate",
      "description": "Evan Weinstein, the founder of the Philadelphia-based startup, Cocoa Press, which makes a 3D printer for chocolate, doesn't have much of a sweet tooth. The chocolate printer takes advantage of the fact that there's something about food that people connect to,…",
      "url": "http://techcrunch.com/2020/10/04/meet-cocoa-press-the-philly-startup-making-a-3d-printer-for-chocolate/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/10/GettyImages-1186775582.jpg?w=711",
      "publishedAt": "2020-10-04T15:31:49Z",
      "content": "Evan Weinstein, the founder of the Philadelphia-based startup, Cocoa Press, which makes a 3D printer for chocolate, doesn’t have much of a sweet tooth. But the young founder was fascinated by 3D prin… [+4720 chars]"
    },
    {
      "source": {
        "id": "the-next-web",
        "name": "The Next Web"
      },
      "author": "TNW Deals",
      "title": "You can be a Cisco-certified networking pro thanks to this $35 training bundle",
      "description": "TLDR: The Premium Cisco CCNA and CCNP Lifetime Certification Prep Bundle unlocks all the secrets of building, managing and maintaining a Cisco-driven network system. With work-from-home still the order of the day and the need for networked business systems mo…",
      "url": "https://thenextweb.com/offers/2020/10/04/you-can-be-a-cisco-certified-networking-pro-thanks-to-this-35-training-bundle/",
      "urlToImage": "https://img-cdn.tnwcdn.com/image/tnwDeals?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F10%2Fpexels-olia-danilevich-4974915-1.jpg&signature=22bdf8d7b635a033da77e6ad8a436983",
      "publishedAt": "2020-10-04T14:00:34Z",
      "content": "TLDR: The Premium Cisco CCNA and CCNP Lifetime Certification Prep Bundle unlocks all the secrets of building, managing and maintaining a Cisco-driven network system. With work-from-home still the or… [+2348 chars]"
    },
    {
      "source": {
        "id": "the-next-web",
        "name": "The Next Web"
      },
      "author": "The Conversation",
      "title": "Women equal men in computing skill, but are less confident",
      "description": "In the workplace, women are as good as men when it comes to computing performance, but there is still a gender gap when it comes to confidence, according to our new research. As professors of business, we studied how well men and women in midlevel business jo…",
      "url": "https://thenextweb.com/syndication/2020/10/04/women-equal-men-in-computing-skill-but-are-less-confident/",
      "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F10%2Fimage-6.png&signature=d1f7a9d5c21369c7fbcfb16a15d4aa16",
      "publishedAt": "2020-10-04T14:00:11Z",
      "content": "In the workplace, women are as good as men when it comes to computing performance, but there is still a gender gap when it comes to confidence, according to our new research. As professorsof busines… [+3557 chars]"
    },
    {
      "source": {
        "id": "the-next-web",
        "name": "The Next Web"
      },
      "author": "The Conversation",
      "title": "The Arctic hasn’t been this warm for 3 million years",
      "description": "Every year, sea ice cover in the Arctic Ocean shrinks to a low point in mid-September. This year it measures just 1.44 million square miles (3.74 million square kilometers) – the second-lowest value in the 42 years since satellites began taking measurements. …",
      "url": "https://thenextweb.com/syndication/2020/10/04/the-arctic-hasnt-been-this-warm-for-3-million-years/",
      "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F10%2Fimage-4.png&signature=83e64d222ff15bd480e34f1d0012830f",
      "publishedAt": "2020-10-04T13:00:15Z",
      "content": "Every year, sea ice cover in the Arctic Ocean shrinks to a low point in mid-September. This year it measures just 1.44 million square miles (3.74 million square kilometers) the second-lowest value in… [+7182 chars]"
    },
    {
      "source": {
        "id": "the-next-web",
        "name": "The Next Web"
      },
      "author": "The Conversation",
      "title": "How esports is quietly spawning a whole new generation of problem gamblers",
      "description": "Most large sports events came to an abrupt halt during the pandemic, but one category was not only unaffected but enjoyed accelerated growth: esports. Esports is the competitive playing of video games such as League of Legends, Fortnite and Fifa Football. The…",
      "url": "https://thenextweb.com/syndication/2020/10/04/how-esports-is-quietly-spawning-a-whole-new-generation-of-problem-gamblers/",
      "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F10%2Fimage-3.png&signature=d6097b4895931c27745d55f0d8043b4e",
      "publishedAt": "2020-10-04T09:00:21Z",
      "content": "Most large sports events came to an abrupt halt during the pandemic, but one category was not only unaffected but enjoyed accelerated growth: esports. Esports is the competitive playing of video game… [+7347 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Eric Eldon",
      "title": "Airbnb nears IPO as Asana and Palantir land their direct listings",
      "description": "World events have so far not stopped the enthusiasm for tech investing, and really, where else are those dollars going to go?",
      "url": "http://techcrunch.com/2020/10/03/airbnb-nears-ipo-as-asana-and-palantir-land-their-direct-listings/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/11/GettyImages-866245000.jpg?w=600",
      "publishedAt": "2020-10-03T18:00:25Z",
      "content": "Editors note: Get this free weekly recap of TechCrunch news that any startup can use by email every Saturday morning (7 a.m. PT). Subscribe here. The going has not always been easy but the tech IPOs… [+12872 chars]"
    }])
  const [apiError] = useState('')
  const [searchNews, setSearchNews] = useState('')
  const [totalResults] = useState('')
  const [loading] = useState(false)

  /*useEffect(() => {
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
  }, [])*/

  const SearchItem = ({ allNews }) => {
    const mapNews = () =>
      allNews
        .filter((articleName) =>
          articleName.title.toLowerCase().includes(searchNews.toLowerCase())
        )
        .map((article) => (
          <FadeInSection>
          <List.Item style={{ padding: 30 }} key={article.title}>
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
                    <a href={article.url}>{article.source.name}</a>
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
        ))
    return <div>{mapNews()}</div>
  }

  const searchHandler = (event) => {
    setSearchNews(event.target.value)
  }

  return (
    <Container>
        {auth.isLoggedIn() ? (
          <div>
            <Header as="h2" style={{ textAlign: 'center', margin: 20 }}>
              Search for a news topic
            </Header>
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
          </div>
        ) : null}

        {loading && (
          <p style={{ textAlign: 'center' }}>Searching for articles...</p>
        )}
        {articles.length > 0 && searchNews.length !== 0 ? (
          <Header as="h4" style={{ textAlign: 'center', margin: 20 }}>
            Found {totalResults} articles on "{searchNews}"
          </Header>
        ) : (
          <div>
            {!auth.isLoggedIn() ? (
              <div>
                <Header as="h2" style={{ textAlign: 'center', margin: 20 }}>
                  Trending articles right now
                </Header>
                <div className="createAccount">
                <a href="#/signin">
                  <small>Sign in to use search</small>
                </a>
                </div>
              </div>
            ) : null}
            {auth.isLoggedIn() ? (
              <div>
                <Header as="h4" style={{ textAlign: 'center', margin: 20 }}>
                  Trending articles right now
                </Header>
              </div>
            ) : null}
          </div>
        )}
        {articles.length > 0 && <SearchItem allNews={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </Container>
  )
}

export default NewsIdle