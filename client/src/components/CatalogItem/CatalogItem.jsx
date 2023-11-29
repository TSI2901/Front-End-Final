import './CatalogItem.css'

export default function CatalogItem({
    title,
    imgUrl,
    duration,
    categoty
}){

    return(
        <div className="item">
            <img src={imgUrl} alt={title}></img>
            <h5>{title}</h5>
            <p>Duration: {duration}</p>
            <p>{categoty}</p>
        </div>
    )
}