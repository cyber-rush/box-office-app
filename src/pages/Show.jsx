import { useParams } from "react-router-dom"

const Show = () => {
    const { showId } = useParams()
    return <div>Show Page {showId}</div>
}

export default Show