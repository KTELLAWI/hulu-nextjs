import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../uitils/requests'

export default function Home({results}) {
  //console.log(props)
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header/>
       <Nav/>
       <Results results={results}/>
      
    </div>
  )
}


export async function getServerSideProps(context){
   const genre = context.query.genre 
   const requesting = requests[genre]?.url || `/trending/all/week?api_key=469724948a1ee8985adb14b7e923d1dc&language=en-us`
   console.log(genre)
    const request = await fetch(`https://api.themoviedb.org/3${requesting}`)
    //('https://api.themoviedb.org/3/trending/all/week?api_key=469724948a1ee8985adb14b7e923d1dc&language=en-us')
    //
    .then(res=> res.json());
    //const res= await request.json
   
return{
  props:{
    results:request.results
  }
}

  }

