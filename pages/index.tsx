import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.css";
import { v4 as uuidv4 } from "uuid";

const bookList = [
  {
    id: 1,
    name: "Neverwhere",
  },
  {
    id: 2,
    name: "Monstress",
  },
];

export default function Home() {
  const [list, setList] = React.useState(bookList);
  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name, id: uuidv4() });

    setList(newList);

    setName("");
  }

  return (
    <div className={styles.main}>
      <Head>
        <title>12 Books</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Books to read</h1>
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />

      <List list={list} />
    </div>
  );
}

const AddItem = ({ name, onChange, onAdd }) => (
  <div className={styles.container}>
    <input type="text" value={name} onChange={onChange} />
    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>
);

AddItem.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

const List = ({ list }) => (
  <ul className={styles.list}>
    {list.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

List.propTypes = {
  list: PropTypes.array.isRequired,
};
