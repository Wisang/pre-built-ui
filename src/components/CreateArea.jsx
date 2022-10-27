import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isToZoom, setIsToZoom] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick() {
    setIsToZoom(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setIsToZoom(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isToZoom &&
          (<input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />)}
        <textarea
          name="content"
          onClick={handleClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="{isToZoom ? 3 : 1}"
        />
        <Zoom in={isToZoom}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
