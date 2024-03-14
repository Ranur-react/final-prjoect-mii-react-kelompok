import React, { useState, useEffect } from "react";
import Profile from "./porto/Profile";
import ProjectItem from "./porto/ProjectItem";

const profileData = {
  name: "Sabrina Nurul Hafidha",
  details:
    "Experienced software developer with a particular interest in web and mobile application development. Passionate about creating innovative and efficient software solutions to solve real-world problems. With extensive work experience and technical skills, I am ready to contribute to exciting and impactful projects.",
  linkedinlink: "https://www.linkedin.com/in/rahmat-nur-620170132/",
};
const projects = [
  { image: "https://picsum.photos/200" },
  { image: "https://picsum.photos/200" },
  { image: "https://picsum.photos/200" },
  { image: "https://picsum.photos/200" },
];
const PortoSabrina = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Profile data={profileData} />
        <div className="mt-10 flex flex-wrap gap-5">
          {projects.map((value, index) => (
            <ProjectItem key={index} image={value.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortoSabrina;
