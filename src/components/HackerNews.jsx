import { Component } from "react";
import axios from "axios";
import x from './HackerNews.module.css'

const getInfo = 'https://hn.algolia.com/api/v1/search_by_date?tags=story'

export class HackerNews extends Component {
    state = {
        articles: { hits: [] }
    }

    getArticles = async () => {
        try {
            const haveInfoFetch = await axios.get(getInfo)
            this.setState({ articles: haveInfoFetch.data })
            console.log('axios', haveInfoFetch);

        } catch (e) {
            console.error('You have an error', e);
        }
    }

    componentDidMount() {
        this.getArticles()
    }
    componentDidCatch(e, i) {
        console.log('Error', e);
        console.log('Info error', i);
    }

    componentWillUnmount() {
        this.setState({ articles: [] })
    }

    render() {
        const list = this.state.articles
        return (
            <div>
                <h1>Hackers News</h1>
                <ul>
                    {list.hits && list.hits.map((hit) => {
                        return (
                            <li>
                                <h2>Title: {hit.title}</h2>
                                <h3>Author: {hit.author}</h3>
                                <p>Created: {hit.created_at}</p>
                                <span>Url: <a target="_blanck" href={hit.url}>{hit.url}</a></span>
                                <p>Comments: {hit.num_comments}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}