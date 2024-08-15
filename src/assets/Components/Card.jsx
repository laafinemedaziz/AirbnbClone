import star from '../Images/star.png'
export function Card ({image,rating,number,country,text,pricing}){
    return(
        <div className="card">
            <img src={image} alt='image of person' className='card--image' />
            <div className='infos'>
                <img src={star} alt="star" />
                <span> {rating}</span>
                <span className='work'> ({number}) • {country}</span>
                <p>{text}</p>
                <p><strong>From ${pricing} </strong>/ person</p>
            </div>

        </div>
    )
}