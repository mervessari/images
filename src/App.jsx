import { useState } from 'react'
import './App.css'
import SearchHeader from './searchHeader'
import axios from 'axios'
import ImageList from './components/ImageList';
function App() {
  const [images , setImages] = useState([]); //gelen datayı tutmak için bir state oluşturuyoruz.
  const handleSubmit = async (term) => { //term değeri benim parametre olarak gönderdiğim valueInput değeri olacak.
  
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID QQoDgjDBdTGBn56vz49C93lyK2sHcKuClNlFyIT6mwo',
      },
     params:{
        query:term,
      },
    });
    //isteği attıktan sonra gelen cevabı bir değişkende tutuyoruz. 
    setImages(response.data.results); //gelen datayı state'e atıyoruz. 
    

  }

  return (

   <div className='App'>
    <SearchHeader search={handleSubmit}/>
    <ImageList imagePlaceholders={images}/>

   </div>
  )
}

export default App
