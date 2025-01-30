import axios from "axios";

const moviesurl =
  "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
const tvshowsurl =
  "https://api.themoviedb.org/3/trending/tv/week?language=en-US";
export default async function getTrendingMovies() {
  try {
    const res = await axios.get(moviesurl, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTU3MThiMTk4YTc4NjkxYjUyYjRkNzI1NGZjNDk4ZCIsIm5iZiI6MTczNzc4NzM1NS43MjMsInN1YiI6IjY3OTQ4N2RiOTQ4MTA5NTY1MTQ4M2JlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qelYnGV3XvbubPfZ_zerCNRgd5ZcbGFnc574Y7mGNl0",
      },
    });
    const data = res.data.results;
    const arr = data.slice(0, 5);
    const arr_ = [];
    arr.map((movies_) => {
      arr_.push({
        id: movies_.id,
        title: movies_.title,
        poster_path: movies_.poster_path,
      });
    });

    return { arr_, status: 200 };
  } catch (error) {
    console.log(error);
    return { arr_: [], status: 400 };
  }
}
export async function getTrendingTvShows() {
  try {
    const res = await axios.get(tvshowsurl, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTU3MThiMTk4YTc4NjkxYjUyYjRkNzI1NGZjNDk4ZCIsIm5iZiI6MTczNzc4NzM1NS43MjMsInN1YiI6IjY3OTQ4N2RiOTQ4MTA5NTY1MTQ4M2JlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qelYnGV3XvbubPfZ_zerCNRgd5ZcbGFnc574Y7mGNl0",
      },
    });
    const data = res.data.results;
    const arr = data.slice(0, 5);
    const tvshows = [];
    arr.map((movies_) => {
      tvshows.push({
        id: movies_.id,
        title: movies_.title,
        poster_path: movies_.poster_path,
      });
    });

    return { tvshows, status: 200 };
  } catch (error) {
    console.log(error);
    return { tvshows: [], status: 400 };
  }
}
