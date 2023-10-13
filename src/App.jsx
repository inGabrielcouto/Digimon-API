import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './components/Main';
import Header from './components/Header';
import types from './types';
import './app.css';

function App() {
  const [digimonData, setDigimonData] = useState([]);
  const [error, setError] = useState(null);
  const [filteredDigimonData, setFilteredDigimonData] = useState([]); // Adicione esta linha

  const filterDigimonsByType = (type) => {  
      const filteredDigimons = digimonData.filter((digimon) => digimon.type === type);
      setFilteredDigimonData(filteredDigimons);  

      if(filteredDigimons.length === 0){
        alert("Type not found")
      }
  };

  useEffect(() => {
    const fetchDigimon = async () => {
      try {
        const response = await axios.get(
          'https://digimon-api.vercel.app/api/digimon'
        );

        if (response.status === 200) {
          const digimonsWithType = response.data.slice(0, 12).map((digimon) => ({
            ...digimon,
            type: types[Math.floor(Math.random() * types.length)],
          }));

          setDigimonData(digimonsWithType);
          setError(null);
        } else {
          setError('Erro na requisição');
        }
      } catch (error) {
        setError('Erro ao carregar a API');
      }
    };

    fetchDigimon();
  }, []);

  return (
    <div className="App">
      <Header onFilter={filterDigimonsByType} />
      {error ? (
        <div>{error}</div>
      ) : (
        <Main digimonData={filteredDigimonData.length > 0 ? filteredDigimonData : digimonData} />
      )}
    </div>
  );
}

export default App;
