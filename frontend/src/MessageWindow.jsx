import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function MessageWindow() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:2023/messages",
    fetcher,
  );

  console.log(data);
  return (
    <div className="border-neutral border-4 rounded-xl h-[370px] w-full p-4">
      {data.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MessageWindow;
