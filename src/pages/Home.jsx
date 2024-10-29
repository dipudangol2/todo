import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        console.log(todos);
    }, [todos]);
    const todoStyle = "bg-slate-400 text-gray-900 w-4/5 p-2 sm:p-4 rounded-xl font-roboto text-lg"
    const handleAdd = () => {
        if (todo !== "") {
            setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
            setTodo("");
            console.log(todos);
        }
    }
    const handleEdit = () => {

    }

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
        <div className="flex flex-col container mx-auto my-5 rounded-xl bg-gray-800 p-5 min-h-[80vh]">
            <div className="addTodo flex justify-between flex-col gap-2 my-3">
                <h2 className="text-xl text-gray-200 font-roboto font-bold">Add a ToDo</h2>
                <div className="flex gap-2">
                    <textarea
                        onChange={handleChange}
                        value={todo}
                        className=" w-3/4 rounded-lg resize-none " >

                    </textarea>

                    <button onClick={handleAdd}
                        className="bg-gray-700 ml-4 transition-all duration-200 hover:bg-gray-600  font-bold p-2 px-4 rounded-2xl text-white font-oxanium italic  ">
                        Add
                    </button>
                </div>
            </div>
            <h2 className="text-xl text-gray-200 font-roboto font-bold mt-4">Your ToDos</h2>
            <div className={
                todos.length > 0 ?
                    ("todos flex flex-col items-center bg-slate-500 rounded-xl mt-4 px-2 py-8")
                    :
                    ""
            }>
                {todos.map(item => {
                    return <div key={item.id}
                        className="todo w-[95%] flex flex-col sm:flex-row gap-4 sm:gap-0  items-center justify-center p-2 my-2 border-solid  border-gray-400 border-b-2  ">
                        <div className="flex justify-center gap-4 w-full">
                            <input
                                className="sm:mr-2 "
                                name={item.id}
                                type="checkbox"
                                value={item.isCompleted}
                                onChange={handleCheckbox}
                            />
                            <div className={!(item.isCompleted) ? todoStyle : todoStyle + " line-through"}>
                                {item.todo}
                            </div>
                        </div>
                        <div className="buttons flex">
                            <button onClick={handleEdit} className="bg-gray-700  ml-4 transition-all duration-200 hover:bg-gray-600  font-bold  p-2 sm:p-4 rounded-2xl text-white font-oxanium italic ">Edit</button>
                            <button
                                onClick={handleDelete}
                                className="bg-gray-700 ml-4 transition-all duration-200 hover:bg-gray-600  font-bold  p-2 sm:p-4 rounded-2xl text-white font-oxanium italic ">Delete</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home

