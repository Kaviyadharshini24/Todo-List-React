import React from "react";
import Todo from "../assets/todo.png";
import Drop from "./Drop"
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status, handleDelete ,setActiveCard,onDrop}) => {
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt='' /> {title}
            </h2>
           <Drop onDrop={()=> onDrop(status,0)} />
            {tasks.map(
                (task, index) =>
                    task.status === status && (
                        <React.Fragment key={index} >
                        <TaskCard
                       
                            title={task.task}
                            tags={task.tags}
                            handleDelete={handleDelete}
                            index={index}
                            setActiveCard={setActiveCard}
                        />
                         <Drop onDrop={()=> onDrop(status, index+1)}  />
                         </React.Fragment>
                    )
            )}
        </section>
    );
};

export default TaskColumn;