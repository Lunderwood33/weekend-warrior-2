import React, { useEffect, useState } from "react"
import { useHistory } from "react-router";
import "./To-doList.css"


export const ToDoList = () => {
    const [listItems, setListItems] = useState([])
    const [addListItemForm, updateAddListItemForm] = useState({

        description: "",
        userId: "",
        
        
    })
    const history = useHistory()

    const submitListItemForm = () => {
        
        const newListItem = {
            description: addListItemForm.description,
            userId: parseInt(localStorage.getItem("weekendWarrior_user_id"))
        }
        
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newListItem)
        }
        
    

        return fetch("http://localhost:8088/toDo", fetchOption)
        // .then(response => response.json())
        .then(() => {
            history.push("/")
        })
    }

    const userId = parseInt(localStorage.getItem("weekendWarrior_user_id"))



    


    const toDoListItemFetcher = () => {
        fetch(`http://localhost:8088/toDo?userId=${userId}`)
            .then(res => res.json())
            .then((data) => {
                setListItems(data)
            })
    }
    useEffect(
        () => {
            toDoListItemFetcher()

        },
        []
    )
    const deleteListItem = (id) => {
        fetch(`http://localhost:8088/toDo/${id} `, {
            method: "DELETE"
        })
        .then(() => {
            window.location.reload(false);
        })
    }
    

    return (
        <>
            <form className="toDoList">
            <h2 className="toDoList__title">To Do List</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">New Task:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...addListItemForm}
                                copy.description = event.target.value
                                updateAddListItemForm(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Task Item"
                         />
                </div>
            </fieldset>
            <button  onClick={() => submitListItemForm()} className="btn btn-primary">
                Submit Item
            </button>
            {
                listItems.map(
                    (listItem) => {
                       return <>  
                         <>
                        <p>
                            {listItem.description}
                            <button color="primary" onClick={() => {
                                            deleteListItem(listItem.id)
                                        }}>Delete</button>
                        </p>

                        </>
                         </>
                    }
                )
            }
        </form>
        </>
    )
}