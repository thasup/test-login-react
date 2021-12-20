import React, { useState } from "react";

function App() {
    const [isMouseOver, setMouseOver] = useState(false);
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <div className="container">
        <h1>
            Hello {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
        <form>
            <input name="fName" placeholder="First Name" />
            <input name="lName" placeholder="Last Name" />
            <input name="email" placeholder="Email" />
            <button 
                style={{backgroundColor: isMouseOver ? "black" : "white"}}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >Submit</button>
        </form>
        </div>
    );
}

export default App;