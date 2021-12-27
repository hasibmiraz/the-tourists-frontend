import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Miraz',
      image:
        'https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-cm-digital-human-promo.jpg',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
