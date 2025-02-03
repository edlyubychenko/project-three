import Card from './Card'
import data from './data.json'
const CardsContainer = () => {
console.log(data)
    return   (
    <div className='cards-container'>
        <div className='cards'>
            {data.states.map((state) => {
                return <Card key={state.name} population={state.statePopulation} stateBird={state.stateBird} state={state.name}> </Card>   
                })} 

        </div>   
    </div>
    )
  }

  export default CardsContainer 