import './App.css'
import CardsContainer from './CardsContainer'
import Header from './Header'
import Blog from './blog'
import Card from './Card'
import HeroSection from './HeroSection'
import ImageSlider from './ImageSlider'
 

const App = () => {

  return   (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Blog></Blog>
      <CardsContainer></CardsContainer>
      
    </div>
  )
}



export default App
