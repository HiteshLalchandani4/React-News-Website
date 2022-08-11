import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  // articles = [
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "MacRumors"
  //       },
  //       "author": "Joe Rossignol",
  //       "title": "Apple TV+ Animated Film 'Luck' Now Streaming, Takes Over Apple's Homepage",
  //       "description": "Apple TV+'s first feature-length 3D animated film \"Luck\" is now available to watch in the U.S. a few hours earlier than promised. Apple is promoting the film with a full-page takeover on its homepage, with characters from the film appearing in several spots.\n…",
  //       "url": "https://www.macrumors.com/2022/08/04/apple-tv-plus-film-luck-homepage-takeover/",
  //       "urlToImage": "https://images.macrumors.com/t/t8vGuVgv5Uec1TVeFLm_14bvcyo=/1600x/article-new/2022/08/Apple-TV-Luck-Homepage.jpg",
  //       "publishedAt": "2022-08-05T02:08:09Z",
  //       "content": "Apple TV+'s first feature-length 3D animated film \"Luck\" is now available to watch in the U.S. a few hours earlier than promised. Apple is promoting the film with a full-page takeover on its homepage… [+848 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "9to5Mac"
  //       },
  //       "author": "Benjamin Mayo",
  //       "title": "How to watch new movie Luck on Apple TV+",
  //       "description": "New family animated movie Luck debuts today on Apple TV+. This is Apple’s first 3D animated feature film, made in partnership with Skydance Animation, as Apple looks to compete against Pixar for the prestige of top-tier animated movies. Here’s how to watch Lu…",
  //       "url": "https://9to5mac.com/2022/08/04/how-to-watch-new-movie-luck/",
  //       "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/how-to-watch-luck-movie.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  //       "publishedAt": "2022-08-05T03:00:00Z",
  //       "content": "New family animated movie Luck debuts today on Apple TV+. This is Apple’s first 3D animated feature film, made in partnership with Skydance Animation, as Apple looks to compete against Pixar for the … [+1924 chars]"
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "9to5Mac"
  //       },
  //       "author": "Filipe Espósito",
  //       "title": "Researcher reports fraudulent Chinese apps on the Mac App Store",
  //       "description": "Despite Apple’s claims that the App Store is a “safe place you can trust,” it seems that some developers still find ways to bypass the company’s review process to distribute fraudulent apps to iPhone, iPad, and Mac users. This time, a researcher identified as…",
  //       "url": "https://9to5mac.com/2022/08/04/fraudulent-chinese-apps-mac-app-store/",
  //       "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/Mac-App-Store-fraudulent-Chinese-apps.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  //       "publishedAt": "2022-08-05T01:00:12Z",
  //       "content": "Despite Apple’s claims that the App Store is a “safe place you can trust,” it seems that some developers still find ways to bypass the company’s review process to distribute fraudulent apps to iPhone… [+2766 chars]"
  //   }]

    constructor()
    {
      super();
      console.log('Hello I am from constructor of news component');
      this.state = 
      {
        articles : [],
        loading : false
      }
    }

    async componentDidMount()
    {
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e741e90868ca4a55876da15d606225a4";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles : parsedData.articles});
    }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsHunt - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>
          {
              return(
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title?element.title.slice(0,40):""} description = {element.description?element.description.slice(0,100):""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
                </div> 
              ) 
          })}    
        </div>
      </div>
    )
  }
}

export default News
