const Card = (props) => {
  console.log(props)
      return   (
        <div>
        
    Some States I have data on {props.state}
    {props.stateFlower.name}
    {props.population}
    {props.capitalCity}


        </div>
      )
    }
  
  export default Card