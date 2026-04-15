import MediaRow from '../components/MediaRow.jsx';
import SingleView from '../components/SingleView.jsx';
import { useState } from 'react';
import { useMedia } from '/src/hooks/apiHooks.js';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { mediaArray } = useMedia();

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
