import React, { useState, useEffect } from 'react';
import axois from 'axios';

import './Dashboard.css';
import Posts from '../../components/Posts/Posts';

const apiUrl = process.env.REACT_APP_API_URL;
const config = {
  headers: {'Authorization': "bearer " + process.env.REACT_APP_API_TOKEN}
};

console.log('apiUrl', apiUrl);
console.log('config', config);

const Dashboard = () => {

  const [loadedPosts, setPosts] = useState(undefined);

  useEffect(() => {
    axois
      .get(
        apiUrl,
        config)
      .then(response => {
        console.log(response.body);
        setPosts(response.data);
  
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="dashboard">
    {loadedPosts ? 
    (
    <Posts data={loadedPosts} />
    )
    : (<div><p>loading posts...please stand by...</p></div>)
    }
    </div>
  );

}

export default Dashboard;