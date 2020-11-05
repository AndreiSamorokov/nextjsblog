function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>
          <h3>{post.title}</h3>
          <div>{post.body}</div>  
        </li>
      ))}
    </ul>
  )
}

export default Blog