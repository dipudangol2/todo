import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });
    const [isMobile, setIsMobile] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const isInitialLoad = useRef(false);

    useEffect(() => {
        const todosString = localStorage.getItem("todos");
        if (todosString) {
            let storedTodos = JSON.parse(todosString);
            setTodos(storedTodos);
        }

    }, []);


    useEffect(() => {
        /* Skips the save if the page is rendered for the first time */
        if (isInitialLoad.current) {
            isInitialLoad.current = false;
            return;
        }
        try {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
        catch (e) {
            alert("Local storage is not working:", e);
        }

    }, [todos]);



    useEffect(() => {
        const userAgent = navigator.userAgent || window.opera;
        setIsMobile(/android|iphone|ipad|mobile/i.test(userAgent));
    }, []);

    const todoStyle = "bg-slate-400 text-gray-900 w-4/5 p-2 sm:p-4 rounded-xl font-roboto text-lg whitespace-pre-wrap"
    const handleSave = () => {
        if (todo !== "") {
            setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
            setTodo("");
        }

    }
    const handleEdit = (e, id) => {
        let t = todos.filter(i => i.id === id);
        setTodo(t[0].todo);
        setIsEditing(true);
        handleDelete(e, id, true);



    }

    const handleDelete = (e, id, isfromEdit = false) => {

        if (isfromEdit || confirm("Are you sure?")) {
            let newTodos = todos.filter(item => {
                return item.id !== id;
            });
            setTodos(newTodos)
        }
        setIsEditing(false);

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

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSave();
        }
    }




    return (
        <div className="flex flex-col container mx-auto my-5 rounded-xl bg-gray-800 p-5 min-h-[80vh]">
            <div className="addTodo flex justify-between flex-col gap-2 my-3">
                <h2 className="text-xl text-gray-200 font-roboto font-bold">Add a ToDo</h2>
                <div className="flex gap-2">
                    <textarea
                        onChange={handleChange}
                        onKeyDown={!isMobile ? handleKeyDown : null}
                        value={todo}
                        className=" w-3/4 rounded-lg resize-none  "
                    >
                    </textarea>

                    <button onClick={handleSave}
                        className="bg-gray-700 ml-4 transition-all duration-200 hover:bg-gray-600  font-bold p-2 px-4 rounded-2xl text-white font-oxanium italic  ">
                        Save
                    </button>
                </div>
            </div>
            <h2 className="text-xl text-gray-200 font-roboto font-bold mt-4">Your ToDos</h2>
            <div className={
                todos.length > 0 ?
                    ("todos flex flex-col items-center bg-slate-500 rounded-xl mt-4 px-2 py-8")
                    :
                    "min-h-[40vh] sm:min-h-[50vh] flex justify-center items-center "
            }
            >
                {
                    todos.length > 0 ?
                        todos.map(item => {
                            return <div key={item.id}
                                className="todo w-[95%] flex flex-col  sm:flex-row gap-4 sm:gap-0  items-center justify-center p-2 my-2 border-solid  border-gray-400 border-b-2  ">
                                <div className="flex w-full  ">
                                    <span className="text-lg font-oxanium  ">{todos.indexOf(item) + 1}.</span>
                                    <div className="flex justify-center gap-6 w-full">
                                        <div
                                            className={!(item.isCompleted) ?
                                                todoStyle
                                                :
                                                todoStyle + " line-through"
                                            }
                                        >
                                            {item.todo}
                                        </div>
                                        <input
                                            className="sm:ml-2 scale-[2] sm:scale-[2.5] "
                                            name={item.id}
                                            type="checkbox"
                                            value={item.isCompleted}
                                            onChange={handleCheckbox}
                                        />
                                    </div>
                                </div>

                                <div className="buttons flex">
                                    <button
                                        onClick={
                                            (e) => handleEdit(e, item.id)
                                        }
                                        className="bg-gray-700  ml-4 transition-all duration-200 hover:bg-gray-600  font-bold  p-2 sm:p-4 rounded-2xl text-white font-oxanium italic ">Edit</button>
                                    <button
                                        onClick={(e) => {
                                            handleDelete(e, item.id)
                                        }
                                        }
                                        className="bg-gray-700 ml-4 transition-all duration-200 hover:bg-gray-600  font-bold  p-2 sm:p-4 rounded-2xl text-white font-oxanium italic ">Delete</button>
                                </div>
                            </div>
                        }
                        )
                        :
                        <h2
                            className="text-gray-200 text-5xl font-oxanium font-bold"
                        >No ToDos to display!
                        </h2>
                }
            </div>
        </div>
    )
}

export default Home

