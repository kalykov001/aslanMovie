import Banner from '@/components/pages/homeAssembly/Banner/Banner';
import { useGettrending } from '@/hooks/getMovie/useGetMovie';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const LazyLoading = () => {
    const {data: dataMovie} = useGettrending()

    return (
              <div>
    <LazyLoadImage
      height="100%"
      src={`https://image.tmdb.org/t/p/original${dataMovie?.backdrop_path
}`} // use normal <img> attributes as props
      width="100%" />
  </div>
    );
};

export default LazyLoading;