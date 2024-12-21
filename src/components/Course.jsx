import React from 'react'
import pic7 from "../../public/more.png"
import pic8 from "../../public/python2.png"
import pic9 from "../../public/java.png"
import pic10 from "../../public/html.png"
import pic11 from "../../public/css.png"
import pic12 from "../../public/js.png"


const Course = () => {
    const cardItem=[
        {
          id:1,
          logo:pic8,
          name:"Python Coures",
          description:"Python full courses basic to advance ",
          link:"https://www.w3schools.com/python/"
        },
        {
          id:2,
          logo:pic9,
          name:"Java Coures",
          description:"java full courses basic to advance  ",
          link: "https://www.w3schools.com/java/"
        },
        {
          id:3,
          logo:pic10,
          name:"HTML Coures",
          description:"HTML full courses basic to advance  ",
          link: "https://www.w3schools.com/html/"
        },
        {
          id:4,
          logo:pic11,
          name:"CSS Coures",
          description:"CSS full courses basic to advance  ",
          link:"https://www.w3schools.com/css/"
        },
        {
          id:5,
          logo:pic12,
          name:"JS Coures",
          description:"JS full courses basic to advance ",
          link: "https://www.w3schools.com/js/"
        },
        {
          id:6,
          logo:pic7,
          name:"More courses",
          description:"More amazing courses ",
          link: "https://www.mindluster.com/"
        },
    
      ]
  return (
    <>
    <div name="Courses" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
  <div>
    <h1 className="text-3xl font-bold mb-5">Courses</h1>
    <span className="font-semibold">Featured Courses</span>
    {/* Responsive grid setup */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
      {cardItem.map(({ id, logo, name, description, link }) => (
        <div
          className="w-full border rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300"
          key={id}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              className="w-[120px] h-[120px] p-2 rounded-full border-2 mx-auto"
              alt={name}
            />
            <div className="mt-3 text-center">
              <div className="font-bold">{name}</div>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
  <hr />
</div>

    </>
  )
}

export default Course
