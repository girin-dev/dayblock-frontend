import React from 'react';
import { Block } from '../organisms';
import "../../resources/sass/home/Home.scss";

const Home = () => {
    return (
        <div>
          <h1>My Block</h1>
          <Block/>
          <h1>Team Block</h1>
          <Block/>
        </div>
    );
};

export default Home;