const key = '4071743164c22a90337863f38bc72ae8'
const Request = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1` ,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1` ,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2` ,
    requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US` ,

    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1` ,

};
export default Request;