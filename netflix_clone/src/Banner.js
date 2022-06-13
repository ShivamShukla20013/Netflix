import React from 'react';
import './Banner.scss';

function Banner() {

    function truncate(string, char) {
        return string?.length > char ? string.substr(0, char - 1)+ '...' : string
    }



  return (
    <header className='banner' style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">
                Movie Name
            </h1>

            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">Add to list</button>
            </div>

            <h1 className="banner__description">
                {
                    truncate(`This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description
                    This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description
                    This is a test descriptionThis is a test descriptionThis is a test description
                    This is a test descriptionThis is a test description`, 150)
                }
            </h1>

            <div className="banner--fadeBottom" />
        </div>
    </header>
  )
}

export default Banner;