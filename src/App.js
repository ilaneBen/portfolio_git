import React from 'react';
import GitHubRepositories from './components/github';
import 'swiper/swiper-bundle.css'; 
import './App.css';
const App = () => {

  return (
    <div className="App">
      <GitHubRepositories token={githubToken} />
    </div>
  );
};

export default App;
