function Post({ post }: { post: { title: string; body: string } }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
