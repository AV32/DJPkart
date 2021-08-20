import "./post.css";
function Posts({ post }) {
  const posts = post.map((post, index) => {
    return (
      <div className="box" key={index}>
        {/* <img
          className="review__avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8H1cJiq2N6D8u6lQMkP_-iPVu7d2XZbevhfUNM6obwXcUkeMDvJEsak3kTjvqAr67DDY&usqp=CAU"
          alt=""
        /> */}
        <h2  className="review__text">{post.text}</h2>
        <p className="review__text"> {post.rate} </p>
      </div>
    );
  });

  return <div>{posts}</div>;
}

export default Posts;
