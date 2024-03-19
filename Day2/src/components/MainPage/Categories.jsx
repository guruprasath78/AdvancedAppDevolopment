import React from "react"
const Categories = () => {
  const data = [
    {
      cateImg: "❤️",
      cateName: "Valentine",
    },
    {
      cateImg: "🎂",
      cateName: "Birthday",
    },
    {
      cateImg: "💍",
      cateName: "Anniverry",
    },
    {
      cateImg: "🍰",
      cateName: "Cakes",
    },
    {
      cateImg: "💐",
      cateName: "Flowers",
    },
    {
      cateImg: "✍🏻",
      cateName: "Personalised",
    },
    {
      cateImg: "🪴",
      cateName: "Plant",
    },
    {
      cateImg: "🍫",
      cateName: "Chocolates",
    },
    {
      cateImg: "🎁",
      cateName: "Combo",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <span>{value.cateImg}</span>
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories