import image1 from '../Images/image 22.png'
import image2 from '../Images/image 23.png'
import image3 from '../Images/image 24.png'
import image4 from '../Images/image 25.png'
import image5 from '../Images/image 26.png'
import image6 from '../Images/image 27.png'
import image7 from '../Images/image 28.png'
import image8 from '../Images/image 29.png'
import image9 from '../Images/image 30.png'
export function ImagesArea(){
    return(
        <div className="gallery">
            <div className="Area1"><img src={image7} alt = "Img" className='imgs'/></div>
            <div className="Area2">
                <img src={image9} className='imgs' alt='Img'/>
                <img src={image5} className='imgs' alt='Img'/>
            </div>
            <div className="Area3">
                <img src={image6} className='imgs' alt='Img'/>
                <img src={image8} className='imgs' alt='Img'/>
            </div>
            <div className="Area4">
                <img src={image1} className='imgs' alt='Img'/>
                <img src={image2} className='imgs' alt='Img'/>
            </div>
                <div className="Area5">
                <img src={image4} className='imgs' alt='Img'/>
                <img src={image3} className='imgs' alt='Img'/>
            </div>
        </div>
    )
}