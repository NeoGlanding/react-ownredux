import React from 'react';
import Todo from '../components/Todo';

const FirebaseComponent = () => {
    const [title, setTitle] = React.useState("");

    const changeHandler = e => {
        setTitle(e.target.value);
    }
    

    return (
        <div>
            <form>
                <input placeholder="todo" onChange={changeHandler} />
                <button>add</button>
            </form>
            <Todo />
        </div>
    )
}

export default FirebaseComponent;
