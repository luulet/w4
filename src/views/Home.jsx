import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow.jsx';
import SingleView from '../components/SingleView.jsx';
import {fetchData} from "../utils/fetch-data.js";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        // hae mediat
        const mediaItems = await fetchData(
          import.meta.env.VITE_MEDIA_API + '/media',
        );
        // hae medioihin käyttäjätiedot
        const mediaWithUsers = await Promise.all(
          mediaItems.map(async (item) => {
            const user = await fetchData(
              import.meta.env.VITE_AUTH_API + '/users/' + item.user_id,
            );
            item.username = user.username;
            return item;
          }),
        );

        console.log(mediaWithUsers);

        setMediaArray(mediaWithUsers);
      } catch (error) {
        console.error('fetchData: ' + error.message);
      }
    };

    getMedia();
  }, []);

  // console.log(mediaArray);

  return (
      <>
        <h1>Media</h1>
        {selectedItem && (
            <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
        )}
        <table>
          <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {mediaArray.map((item) => (
                  <MediaRow
                      key={item.filename}
                      item={item}
                      selectedItem={selectedItem}
                      setSelectedItem={setSelectedItem}
                  />
              ))}
              </tbody>
        </table>
      </>
  );
};
export default Home;
