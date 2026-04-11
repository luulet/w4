// src/components/MediaRow.jsx
const MediaRow = (props) => {
  const {item, selectedItem, setSelectedItem} = props;

  const isSelected = selectedItem?.media_id === item.media_id;

  return (
      <tr key={item.media_id}>
        <td>
          <img src={item.thumbnail} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
        <td>{item.filesize}</td>
        <td>{item.media_type}</td>
        <td>
          <button onClick={() => setSelectedItem(item)} disabled={isSelected}>
            {isSelected ? 'Selected' : 'View'}
          </button>
        </td>
      </tr>
  );
};

export default MediaRow;