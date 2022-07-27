import React from "react";



const Header = () => {
  return (
    <div  className="Navbar_field container">

      <div  >
          <Link to="/"  className="logo">
            Movies-Hub
          </Link>
      </div>

      <Form />

      <ul>
          <li >
                 <Link to="/popular" className="popular">
                    Popular
                </Link>
            </li>
            <li >
                <Link to="/myFavorites" className="myFavorites">
                    My Favorites
                </Link>
            </li>
            <li >
                <Link to="/topSearches" className="topSearches">
                    Top Searches
                </Link>
            </li>
           
        </ul>   

    </div>
  );
};

export default Header;
