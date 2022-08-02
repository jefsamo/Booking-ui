import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch(
    "http://127.0.0.1:8800/api/hotels/countByType"
  );

  return (
    <div className="pList">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="pListItem">
            <img
              src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?cs=srgb&dl=pexels-h-emre-773471.jpg&fm=jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>{data[0]?.count} hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?cs=srgb&dl=pexels-h-emre-773471.jpg&fm=jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?cs=srgb&dl=pexels-h-emre-773471.jpg&fm=jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?cs=srgb&dl=pexels-h-emre-773471.jpg&fm=jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyList;
