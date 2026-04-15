// src/components/MediaRow.jsx
import { Link } from "react-router";

const MediaRow = (props) => {
  const {item, selectedItem, setSelectedItem} = props;

  const isSelected = selectedItem?.media_id === item.media_id;

  return (
      <tr key={item.media_id}>
        <td>
          <img className="thumbnail" src={item.thumbnail} alt={item.title} />
        </td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
        <td>{item.filesize}</td>
        <td>{item.media_type}</td>
        <td>{item.username}</td>
        <td>
          <Link to="/single" state = {{ item }}>
            Click to open
          </Link>
        </td>
      </tr>
  );
};

export default MediaRow;
