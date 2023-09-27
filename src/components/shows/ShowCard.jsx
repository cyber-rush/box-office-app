
const ShowCard = ({ name, image, summary, id }) => {
    // split the summary into an array , take first 10 elements, then join those 10 elements , and then replace the html tags
    const summaryStripped = summary ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') : 'No description     '
    return <div>
        <div>
            <img src={image} alt={name} />
        </div>
        <h1 >{name}</h1>
        <p>{summaryStripped}</p>
        <div>
            <a href={`show/${id}`} target="_blank" rel="noreferrer">Read More</a>
            <button type="button">Star me!!!</button>
        </div>
    </div>
}

export default ShowCard