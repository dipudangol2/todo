import { useState } from "react"

const Home = () => {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([]);
    const handleAdd = () => {

    }
    const handleEdit = () => {

    }
    const handleDelete = () => {

    }


    return (
        <div className="flex flex-col container mx-auto my-5 rounded-xl bg-slate-500 p-5 min-h-[80vh]">
            <div className="addTodo flex justify-between flex-col gap-2 my-3">
                <h2 className="text-lg font-bold">Add a ToDo</h2>
                <div className="flex gap-2">
                    <textarea className=" w-3/4 rounded-lg resize-none " ></textarea>

                    <button onClick={handleAdd} className="bg-gray-700 ml-4 transition-all duration-200 hover:bg-gray-900 font-bold p-2 px-4 rounded-2xl text-white ">Add</button>
                </div>
            </div>
            <h2 className="text-lg font-bold mt-4">Your ToDos</h2>
            <div className="todos">
                <div className="todo flex items-center justify-between">
                    <div className="text">{todo}</div>
                    <div className="buttons">
                        <button onClick={handleEdit} className="bg-gray-700 ml-4 transition-all duration-200 hover:bg-gray-900 font-bold p-2 px-4 rounded-2xl text-white ">Edit</button>
                        <button onClick={handleDelete} className="bg-gray-700 ml-4 transition-all duration-200 hover:bg-gray-900 font-bold p-2 px-4 rounded-2xl text-white ">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home