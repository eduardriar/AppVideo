import React, {useState} from "react";
import '../assets/components/Search.scss'
import { connect } from "react-redux";
import { searchResult } from "../actions";

function Search(props) {
  const [inputValue, setInputValue] = useState({title: ''});
  const handleSearch = (event) => {
    
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
    console.log(inputValue);
    props.searchResult(inputValue);
    
  }

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input name="title" type="text" className="input" placeholder="Buscar..." onChange={handleSearch}/>
    </section>
  );
}

const mapDispatchToProps = {
  searchResult
}

export default connect(null, mapDispatchToProps)(Search)
