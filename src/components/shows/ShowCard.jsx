import { Link } from "react-router-dom"

const ShowCard = ({ name, image, summary }) => {
    // split the summary into an array , take first 10 elements, then join those 10 elements , and then replace the html tags
    const summaryStripped = summary ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') : 'No description     '
    return <div>
        <div>
            <img src={image} alt={name} />
        </div>
        <h1 >{name}</h1>
        <p>{summaryStripped}</p>
        <div>
            <Link to="/">Read More</Link>
            <button type="button">Star me!!!</button>
        </div>
    </div>
}

export default ShowCard