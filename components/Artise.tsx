
import React, { FC } from 'react';

interface ArtistCardProps {
    artistName: string;
    songTitle: string;
    imageUrl: string; // Add the imageUrl property to the interface
}

const ArtistCard: FC<ArtistCardProps> = ({ artistName, songTitle, imageUrl }) => {
    return (
        <div className="bg-white rounded-lg p-4  w-64 border-2  shadow-2xl ">
            <div className="relative">
                <div className="rounded-full w-32 h-32 mx-auto overflow-hidden   mb-4">
                    <img src={imageUrl} alt="Artist" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="mt-4">
                <p className="text-gray-800 font-bold text-lg">{artistName}</p>
            </div>
            <div className="mt-4 flex justify-between items-center"></div>
        </div>
    );
};

export default ArtistCard;
