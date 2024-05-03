/* eslint-disable react/prop-types */
const Post = ({ title, author, body, limit, classname }) => {
  function limitBody() {
    if (body.length <= limit) {
      return <p>{body}</p>;
    }
    const toShow = body.substring(0, limit) + "...";
    return <p>{toShow}</p>;
  }

  return (
    <div className={classname}>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <h3>{author}</h3>
        <p>{limitBody()}</p>
      </div>
      <button>Read more</button>
    </div>
  );
};

export default Post;
