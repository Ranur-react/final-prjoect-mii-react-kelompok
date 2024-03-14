import React from "react";
import ProjectVery from "../../ProjectVery";

const PortoFares = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-1 border-b-[5px]  border-indigo-600 pb-2">
            Fares Analis Syahad
          </h2>

          <p className="pb-5">
            Hi, My Name Is  Fares Analis Syahad everyone calls me Very. I am a
            Fullstack Developer. I build beautifull websites with React ,
            Tailwind CSS and dotnet.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p>In backend I know Node.js, ASP Net Core, MySql, and SqlServer</p>

          <p>
            In my spare time I create YouTube videos and write blogs on my Blog.
            Where I talk about programming theory and build various projects.
          </p>
        </div>

        <div className="about-img">
          <img
            src='https://picsum.photos/400'
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
      <ProjectVery/>
    </section>
  );
};

export default PortoFares;