import React from 'react'
import Main from '../components/Main'
import requests from '../Requests'
import Row from '../components/Row'
export default function Home() {
   
  return (
    <>
    <Main/>
    <Row title ='Up coming' fetchURL = {requests.requestUpcoming}/>
    <Row title ='Popular' fetchURL = {requests.requestPopular}/>
    <Row title ='Top Rated' fetchURL = {requests.requestTopRated}/>
    <Row title ='Trending' fetchURL = {requests.requestTrending}/>
    <Row title ='Latest' fetchURL = {requests.requestLatest}/>
    </>
  )
}
