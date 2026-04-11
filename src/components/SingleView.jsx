const SingleView = (props) => {
  const { item, setSelectedItem } = props;

  if (!item) {
    return null;
  }

  return (
      <dialog open={Boolean(item)}>
        <button
            onClick={() => {
              setSelectedItem(null);
            }}
        >
          Sulje
        </button>
        <h3>{item.title}</h3>
        <p>{item.description || 'No description.'}</p>
        {item.media_type.startsWith('image/') && (
            <img src={item.filename} alt={item.title} />
        )}
        {item.media_type.startsWith('video/') && (
            <video src={item.filename} controls>
              Your browser does not support the video element.
            </video>
        )}
      </dialog>
  );
};

export default SingleView;