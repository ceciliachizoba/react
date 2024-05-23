
import React from 'react';
// import Profile from './Profile';

const users = [
  { Name: 'Ada Obi', Description: 'Software Engineer', DateOfBirth: '1960-01-01' },
  { Name: 'Ada Eze', Description: 'Web Designer', DateOfBirth: '1985-05-05' },
  
];

const App = () => {
  return (
    <div>
      <Profile users={users} />
    </div>
  );
};

export default App;