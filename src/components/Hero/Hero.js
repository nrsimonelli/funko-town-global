import React from 'react';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import PopCard from '../PopCard/PopCard';

const data = [
  {
    handle: 'twinkie-the-kid-metallic',
    image:
      'https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/896890/Twinkie_the_Kid_%2528Metallic%2529_Vinyl_Art_Toys_28dc8669-5b9a-48ea-a056-e7240a8b3982.JPG',
    title: 'Twinkie the Kid (Metallic)',
    series: 'Pop! Vinyl;Pop! Ad Icons;Funko Target Exclusives',
  },
  {
    handle: 'sam-with-candy',
    image:
      'https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/896486/Sam_%2528with_Candy%2529_Vinyl_Art_Toys_dd2e8e05-1d25-4560-b98b-5dd3a49d1797.jpg',
    title: 'Sam (with Candy)',
    series: 'Pop! Vinyl;Pop! Movies;Special Edition (Funko Pop!s)',
  },
  {
    handle: 'rat-fink-gray',
    image:
      'https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/895430/Rat_Fink_%2528Gray%2529_Vinyl_Art_Toys_c0b723b6-6848-4ddd-bba1-033ab15d8b59.jpg',
    title: 'Rat Fink (Gray)',
    series: 'Pop! Vinyl;Popcultcha;Pop! Icons',
  },
  {
    handle: 'naruto-sage-mode-(se)',
    image:
      'https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/895076/Naruto_%2528Sage_Mode%2529_Vinyl_Art_Toys_f5edc087-c35e-4758-94ee-454701e7870f.jpg',
    title: 'Naruto (Sage Mode) (SE)',
    series: 'Pop! Animation;Pop! Vinyl;Special Edition (Funko Pop!s)',
  },
  {
    handle: 'groot-holiday-(sitting)-(glow-in-the-dark)',
    image:
      'https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/893962/Groot_%2528Holiday%2529_%2528Sitting%2529_%2528Glow_in_the_Dark%2529_Vinyl_Art_Toys_16b17e3a-9d0f-4e35-ba6c-8abb6d0a21a4.JPG',
    title: 'Groot (Holiday) (Sitting) (Glow in the Dark)',
    series: 'Pop! Vinyl;Pop! Marvel',
  },
  {
    handle: 'clicker',
    image:
      'https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/893941/Clicker_Vinyl_Art_Toys_88bc92d3-33a7-4ea9-8798-a9dedddd6177.JPG',
    title: 'Clicker',
    series: 'Pop! Vinyl;Pop! Games;Funko GameStop Exclusives',
  },
  {
    handle:
      'severus-snape,-harry-potter,-parvati-patil-&amp;-minerva-mcgonagall-4-pack',
    image:
      'https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/893937/Severus_Snape%252C_Harry_Potter%252C_Parvati_Patil_and_Minerva_McGonagall_%25284-Pack%2529_Vinyl_Art_Toys_8060eae1-93c3-4036-a9a4-d3b192bdafe1.JPG',
    title:
      'Severus Snape, Harry Potter, Parvati Patil &amp; Minerva McGonagall (4-Pack)',
    series:
      'Pop! Vinyl;Pop! Harry Potter;Special Edition (Funko Pop!s)',
  },
  {
    handle: 'spider-man-wood-deco',
    image:
      'https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/893932/Spider-Man_%2528Wood_Deco%2529_Vinyl_Art_Toys_9b16d6eb-5114-4161-b30f-dfe9088a1ab8.JPG',
    title: 'Spider-Man (Wood Deco)',
    series: 'Pop! Vinyl;Pop! Marvel;Entertainment Earth',
  },
  {
    handle: 'mothman',
    image:
      'https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/893644/Mothman_Vinyl_Art_Toys_ceba3048-6320-46f9-a700-fe176609d58f.jpg',
    title: 'Mothman',
    series: 'Pop! Vinyl;Popcultcha;Pop! Myths',
  },
  {
    handle: 'sesshomaru-as-demon-dog-special-edition',
    image:
      'https://www.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/893296/Sesshomaru_as_Demon_Dog_%2528Special_Edition%2529_Vinyl_Art_Toys_24d27e6e-8e70-4c4a-8075-4d1a1c91476d.jpg',
    title: 'Sesshomaru as Demon Dog (Special Edition)',
    series: 'Pop! Animation;Pop! Vinyl;Special Edition (Funko Pop!s)',
  },
];

const Hero = () => {
  return (
    <div className='root min-h-screen text-gray-light bg-primary-darker flex justify-between'>
      <Nav />
      <div className='hero-root flex justify-center items-center flex-grow'>
        <div className='container flex flex-wrap b'>
          <div className='hero-title text-3xl sm:text-5xl lg:text-6xl py-4 text-center'>
            Hello Friend
          </div>
          {data.map((pop, index) => (
            <PopCard
              title={pop.title}
              image={pop.image}
              key={index}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
