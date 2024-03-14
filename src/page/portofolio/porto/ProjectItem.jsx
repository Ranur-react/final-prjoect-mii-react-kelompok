import React from 'react'

const ProjectItem = (props) => {
  return (
    <div>
         
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                      <img className="h-48 w-full object-cover" src={props.image} alt="Project 1" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                          <p className="text-sm font-medium text-indigo-600">
                              <a href="#" className="hover:underline">
                                  Category
                              </a>
                          </p>
                          <a href="#" className="block mt-2">
                              <p className="text-xl font-semibold text-gray-900">Project Title</p>
                              <p className="mt-3 text-base text-gray-500">Project description lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </a>
                      </div>
                      <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                              <a href="#">
                                  <span className="sr-only">Avatar</span>
                                  <img className="h-10 w-10 rounded-full" src="https://placehold.it/50x50" alt="Author" />
                              </a>
                          </div>
                          <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">
                                  <a href="#" className="hover:underline">Author Name</a>
                              </p>
                              <div className="flex space-x-1 text-sm text-gray-500">
                                  <time dateTime="2020-03-16">Mar 16, 2020</time>
                                  <span aria-hidden="true">&middot;</span>
                                  <span>6 min read</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

    </div>
  )
}

export default ProjectItem
