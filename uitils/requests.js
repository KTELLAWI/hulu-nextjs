const API_KEY ="469724948a1ee8985adb14b7e923d1dc"
//const API_KEY = process.env.API_KEY


export default {
    fetchTrending :
    {   title:"Trading", 
        url:`/trending/all/week?api_key=469724948a1ee8985adb14b7e923d1dc&language=en-us`,
    },   
    fetchTopRated:
    {
        title:"Top Rated",
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    },
    fetchAction:
    {
        title:"Action",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    }, 
    fetchComedy:
    {
        title:"Comedy",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    }, 
    fetchHorror:
    {
        title:"Horror",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchRomance:
    {
        title:"Romance",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    }, 
    fetchMystrey:
    {
        title:"Mystrey",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },  
    fetchSciFi:
    {
        title:"Sci-Fi",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878`  ,
    },  
    fetchWestren:
    {
        title:"Westren",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchAnimation:
    {
        title:"Animation",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    }, 
    fetchTv:
    {
        title:"Tv",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },  


}















