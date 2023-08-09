"use client";

import { ExperienceConstant } from "@/constants/ExperienceConstant";
import { useState } from "react";
import "../app/globals.css";

const Experience = (props: any) => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  return (
    <div ref={props.experienceRef} className="scroll-my-20">
      <div className="text-5xl text-center p-6">Experience</div>
      <div className="flex mt-28">
        <div className="flex flex-col">
          {ExperienceConstant.map(({ title }, idx) => (
            <div
              key={idx}
              className={"p-4 border-solid rounded-xl border m-10 border-gray-300 hover:bg-gray-200" + (idx === selectedExperience ? " bg-gray-200": "")}
              onClick={() => setSelectedExperience(idx)}
            >
              {title}
            </div>
          ))}
        </div>
        <div className="w-1/2 m-10">
          {
            <ul>
              {ExperienceConstant[selectedExperience].description.map(
                (item) => (
                  <li className="p-4 list-disc">{item}</li>
                )
              )}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default Experience;
