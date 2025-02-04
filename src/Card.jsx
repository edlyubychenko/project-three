const Card = (props) => {
  console.log(props)
      return   (
        <div>
        
    Some States I have data on {props.state}
    {props.stateFlower.name}
    {props.population}


        </div>
      )
    }
  
  export default Card