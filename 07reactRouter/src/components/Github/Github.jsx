// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/NaeemSlayer")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })   
    // }, [])
    
  return (
    <div className="text-center m-4 p-4 bg-gray-500 text-white text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="GitHub profile picture" className="w-3xs" />
    </div>
  );
}

export default Github;

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/NaeemSlayer")
    return response.json()
}