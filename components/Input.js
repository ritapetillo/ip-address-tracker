import React, { useState, useEffect } from "react";
import styles from "../styles/Input.module.css";

function Input({ handleSubmit, ipTyped }) {
  const [ip, setIp] = useState("34.167.36.21");

  useEffect(() => {
    handleSubmit(ip);
    return () => {};
  }, [0]);

  const submitIp = (e) => {
    e.preventDefault();
    handleSubmit(ip);
  };
  const changeInput = (e) => {
    setIp(e.target.value);
    // console.log(ip);
  };

  return (
    <div className={styles.input}>
      <div className="text-center">
        <h1>IP Address Tracker</h1>
      </div>
      <div className="">
        <form className="flex flex-row" onSubmit={submitIp}>
          <input
            type="text"
            name="ip"
            id="ip"
            placeholder="Search for any IP address or domain"
            className="rounded-l-lg px-6 py-2 h-16 flex-grow outline-none border-o cursor-pointer "
            onChange={changeInput}
            value={ip}
          />
          <button className="bg-black py-2 rounded-r-lg text-white h-16 w-16 outline-none hover:bg-opacity-50">
            <img
              src="/images/icon-arrow.svg"
              alt="send"
              className="self-center mr-auto ml-auto"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
