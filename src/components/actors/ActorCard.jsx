const ActorCard = ({ name, image, country, birthday, deathday, gender }) => {
    return (
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <h1>{name} {!!gender && `(${gender})`}</h1>
            <p>{country ? `Comes from ${country}` : 'No country known'}</p>
            <p>{birthday && `Born ${birthday}`}</p>
            <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
        </div>
    )
}

export default ActorCard
//To always make sure that gender is a boolean-ish value we use !! or Boolean(gender) --> line no. 7