import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        console.log(todos);
    }, [todos]);
    const todoStyle = "bg-slate-500 w-4/5 p-3 rounded-xl"
    const handleAdd = () => {
        if (todo !== "") {
            setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
            setTodo("");
            console.log(todos);
        }
    }
    const handleEdit = () => {

    }
    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * Deletes a todo item from the list based on a specific condition.
     * This function should be called when a delete action is triggered.
     */
    /******  8963cdc4-0bad-4168-a8de-427b8c597076  *******/
    const handleDelete = () => {

    }

    const handleChange = (e) => {
        setTodo(e.target.value);

    }

    const handleCheckbox = (e) => {
        let id = e.target.name;
        let index = todos.findIndex(item => {
            return item.id === id;
        })
        let newTodos = [...todos];
        console.log(id, index, newTodos);
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);


    }




    return (
        <div className="flex flex-col container mx-auto my-5 rounded-xl bg-slate-600 p-5 min-h-[80vh]">
            <div className="addTodo flex justify-between flex-col gap-2 my-3">
                <h2 className="text-lg font-bold">Add a ToDo</h2>
                <div className="flex gap-2">
                    <textarea onChange={handleChange} value={todo} className=" w-3/4 rounded-lg resize-none " ></textarea>

                    <button onClick={handleAdd} className="bg-gray-800 ml-4 transition-all duration-200 hover:bg-gray-900 font-bold p-2 px-4 rounded-2xl text-white ">Add</button>
                </div>
            </div>
            <h2 className="text-lg font-bold mt-4">Your ToDos</h2>
            <div className="todos">
                {todos.map(item => {
                    return <div key={item.id} className="todo flex items-center justify-between p-2 my-2">
                        <input
                            className="mr-2"
                            name={item.id}
                            type="checkbox"
                            value={item.isCompleted}
                            onChange={handleCheckbox}
                        />
                        <div className={!(item.isCompleted) ? todoStyle : todoStyle + " line-through"}>
                            {item.todo}
                        </div>
                        <div className="buttons">
                            <button onClick={handleEdit} className="bg-gray-800 ml-4 transition-all duration-200 hover:bg-gray-900 font-bold p-3 px-4 rounded-2xl text-white ">Edit</button>
                            <button onClick={handleDelete} className="bg-gray-800 ml-4 transition-all duration-200 hover:bg-gray-900 font-bold p-3 px-4 rounded-2xl text-white ">Delete</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home

