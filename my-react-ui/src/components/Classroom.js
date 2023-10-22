import React from 'react';
import './Home.css';
import classroomImage from './classroom.jpg';

function Classroom(){
    return (
        <div>
            <img class="Classroom" src={classroomImage} alt="Your Image Description"/>
        </div>
    );
}

export default Classroom;