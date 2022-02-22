import { useEffect, useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Home } from './pages/Home';
import { api } from './services/api';

export const App = () => {
  const [repository, setRepository] = useState([]);

  useEffect(() => {
    api.get(`afonsocruz`)
      .then((response => setRepository(response.data)))
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <GlobalStyle />
      <Home data={repository} />
    </>
  );
}
