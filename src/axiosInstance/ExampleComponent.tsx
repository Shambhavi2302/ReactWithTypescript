// import React, { useState } from 'react';
// import {makeAPIPOSTRequset} from "./BaseAPI"; // Adjust the path accordingly
// import NavBar from '../components/NavBar';

// const ExampleComponent = () => {
//   const [data, setData] = useState([]);

//   const handleCallAPI = (apiData={}) => {
//     let options = {
//       successCallback: (response) => {
//         setData(response);
//       },
//       failureCallBack: (err) => {
//         setData(response);
//       },
//     };
//     makeAPIPOSTRequset("api/users", apiData, "",options);
//   };

//   return (
//     <div>
//       <NavBar />
//       <div>
//         <button onClick={()=> handleCallAPI({"name": "morpheus","job": "leader"})} >Call API</button>
//       </div>
//       {data.map((post) => (
//         <div key={post.id}>{post.title}</div>
//       ))}
//     </div>
//   );
// };

// export default ExampleComponent;

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { ExampleComp } from "../examplecomponent.model";
import { makeAPIPOSTRequset } from "./BaseAPI";

const ExampleComponent: React.FC = () => {
  const [data, setData] = useState<ExampleComp[]>([]);

  const handleCallAPI = (apiData: Partial<ExampleComp> = {}) => {
    let options = {
      successCallback: (response: ExampleComp) => {
        console.log("Setting data:", response);
        setData([response]);
      },
      failureCallBack: (err: any) => {
        setData([]);
      },
    };
    makeAPIPOSTRequset("api/users", apiData, "", options);
  };

  return (
    <div>
      <NavBar />
      <div>
        <button
          onClick={() => handleCallAPI({ name: "morpheus", job: "leader" })}
        >
          Call API
        </button>
      </div>
      {/* {data.map((post) => (
        <div key={post.id}>Name-{post.name}</div>
      ))} */}
      {data.map((post) => (
        <div key={post.id}>
          <p>Name: {post.name}</p> {/* Display name */}
          <p>Job: {post.job}</p> {/* Display job */}
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;
