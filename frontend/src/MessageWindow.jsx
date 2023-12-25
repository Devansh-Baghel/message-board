import React from "react";
import useSWR from "swr";
import formatDistance from "date-fns/formatDistance";
import Loading from "./Loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function MessageWindow() {
  const { data, error, isLoading } = useSWR(
    "https://msg-board.adaptable.app/messages",
    fetcher,
  );

  if (isLoading) return <Loading />
  if (error) return <h1>Error loading messages</h1>
  return (
    <div className="overflow-auto flex flex-col-reverse border-neutral border-4 rounded-xl h-[460px] w-full py-4">
    <div>
      {data.map((item) => {
        return (
          <div className="chat chat-start flex flex-col px-4" key={item._id}>
            <div className="chat-bubble chat-bubble-primary flex flex-col whitespace-pre-wrap">
              {item.message}
              <div className="badge badge-neutral">{item.name}</div>
            </div>
            <p>{formatDistance(new Date(item.added), new Date(),{addSuffix: true})}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default MessageWindow;
