const ShowMainData = ({ image, name, rating, summary, genres }) => {
    return <h1>
        <img src={image ? image.original : '/not-found-image.png'} alt={name} />
        <div>
            <h1>{name}</h1>
            <div>{rating.average || 'N/A'}</div>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
            <div>
                Genres:
                <div>
                    {
                        genres.map(genre => (
                            <span key={genre}>{genre}</span>
                        ))
                    }
                </div>
            </div>
        </div>

    </h1>
}

export default ShowMainData