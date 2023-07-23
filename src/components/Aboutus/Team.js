"use client";

import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const [contributors, setContributors] = useState([]);
  
  const getContributors = async () => {
    await fetch("https://api.github.com/repos/SrijanShovit/carbonops-v2/contributors", {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      setContributors(data);
    }).catch(error=>{
      console.log(`Github Api Error: ${error}`);
    })
  };

  useEffect(()=>{
    getContributors();
  },[])
  
  return (
    <div>
      <h2 className="text-center text-4xl font-bold">Meet Our Team</h2>
      <div className="md:grid grid-cols-4 flex flex-col mx-[10vw] gap-10 md:mt-[5vh] justify-center items-center">
        {contributors?.map((item)=>{
            return(<TeamCard item = {item} key={item?.id} />)        
        })}
      </div>
    </div>
  );
};

export default Team;
