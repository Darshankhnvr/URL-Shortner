"use client";
import React, { useState } from "react";

const shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState(false);



  return (
    <div className="mx-auto max-w-lg bg-purple-300 my-16 p-8 rounded-lg flex flex-col">
      <h1 className="font-bold text-2xl">Generate your short URL</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={url}
          className=" focus:outline-purple-600 rounded-sm mt-2 px-4"
          placeholder="Enter your URL"
          onChange={e => {seturl(e.target.value)}}
        />
        <input
          type="text"
          value={shorturl}
          className="px-4 py-2 focus:outline-purple-600 rounded-sm"
          placeholder="Enter your prefered short URL"
          onChange={e => {setshorturl(e.target.value)}}
        />
        <button className="bg-purple-400 shadow-lg rounded-md px-1 text-white my-2">Generate</button>
      </div>
    </div>
  );
};

export default shorten;
