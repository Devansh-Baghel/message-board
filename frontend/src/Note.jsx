import React from "react";

function Note() {
  return (
    <div className="mx-4 px-4 rounded-3xl bg-blue-50 md:max-w-2xl md:mx-auto md:px-8 border-blue-300 border-2 text-sm">
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="self-center ml-3">
            <span className="text-blue-500 font-semibold">Info</span>
            <div className="text-blue-500">
              <div className="mt-1">
                The message you enter will be visible publicly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
