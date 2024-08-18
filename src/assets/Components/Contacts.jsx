import { Card } from "./Card"
import Data from './Data'
export function Contacts(){
    var Cards = Data.map(card =>{
        return(
            <Card card = {card}/>
        )
    })
    return(<div className="contacts">
        {Cards}
    </div>
    )
}