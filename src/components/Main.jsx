
import DigimonCard from './DigimonCard';

function Main({ digimonData }) {
  if (!digimonData || digimonData.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="digimon-list">
      {digimonData.map((digimon) => (
        <DigimonCard
          key={digimon.name}
          name={digimon.name}
          img={digimon.img}
          level={digimon.level}
          type={digimon.type}
        />
      ))}
    </div>
  );
}

export default Main;
