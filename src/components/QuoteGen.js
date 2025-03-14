import React, { useEffect} from 'react';
import { FaHeart } from 'react-icons/fa';
import SyncLoader from 'react-spinners/SyncLoader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote, addToFavorite } from '../redux/quoteSlice';
import { useNavigate } from 'react-router-dom';

const QuoteGen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { quote, loading, error } = useSelector((state) => state.quote);

    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch]);

    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold">Welcome to Quote Generator</h1>

            <button
                onClick={() => dispatch(fetchQuote())}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
                {loading ? "Loading..." : "Generate Quote"}
            </button>

            {/* Loading */}

            {loading && (
                <div className="flex justify-center mt-4">
                    <SyncLoader color="#000000" size={9}/>
                </div>
            )}


            {/* Error */}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {/*Card */}
            <div className="bg-gray-100 p-5 mt-6 rounded-lg shadow-lg max-w-lg mx-auto flex items-center justify-between">
                <p className="text-lg font-semibold">"{quote}"</p>
                <button
                    onClick={() => dispatch(addToFavorite())}
                    className="text-red-500 hover:text-red-700"
                >
                    <FaHeart size={24} />
                </button>
            </div>

            {/* Favorites Page */}
            <button
                onClick={() => navigate("/favorite")}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6"
            >
                View Favorite Quotes
            </button>
        </div>
    );
};

export default QuoteGen;
