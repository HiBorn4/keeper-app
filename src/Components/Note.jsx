import React from "react";
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';

function Note () {
    return <div className="main_note">
    <form>
        <input type="text" placeholder="Title"/>
        <textarea rows="" columns="" placeholder="Write a Note"/>
        <Button></Button>
        <button></button>
    </form>
    </div>;
}

export default Note