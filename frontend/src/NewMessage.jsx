import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Note from "./Note"

function NewMessage() {
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const added = new Date().toISOString();
      await axios.post("https://msg-board.adaptable.app/messages", {
        name,
        message,
        added,
      });
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Could not add message");
    }
  }

  return (
    <div className="p-6 flex items-center flex-col">
      <h1 className="text-center text-3xl font-bold mb-10">
        Add a new message
      </h1>


      <form
        className="flex flex-col gap-5 max-w-[320px]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Your name"
          maxLength="20"
          required
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <textarea
          className="textarea textarea-primary h-[100px] rounded-3xl"
          placeholder="Your message"
          maxLength="200"
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      <Note />
        <button type="submit" className="btn btn-neutral">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewMessage;
