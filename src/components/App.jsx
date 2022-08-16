import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const[items,setItems] = useState([])

  function addItems(addnote){
    setItems( prevValue =>{
      return [...prevValue, addnote]
    })
  }

function takeOut(id){
  setItems( prevValue => {
    return items.filter( (item,index) => {
      return index !== id
    } )
  })
}


  return (
    <div>
      <Header />
      <CreateArea btn={addItems} />
      {items.map( (item,index) => {
        return(
        <Note
         id={index}
         key={index}
         title={item.title}
         content={item.content}
         remove={takeOut}
        />
        )
      })
    }
      
      <Footer />
    </div>
  );
}

export default App;
