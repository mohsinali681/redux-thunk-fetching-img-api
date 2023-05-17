import "./App.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getphotos } from "./Getphotoslist";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);
  useEffect(() => {
    dispatch(getphotos());
  }, [dispatch]);
  console.log(photos);

  return (
    <div className='main'>
      <div className='header'>
        <h1>
          Fetching data from an image api <br /> through Redux thunk{" "}
        </h1>
        <div className='gallery'>
          {photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.download_url}
              alt={photo.author}
              width='400px'
              height='400px'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
