import React from "react";
import './GoalList.css';

const GoalList = (props) => {
   return( 
   <ul className='list'>
      {props.goals.map( (goal) => {
      return <li className="list_li" key = {goal.id}>{goal.text}</li>;
    })}
  </ul>
   );
};
export default GoalList;