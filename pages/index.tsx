import Head from "next/head";
import Button from "../components/button/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
  function submitPlans() {
    console.log(document.getElementById("planButton"))
  }; 
  function submitDone() {
    console.log(document.getElementById("finButton"))
  }; 

  return (
    <div className={styles.container}>
      <Head>
        <title>12 Books</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Books I plan to read</h1>
        <label>Enter your planned books here: </label>
        <input type="text" id="plannedReads"  placeholder="plan"></input>
        <button onClick={() => submitPlans()} id="planButton" type="button">Submit</button>
        <ul>
          <li>
            Neil Gaiman - Neverwhere
          </li>
          <li>
            Monstress - Marjorie Liu
          </li>
        </ul>
        <h1>Books I have read</h1>
        <label>Enter your finished reads here: </label>
        <input type="text" id="finishedReads" placeholder="done"></input>
        <button onClick={() => submitDone()} id="finButton" type="button">Submit</button>
      </main>
    </div>
  );
}
