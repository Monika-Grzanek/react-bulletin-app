const initialState = {
    posts: {
      user: {
        logged: true,
        idUser: 'user1',
        role: 'user'
      },
      data:[
        {
          id: '1', 
          title: 'Car for sale',
          description: 'Renault Megane for sale, year 2014. 5-seater car. Roomy trunk. Very good condition.', 
          price: 10000,
          photo: 'https://images.pexels.com/photos/1005633/pexels-photo-1005633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          publishedDate: new Date('02-02-2022'),
          updatedDate: new Date('06-03-2022'),
          userId: 'user1',
          author: 'JohnSmith@gmail.com',
          contact: 676854332,
          location: 'Warsaw',
          status: 'Published',   
          idUser: 'user1',
          role: 'user'
      },
      {
        id: '2', 
        title: 'Apartment for rent',
        description: 'I am renting a 2-room, cozy apartment in the city center. The apartment is fully equipped.', 
        price: 2500,
        photo: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        publishedDate: new Date('05-03-2022'),
        updatedDate: new Date('06-04-2022'),
        author: 'SaraWilson@gmail.com',
        contact: 555678943,
        location: 'Cracow',
        status: 'Published',   
        idUser: 'user2',
        role: 'admin'
      },
      {
        id: '3', 
        title: 'House for sale',
        description: 'The house has 5 bedrooms, a garage and a beautiful garden. Located in a quiet area, good communication with the city center.', 
        price: 50000,
        photo: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        publishedDate: new Date('18-03-2022'),
        updatedDate: new Date('06-04-2022'),
        author: 'JohnSmith@gmail.com',
        contact: 676854332,
        location: 'Warsaw',
        status: 'Published',   
        idUser: 'user1',
        role: 'user'
      }
    ],
  }
};
  
  export default initialState;