import { Link } from "react-router-dom";

interface NewsProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const MainBody = ({ news }: { news: NewsProps }) => {
  const getImageById = (id: number) => {
    const images: Record<number, string> = {
      1: "/laptop.png",
      2: "/draw.png",
      3: "/meditation.png",
    };
    return images[id] || "/default.png"; 
  };

  return (
    <Link to={`/personal-news/${news.id}`} className="NewsLink">
      <div className="News" id={`news-${news.id}`}>
        <div className="Left" id={`left-${news.id}`}>
          <div className="Top">
            <div className="InfoTop">
              <img src="./image.png" className="Author-Image" alt="Author" />
              <p className="Authors-name">Authors name</p>
              <p className="delimeter-1">in</p>
              <p className="Topics-name">Topics Name</p>
              <p className="delimeter-2">·</p>
              <p className="July">7 July</p>
            </div>

            <div className="main-part">
              <h1>{news.title}</h1>
              <p>{news.description}</p>
            </div>
          </div>

          <div className="InfoBottom">
            <div className="Info">
              <button className="btn">
                <span>JavaScript</span>
              </button>
              <p className="date">12 min read</p>
              <p className="delimeter-3">·</p>
              <p className="Recommendation">Selected for you</p>
            </div>

            <div className="Actions">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="Box"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="Image">
          <img src={getImageById(news.id)} alt={`Image for ${news.id}`} />
        </div>
      </div>
    </Link>
  );
};

export default MainBody;