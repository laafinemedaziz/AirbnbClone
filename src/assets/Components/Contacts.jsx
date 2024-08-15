import { Card } from "./Card"
import Image1 from '../Images/katie-zaferes.png'
import Image2 from '../Images/wedding-photography 1.png'
import Image3 from '../Images/mountain-bike 1.png'
export function Contacts(){
    return(<div className="contacts">
        <Card 
            image = {Image1}
            rating="5.0"
            number="6"
            country="USA"
            text="Life lessons with Katie Zaferes"
            pricing="136"
        />
        <Card 
            image = {Image2}
            rating="5.0"
            number="6"
            country="USA"
            text="Learn wedding photography"
            pricing="125"
        />
        <Card 
            image = {Image3}
            rating="4.8"
            number="2"
            country="USA"
            text="Group Mountain Biking"
            pricing="50"
        />
        
    </div>
    )
}