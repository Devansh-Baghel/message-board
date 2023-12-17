import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function MessageWindow() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:2023/messages",
    fetcher,
  );

  if (isLoading) return <h1>Loading ...</h1>
  if (error) return <h1>Error loading page</h1>
  return (
    <div className="border-neutral border-4 rounded-xl h-[370px] w-full py-4">
      {data.map((item) => {
        return (
          <div className="chat chat-start" key={item._id}>
            <div className="chat-bubble chat-bubble-primary flex flex-col">
              {item.message}
              <div className="badge badge-neutral">{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageWindow;
