import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import PopCard from '../PopCard/PopCard';
import SearchBar from '../SearchBar/SearchBar';

const Hero = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!props.popList) {
      dispatch({ type: 'FETCH_ALL' });
      console.log('fetching now');
    }
  }, [dispatch, props.popList]);

  return (
    <div className='root min-h-screen text-gray-light bg-primary-darker flex justify-between'>
      <Nav />
      <div className='hero-root flex justify-center items-center flex-grow'>
        {props.popList ? (
          <div className='container flex-row flex-wrap justify-center b'>
            <div className='hero-title text-3xl sm:text-5xl lg:text-6xl py-4 text-center w-full'>
              Hello Friend
            </div>
            <SearchBar />
            {props.popList.map((pop, index) => (
              <PopCard
                title={pop.title}
                image={pop.image}
                key={index}
              />
            ))}
          </div>
        ) : (
          <div>LOADING</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

const mapReduxStateToProps = (reduxState) => ({
  popList: reduxState.popReducer,
});

export default connect(mapReduxStateToProps)(Hero);
