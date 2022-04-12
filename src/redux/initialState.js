const initialState = {
    posts: 
      [
        {
          id: '1', 
          title: 'Car for sale',
          description: 'Renault Megane for sale, year 2014. 5-seater car. Roomy trunk. Very good condition.', 
          price: 10000,
          photo: 'https://www.pexels.com/pl-pl/zdjecie/biale-renault-megane-5-drzwiowy-hatchback-1005633/',
          publishedDate: new Date('02-02-2022'),
          updatedDate: new Date('06-03-2022'),
          author: 'JohnSmith@gmail.com',
          contact: 676854332,
          location: 'Warsaw',
          status: 'Published',   
      },
      {
        id: '2', 
        title: 'Apartment for rent',
        description: 'I am renting a 2-room, cozy apartment in the city center. The apartment is fully equipped.', 
        price: 2500,
        photo: 'https://www.pexels.com/pl-pl/zdjecie/wylaczony-telewizor-z-plaskim-ekranem-276724/',
        publishedDate: new Date('05-03-2022'),
        updatedDate: new Date('06-04-2022'),
        author: 'SaraWilson@gmail.com',
        contact: 555678943,
        location: 'Cracow',
        status: 'Published',   
      }
    ],
  };
  
  export default initialState;