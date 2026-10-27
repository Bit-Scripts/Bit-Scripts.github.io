import Card from "./Card";
import { cardsData } from "../../data/cardsData";

function CardsWrapper() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cardsData.map((card) => (
        <Card
          title={card.title}
          imgName={card.imageCover}
          key={card.project}
          translationKey={card.project}
          demoUrl={card.demo}
          author={card.author}
          githubProjectUrl={card.github}
        />
      ))}
    </div>
  );
}

export default CardsWrapper;
