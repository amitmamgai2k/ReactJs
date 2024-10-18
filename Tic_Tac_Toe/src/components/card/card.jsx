import './card.css'
import Icon from "../icon/icon";
function Card({player,onPlay,index}){
    let icon = <Icon/>
    if (player= 'x'){
        icon = <Icon name = 'cross'/>
    }
    else if (player = 'O'){
        icon = <Icon name= 'circle'/>
    }
    return(
        <>
        <div className="card" onClick={()=>onPlay(index)}>
          {icon}
        </div>
        </>
    )
}
export default Card;