import './CatalogItem.css'

export default function CatalogItem({
    title,
    imgUrl,
    createdOn
}){

    return(
        <div className="item">
            <img src={imgUrl} alt={title}></img>
            <h5>{title}</h5>
            <p>Created On: {Date(createdOn)}</p>
        </div>
    )
}