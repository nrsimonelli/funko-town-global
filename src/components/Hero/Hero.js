import React from 'react';
import { connect, useDispatch } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import PopCard from '../PopCard/PopCard';
import SearchBar from '../SearchBar/SearchBar';
import NotFound from '../NotFound/NotFound';

const Hero = (props) => {
  const dispatch = useDispatch();

  const searchRequest = (query) => {
    console.log('requesting with query:', query);
    dispatch({ type: 'POP_LIST_FETCH', params: { query } });
  };

  return (
    <div className='root min-h-screen text-gray-darker flex justify-between'>
      <Nav />
      <div className='hero-root flex justify-start items-center flex-grow'>
        {!props.popList.error ? (
          <div className='container flex-row flex-wrap justify-center'>
            <div className='hero-title text-3xl sm:text-5xl lg:text-6xl pb-12 pt-16 text-center w-full'>
              Hello Friend
            </div>
            <SearchBar search={searchRequest} />
            {props.popList.pop !== null ? (
              <>
                {props.popList.pop.map((pop, index) => (
                  <PopCard
                    title={pop.title}
                    image={pop.image}
                    key={index}
                  />
                ))}
              </>
            ) : null}
          </div>
        ) : (
          <NotFound />
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
