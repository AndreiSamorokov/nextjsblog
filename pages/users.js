import Layout from "../components/Layout";
import axios from 'axios';

class Users extends React.Component {
  static async getInitialProps ({req}) {
    // axios : Rest API -- getting 10 user list
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      return {
        users : response.data
      }
  }

  render() {
    
      const { users } = this.props
      const userlist = users.map(
        user => <li key={user.id} >{user.username}</li>
      )

      return (
          <Layout>
              {/* This page is Running on {this.props.from}  */}
            <ul>
              {userlist}
            </ul>
          </Layout>
      );
  }
}

export default Users;