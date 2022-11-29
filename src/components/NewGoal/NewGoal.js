import React, {useState} from "react";
import './NewGoal.css';

const NewGoal = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const addGoalHandaler = event=> {
    event.preventDefault();
    const newGoal = {
        id: Math.random().toString(),
        text: enteredGoal
    };
    setEnteredGoal('');
    props.onAddGoal(newGoal);
    console.log(newGoal)
};

const textChangeHandler = event => {
    setEnteredGoal(event.target.value);
};


return (
<form className="new-goal" onSubmit={addGoalHandaler}>
    <input type='text' value={enteredGoal} onChange={textChangeHandler} />
    <button type="submit"> Add New Goal</button>
</form>
);
};

export default NewGoal;