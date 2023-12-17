import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function NewMessage() {
  const [name, setName] = useState()
  const [message, setMessage] = useState()
  const navigate = useNavigate()

  function getDate() {
    const currentDate = new Date();
    const formattedDateString = currentDate.toISOString().slice(0, 19).replace('T', ' ');
    return formattedDateString
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const added = getDate()
      await axios.post("http://localhost:2023/messages", {name, message, added})
      alert("Message added")
      navigate("/")
      window.location.reload()
    } catch (error) {
      console.error("Could not add message")
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-bold mb-10">
        Add a new message
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          placeholder="Your name"
          max={10}
          required
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <textarea
          className="textarea textarea-primary h-[100px]"
          placeholder="Your message"
          required
          value={message}
          onChange={(e) => {setMessage(e.target.value)}}
        ></textarea>
        <button type="submit" className="btn btn-neutral">Submit</button>
      </form>
    </div>
  );
}

export default NewMessage;
