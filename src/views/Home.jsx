import {useEffect, useState} from 'react';
import MediaRow from '../components/MediaRow.jsx';
import SingleView from '../components/SingleView.jsx';
import {fetchData} from "../utils/fetch-data.js";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const json = await fetchData('test.json');
      setMediaArray(json);
    } catch (error) {
      console.error('Error fetching media', error);
    }
  };

  useEffect(() => {
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
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {mediaArray.map((item) => (
                  <MediaRow
                      key={item.media_id}
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
