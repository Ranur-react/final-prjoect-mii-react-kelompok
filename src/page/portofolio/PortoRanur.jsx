import React,{useState,useEffect} from 'react'
import Profile from './porto/Profile'
import ProjectItem from './porto/ProjectItem'

const profileData = {
    name: "Rahmat Nur",
    details: "My passion lies in the automated development of integrated software solutions, particularly within the realm of software programming that seamlessly integrates systems with hardware. Proficient in languages such as C#, JavaScript, and Python, along with expertise in frameworks like .NET Core and React Native, I have successfully contributed to a diverse range of projects.",
    linkedinlink: "https://www.linkedin.com/in/rahmat-nur-620170132/"
}
const projects=[
    { image: "https://picsum.photos/200" },
    { image:"https://picsum.photos/200"},
    { image: "https://picsum.photos/200" },
    { image: "https://picsum.photos/200" },
]
const PortoRanur = () => {

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

  )
}

export default PortoRanur
