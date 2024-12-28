import React, { useEffect, useState } from 'react';
import '../styles/App.css'; // Ensure the CSS file is linked
import cardimage from '../assets/cardimage/cardillustration.svg';

const ExploreCard = ({ filterCategory, filterValue, toggleBookmark, bookmarkedJobs }) => {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    // Fetch cards data
    useEffect(() => {
        fetch('cardsData.json') // Replace with the correct path
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
                setFilteredCards(data); // Initially display all cards
            })
            .catch((err) => console.error('Error fetching cards data:', err));
    }, []);

    // Filter cards whenever the filter value or category changes
    useEffect(() => {
        if (filterValue.trim() === '') {
            setFilteredCards(cards); // Show all cards if no filter value is provided
        } else {
            const filtered = cards.filter((card) =>
                String(card[filterCategory])
                    .toLowerCase()
                    .includes(filterValue.toLowerCase())
            );
            setFilteredCards(filtered);
        }
    }, [filterValue, filterCategory, cards]);

    const isBookmarked = (card) => {
        return bookmarkedJobs.some((bookmark) => bookmark.id === card.id);
    };

    return (
        <div className='w-[812px] mx-auto'>
            <h2 className="text-left text-lg mb-4">Jobs card:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-cardBGColor border border-gray-300 rounded-lg shadow-md p-6 text-left max-w-[300px] mx-auto flex flex-col justify-between h-full"
                    >
                        {/* Image Section */}
                        <div className="mb-4">
                            <img
                                src={cardimage} // Ensure 'image' is a property in your JSON
                                alt={card.title}
                                className="rounded-t-md w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex-grow mb-4">
                            <h3 className="text-lg font-semibold text-textPrimaryColor mb-2">{card.title}</h3>
                            <p className="text-textSecondary01Color text-sm mb-1">
                                <strong>Job Type:</strong> {card.jobType}
                            </p>
                            <p className="text-textSecondary01Color text-sm mb-1">
                                <strong>Deadline:</strong> {card.deadline}
                            </p>
                            <p className="text-textSecondary02Color text-sm mb-4">{card.description}</p>
                        </div>

                        {/* Buttons Section */}
                        <div className="mt-auto">
                            <div className="flex justify-between">
                                <button className="bg-primaryButtonColor text-textPrimaryColor py-2 px-4 rounded hover:bg-hoverButtonColor">
                                    <a
                                        href={card.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Link
                                    </a>
                                </button>

                                <button
                                    onClick={() => toggleBookmark(card)} // Call toggleBookmark when clicked
                                    className={`bg-primaryButtonColor text-textPrimaryColor py-2 px-4 rounded hover:bg-hoverButtonColor ${isBookmarked(card) ? 'bg-red-500' : ''}`}
                                >
                                    {isBookmarked(card) ? 'Unfavorite' : 'Favorite'}
                                </button>
                            </div>
                            <div className="mt-4"></div> {/* Maintain constant spacing */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreCard;
