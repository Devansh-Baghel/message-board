import React from "react";
import useSWR from "swr";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function MessageWindow() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:2023/messages",
    fetcher,
  );

  if (isLoading) return <h1>Loading ...</h1>
  if (error) return <h1>Error loading page</h1>
  return (
    <div className="overflow-auto flex flex-col-reverse border-neutral border-4 rounded-xl h-[370px] w-full py-4">
    <div>
      {data.map((item) => {
        return (
          <div className="chat chat-start flex flex-col px-4" key={item._id}>
            <div className="chat-bubble chat-bubble-primary flex flex-col">
              {item.message}
              <div className="badge badge-neutral">{item.name}</div>
            </div>
            <p>{formatDistanceToNow(new Date(item.added), {addSuffix: true})}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default MessageWindow;
