import React, { useState } from "react";
//import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {

  const[isExpended, setExpended]=useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expend(){
    setExpended(true);
  }

  return (
    <div>
      <form className="create-note">
        
        {isExpended ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}

        <textarea
          name="content"
          onClick={expend}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpended ? 3 : 1}
        />
        {isExpended ? <button onClick={submitNote}>
          ADD
        </button> : null}
      </form>
    </div>
  );
}

export default CreateArea;
