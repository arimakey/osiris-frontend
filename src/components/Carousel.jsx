import { useRef, useState, useEffect } from 'react';

export default function Carousel({ movies }) {
  const carouselRef = useRef(null);
  const [showScrollLeft, setShowScrollLeft] = useState(false);
  const [showScrollRight, setShowScrollRight] = useState(true);
  const [extraPadding, setExtraPadding] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setShowScrollLeft(scrollLeft > 0);
        setShowScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    const refCurrent = carouselRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -210, behavior: 'smooth' });
      setExtraPadding(true);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 210, behavior: 'smooth' });
      setExtraPadding(false);
    }
  };

  return (
    <div className="relative group">
      <div ref={carouselRef} className={`flex overflow-x-hidden overflow-y-visible py-4 ${extraPadding ? 'px-9' : ''}`}>
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[125px] md:min-w-[175px] xl:min-w-[200px] mx-2 transform transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={movie.img} alt={movie.title} className="rounded-lg w-full h-full transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" />
          </div>
        ))}
      </div>

      {
        showScrollLeft && (
          <div className='hover:to-background bg-gradient-to-l from-transparent h-full absolute left-0 top-1/2 transform -translate-y-1/2 w-20 opacity-75  flex flex-col justify-center'>
            <button
              onClick={scrollLeft}
              className="text-3xl py-12 text-white px-2 opacity-0 group-hover:opacity-100 transition-shadow duration-300"
            >
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
          </div >
        )
      }

      {
        showScrollRight && (
          <div className='hover:to-background bg-gradient-to-r from-transparent h-full absolute right-0 top-1/2 transform -translate-y-1/2 w-20 opacity-80  flex flex-col justify-center'>
            <button
              onClick={scrollRight}
              className="text-3xl py-12 text-white px-2 opacity-0 group-hover:opacity-100 transition-shadow duration-300"
            >
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        )
      }
    </div >
  );
}
