import React from 'react'


const Card = (props) => {
  return (
    <div className="relative group cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 max-w-md mb-8 rounded-md">
    <img
      src={props.imgSrc}
      alt="Imagen de la colección"
      width={600} 
      height={300} 
      layout="responsive"
      className="object-cover min-h-full transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/60 group-hover:via-black/60 group-hover:to-black/70">
    <div className="absolute bottom-0 w-full text-center mb-8">
      <h1 className="font-dmserif text-2xl font-bold text-white opacity-100 group-hover:opacity-100 transition-opacity duration-300 lg:text-4xl">
        {props.title}
      </h1>
      <div className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-lg italic text-white">{props.text}</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-slate-800 mt-2">
          Explore collection
        </button>
        </div>
      </div>
    </div>
  </div>
);
};


export default Card
