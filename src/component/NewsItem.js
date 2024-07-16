import React from 'react';
import './NewsItem.css';

const NewsItem = ({ title, description, imgUrl, newsUrl, mode, author, date, source }) => {

    const handleImageError = (event) => {
        event.target.src = "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1441948310.jpg?c=16x9&q=w_800,c_fill";
    }

    return (
        <div className="my-3">
            <div className={`card ${mode === "dark" ? "bg-card" : ""}`} id="newsCard">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className={'badge rounded-pill bg-danger'}>
                        {source}
                    </span>
                </div>
                <img
                    src={imgUrl || "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1441948310.jpg?c=16x9&q=w_800,c_fill"}
                    className="card-img-top"
                    alt="..."
                    onError={handleImageError}
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small className={`${mode === "dark" ? "text-light" : "text-dark"}`}>
                            By {!author ? "unknown" : author} on {new Date(date).toUTCString()}
                        </small>
                    </p>
                    <a
                        rel="noreferrer"
                        href={newsUrl}
                        target="_blank"
                        className={`btn btn-sm ${mode === "dark" ? "btn-danger" : "btn-dark"}`}
                    >
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
