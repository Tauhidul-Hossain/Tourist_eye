import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';


const App =  () => {
  const [listGoals, setListGoals] = useState([
    {id: 'g1', text:'USER'},
    {id: 'g2', text:'PLACE'},
    {id: 'g3', text:'SAVED'},
    {id: 'g4', text:'FAVOURITES'},
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setListGoals(listGoals.concat(newGoal));
    setListGoals(prevListGoals => prevListGoals.concat(newGoal));
  };

  return (
    <><h2 className='h2tag' title='Ťourist ëŷë'>Ťourist ëŷë</h2>
    <hr />
    <p className='greeting'>Welcome to Ťourist ëŷë</p>
    <NewGoal onAddGoal = {addNewGoalHandler} />
    <GoalList goals = {listGoals}/>
    </>
  );
};
export default App;
