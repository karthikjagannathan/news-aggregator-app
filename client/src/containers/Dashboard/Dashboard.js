import React, { useState, useEffect } from 'react';
import axois from 'axios';

import './Dashboard.css';
import Posts from '../../components/Posts/Posts';
import SourceFilter from '../../components/SourceFilter/SourceFilter';

const apiUrl = process.env.REACT_APP_API_URL;
const config = {
  headers: {'Authorization': "bearer " + process.env.REACT_APP_API_TOKEN}
};

const filterSources = {
  engadget: true,
  gizmodo: true
}

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [masterPosts, setMasterPosts] = useState([]);
  const [postsExists, setPostsExists] = useState(false);

  useEffect(() => {
    axois
      .get(
        apiUrl,
        config)
      .then(response => {
        console.log(response.body);
        setPosts(response.data);
        setMasterPosts(response.data);
        
        if (response.data.length){
          setPostsExists(true);
        }
  
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleFilterUpdate = (filterName, filterChecked) => {
    if (filterChecked) {
      //add to posts
      setPosts([...posts, ...masterPosts.filter(post => {
        return (post.source === filterName);
      })]);
    }
    else{
      //remove from posts
      setPosts(posts.filter(post => {
        return (post.source !== filterName);
      }));
    }
    setPostsExists(posts.length);
  }

  return (
    <div className="dashboard">
      <SourceFilter sources={filterSources} handleClick={handleFilterUpdate} />
      {posts.length ? 
      (
        <Posts data={posts} />
      )
      : (!postsExists ? (<div><p>loading posts...please stand by...</p></div>) : (<div><p>no posts found.</p></div>))
      }
    </div>
  );

}

export default Dashboard;