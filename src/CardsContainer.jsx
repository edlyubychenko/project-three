
import Card from './Card'
import data from './data.json'
const CardsContainer = () => {
console.log(data)
    return   (
    <div className='cards-container'>
        <div className='cards'>
            {data.states.map((state) => {
                return <Card key={state.nickName} state={state.name}     population={state.population} stateFlower={state.stateFlower} > </Card>   
                })} 

        </div>  
    </div>
    )
  }

  export default CardsContainer 