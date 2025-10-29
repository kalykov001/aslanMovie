import { API_KEY, BASE_URL } from "@/constants/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAllMovies = () => {
  return useQuery({
    queryKey: ["all-movie"],
    queryFn: async () => {
      const urls = [
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=2`,
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=3`,
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=4`,
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=5`,
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=6`,
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=7`,
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=8`,
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=12`,
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=11`,
      ];
      const responses = await Promise.all(urls.map((item) => axios.get(item)));
      const allMovies = responses.flatMap((res) => res.data.results);

      return allMovies;
    },
  });
};
