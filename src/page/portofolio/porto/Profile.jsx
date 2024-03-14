import React from 'react'

const Profile = (props) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{props.data.name}</h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {props.data.details}
        </p>
        <div className="mt-5 max-w-2xl mx-auto flex justify-center">
          <a href={props.data.linkedinlink} className="text-base font-medium text-indigo-600 hover:text-indigo-500">
            Get in touch (linkedin)
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
