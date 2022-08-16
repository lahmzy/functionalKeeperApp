import React, { useState } from "react";

function CreateArea(props) {
  const [addnote, setAddnote] = useState({
    title: "",
    content: ""
  });

  function onChangeNote(event) {
    const { name, value } = event.target;

    setAddnote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={onChangeNote}
          name="title"
          placeholder="Title"
          value={addnote.title}
        />
        <textarea
          onChange={onChangeNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={addnote.content}
        />
        <button
          onClick={(event) => {
            props.btn(addnote);
            event.preventDefault();
            setAddnote((prevValue) => {
              return {
                title: "",
                content: ""
              };
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
