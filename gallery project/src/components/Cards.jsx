import React from 'react'

const Cards = (props) => {
  return (
    <div>
      <a href={props.ele.url} target="_blank">
            <div className="h-40 w-44 bg-white overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={props.ele.download_url}
                alt=""
              />
            </div>
            <h3 className="font-bold text-lg">{props.ele.author}</h3>
          </a>
    </div>
  )
}

export default Cards
