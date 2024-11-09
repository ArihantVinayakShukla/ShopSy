import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ onSearch, cartItemCount }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevents default form submission behavior
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim());
        }
        setSearchQuery('');
    };

    return (
        <div className="wrapper">
            <header className="container">
                <div className="header py-2">
                    <div className="grid">
                        <Link to="/" className="link">
                            <h1 className="brand">ShopSy</h1>
                        </Link>
                        <div className="formContainer">
                            <form className="search" onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                    />
                                </div>
                                <button type="submit" className="search-btn">
                                    Search
                                </button>
                            </form>
                        </div>
                        <Link to="/cart" className="link headerCart">
                            <img className="cartImg" src="/cart.svg" alt="cart" />
                            {cartItemCount > 0 && (
                                <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                            )}
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export { NavBar };
