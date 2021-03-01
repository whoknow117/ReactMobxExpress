import React from 'react'
import todoStore from "../../store/todoStore";
import {observer} from "mobx-react-lite";



const Main = observer(() => {

    return <div>
        {todoStore.tasks.map( el => {
            return <div key={el.id}>
                {el.title}
                <button onClick={() => todoStore.deleteTask(el.id)}>x</button>
            </div>
        })}
    </div>
})
export default Main;