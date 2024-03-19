import React from "react"
import { Link } from "react-router-dom"
const Categories = () => {
  const data = [
    {
      cateImg: "❤️",
      cateName: "Valentine",
      path: "/Valentine",
      
    },
    {
      cateImg: "🎂",
      cateName: "Birthday",
      path: "/Valentine",
    },
    {
      cateImg: "💍",
      cateName: "Anniverry",
      path: "/Valentine",
    },
    {
      cateImg: "🍰",
      cateName: "Cakes",
      path: "/Valentine",
    },
    {
      cateImg: "💐",
      cateName: "Flowers",
      path: "/Valentine",
    },
    {
      cateImg: "✍🏻",
      cateName: "Personalised",
      path: "/Valentine",
    },
    {
      cateImg: "🪴",
      cateName: "Plant",
      path: "/Valentine",
    },
    {
      cateImg: "🍫",
      cateName: "Chocolates",
      path: "/Valentine",
    },
    {
      cateImg: "🖼️",
      cateName: "Frames",
      path: "/Valentine",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <Link to={value.path}>
            <div className='box f_flex' key={index}>
              <span>{value.cateImg}</span>
              <span>{value.cateName}</span>
            </div>
              </Link>
          )
        })}
      </div>
    </>
  )
}

export default Categories