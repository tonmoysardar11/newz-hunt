import React, { useEffect,useState } from 'react'
import NewzItem from './NewzItem'
import Spinner  from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

const News =(props)=> {
const [articles,setArticles]=useState([]);
const [loading,setLoading]=useState(true);
const [totalResults,setTotalResults]=useState(0);
const [page,setPage]=useState(1);
document.title = `${props.category}-NewzHunt`;

    
    const update=async()=> {
        props.setProgress(40);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize= ${props.pagesize}`;
        setLoading(true )
        let fetchedData = await fetch(url);
        props.setProgress(70);
        let parsedData = await fetchedData.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
useEffect(() => {
    update();
    // eslint-disable-next-line
},[]);
    
   
const fetchMoreData = async () => {
    setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize= ${props.pagesize}`;
        let fetchedData = await fetch(url);
        let parsedData = await fetchedData.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)
    }

        return (
            <>
                <h2 className='text-center' style={{marginTop:'90px'}}>Top {props.category === 'General' ? '' : `${props.category}`} Headlines </h2>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={useEffect(() => {
                        fetchMoreData()
                        // eslint-disable-next-line
                    }, []) }
                    hasMore={articles.length !== totalResults}>
                    <div className="container">
                        <div className="container row mx-auto" >
                            {articles?.map((element) => {
                                return <div className="col-md-6 col-sm-12 my-2 col-lg-4" key={element.url}>
                                    <NewzItem title={(element.title !== null ? element.title.slice(0, 80) : '') + '...'} desc={(element.description !== null ? element.description.slice(0, 65) : '') + '...'} imgUrl={element.urlToImage !== null ? element.urlToImage : 'https://m.media-amazon.com/images/I/4111lKBeEUL.png'} newsUrl={element.url} date={(element.publishedAt !== null ? new Date(element.publishedAt).toGMTString() : '')} author={(element.author !== null ? element.author : 'Unknown')} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
News.defaultProps={
    category: 'General'
}
News.propTypes={
    category: PropTypes.string
}
export default News
