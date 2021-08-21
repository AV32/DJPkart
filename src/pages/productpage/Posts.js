import "./ProductPage.css";
function Posts({ post }) {
  const posts = post.map((post, index) => {
    return (
      <div key={index}>


        <div>
          
                <div className="review__container">
                  <div className="review__rate ">
                    <img
                      className="review__avatar"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8H1cJiq2N6D8u6lQMkP_-iPVu7d2XZbevhfUNM6obwXcUkeMDvJEsak3kTjvqAr67DDY&usqp=CAU"
                      alt=""
                    />{" "}
                    <h1>Pratyush K</h1>{" "}
                  </div>
                  <h1 className="review__text">{post.text}</h1>
                  <h1 className="review__text">{post.rate}</h1>
                </div>

            </div>





      </div>
    );
  });

  return <div>{posts}</div>;
}

export default Posts;
