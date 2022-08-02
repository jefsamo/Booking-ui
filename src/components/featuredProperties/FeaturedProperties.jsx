import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "http://127.0.0.1:8800/api/hotels?featured=true&limit=4"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          {data.map((cur) => {
            return (
              <div className="fpItem">
                <img
                  src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?cs=srgb&dl=pexels-h-emre-773471.jpg&fm=jpg"
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">{cur.name}</span>
                <span className="fpCity">{cur.city}</span>
                <span className="fpProce">Starting from $120</span>
                <div className="fpRating">
                  <button>8.9</button>
                  <span>Excellent</span>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
