import Layout from "../components/Layout";

function NewBlog({url}) {
    return(
      <Layout>
        <div>new blog page</div>
        <div>Your Search Keyword IS{url.query.keyword}</div>
      </Layout>
    );
  }
  
export default NewBlog