import Layout from "../components/Layout";

class Newblog extends React.Component {
  static async getInitialProps ({req}) {
      return req 
          ? { from: 'server' }
          : { from: 'client '}
  }

  render() {
      return (
          <Layout>
              This page is Running on {this.props.from} 
          </Layout>
      );
  }
}

export default Newblog;