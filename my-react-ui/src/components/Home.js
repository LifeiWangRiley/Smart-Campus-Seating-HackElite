import React from 'react';
import './Home.css';
import backgroundImage from './background.jpg';

function Home({categories}){
    return (
      <div className="card-container">
        <img class="Classroom" src={backgroundImage} alt="Your Image Description"/>
      {/* {categories.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.name}
          description={category.description}
        />
      ))} */}
    </div>
    );
}

export default Home;