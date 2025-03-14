import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../redux/quoteSlice";
import { useNavigate } from "react-router-dom";
import NavigationBar from '../components/NavigationBar';
import { FaTrash } from 'react-icons/fa';

const Favorite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { favorite } = useSelector((state) => state.quote);

  return (
    <nav>
      <NavigationBar />

      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Your Favorite Quotes</h1>

        {favorite.length === 0 ? (
          <p className="text-lg mt-4">No favorites yet! Go add some.</p>
        ) : (
          <ul className="mt-6 space-y-4">
            {favorite.map((fav, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-lg flex justify-between items-center max-w-lg mx-auto"
              >
                <p className="text-lg font-semibold">"{fav}"</p>
                <button
                  onClick={() => dispatch(removeFavorite(fav))}
                  className=" outline-none border-2 border-red-500 rounded-full p-2 hover:bg-red-100"
                >
                  <FaTrash size={18} />
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Button to go back */}
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
        >
          Back to Home
        </button>
      </div>
    </nav>
  );
};

export default Favorite;
