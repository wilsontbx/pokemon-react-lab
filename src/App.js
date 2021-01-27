import React, { useState } from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";

function App() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(null);
  const [stat, setStat] = useState(null);

  function ModalCard(props) {
    let { show, value, stat } = props;
    return (
      <>
        <Modal
          size="sm"
          show={show}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <ModalHeader>
            <Modal.Title id="example-modal-sizes-title-sm">
              {value}'s stat
            </Modal.Title>
            <button onClick={(e) => showStat(e, false)}>Close</button>
          </ModalHeader>
          <Modal.Body>{stat}</Modal.Body>
        </Modal>
      </>
    );
  }

  function PokemonCard({ pokemon }) {
    const { id, name, type, base } = pokemon;
    const baseStat = [];
    Object.keys(base).forEach((key) => {
      baseStat.push(
        <div>
          {key}: {base[key]}
        </div>
      );
    });
    return (
      <div className="card">
        <div>
          {id < 10 ? "#00" : "#0"}
          {id}
        </div>
        <div className="image-card">
          {" "}
          <img
            className="image"
            src={process.env.PUBLIC_URL + `/pokemonImage/${id}.png`}
            alt=""
          ></img>
        </div>
        <div>{name.english}</div>
        <div className="element">
          {type.map((element) => (
            <div className={getElement(element)}>{element}</div>
          ))}
        </div>
        <div className="stat">{baseStat}</div>
        <button
          className="btn btn-success"
          value={name.english}
          onClick={(e) => {
            showStat(e, true, baseStat);
          }}
        >
          More Stat
        </button>
      </div>
    );
  }

  function showStat(e, boo, stat) {
    const { value } = e.target;
    setShow(boo);
    setValue(value);
    setStat(stat);
  }

  function getElement(classes) {
    return "element-box " + colour[classes.toLowerCase()];
  }

  const colour = {
    grass: "green",
    fire: "red",
    poison: "purple",
    flying: "skyblue",
    water: "blue",
    bug: "brown",
    normal: "grey",
    electric: "yellow",
    ground: "rock",
    fairy: "pink",
  };

  return (
    <div className="App container-md">
      {pokemonData.map((element) => (
        <PokemonCard pokemon={element} />
      ))}
      <ModalCard show={show} value={value} stat={stat} />
    </div>
  );
}

export default App;
