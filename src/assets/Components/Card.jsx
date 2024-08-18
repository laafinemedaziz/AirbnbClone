import star from '../Images/star.png'
export function Card ({card}){
    let badgeText
    if (card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (card.country === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText != null && <div className="card--badge">{badgeText}</div>}
            <img src={card.image} alt='image of person' className='card--image' />
            <div className='infos'>
                <img src={star} alt="star" />
                <span> {card.rating}</span>
                <span className='work'> ({card.number}) • {card.country}</span>
                <p>{card.text}</p>
                <p><strong>From ${card.pricing} </strong>/ person</p>
            </div>

        </div>
    )
}