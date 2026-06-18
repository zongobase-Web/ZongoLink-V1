import { useState } from 'react';
import { Home } from '../pages/Home';
import { CreateRoom } from '../pages/CreateRoom';
import { JoinRoom } from '../pages/JoinRoom';

export function App() {
  const [activePage, setActivePage] = useState<
    'home' | 'create-room' | 'join-room'
  >('home');

  if (activePage === 'create-room') {
    return <CreateRoom onBack={() => setActivePage('home')} />;
  }

  if (activePage === 'join-room') {
    return <JoinRoom onBack={() => setActivePage('home')} />;
  }

  return (
    <Home
      onCreateRoom={() => setActivePage('create-room')}
      onJoinRoom={() => setActivePage('join-room')}
    />
  );
}
