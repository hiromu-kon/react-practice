import { connect } from "react-redux";

const Count = ({ count, posts }) => {
  return (
    <>
      <div>Countコンポーネント: {count}</div>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return { 
    count: state.countReducer.count,
    posts: state.postsReducer.posts
  }
}

export default connect(mapStateToProps)(Count);
