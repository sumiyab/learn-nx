import React, { useEffect, useState } from 'react';
import { Game } from '@bghoard/api-interfaces';

export const App = () => {
  const [games, setGame] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then((r) => r.json())
      .then(setGame);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Board Game Hoard: Review</h1>
      </div>
      <div>{JSON.stringify(games)}</div>
    </>
  );
};

export default App;
