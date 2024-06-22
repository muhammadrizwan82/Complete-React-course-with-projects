import React from 'react'

function Card({ id, name, age, profileImage, profileUrl }) {

    return (
        <div className="relative h-[400px] w-[300px] rounded-xl mb-4">
            <a href={profileUrl} target="_blank">
                <img
                    src={profileImage}
                    alt={name}
                    className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">

                    <h1 className="text-lg font-semibold text-white">{name}</h1>
                    <h1 className="text-lg font-semibold text-white">{age}</h1>

                </div>
            </a>
        </div>
    )
}

export default Card
