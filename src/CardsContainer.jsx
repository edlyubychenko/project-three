
import Card from './Card'
import data from './data.json'
const CardsContainer = () => {
console.log(data)
    return   (
    <div className='cards-container'>
        <div className='cards'>
            {data.states.map((state) => {
                return <Card key={state.stateFlower.image} population={state.statePopulation} stateFlower={state.stateFlower.image} state={state.name}> </Card>   
                })} 

        </div>   
    </div>
    )
  }

  export default CardsContainer 