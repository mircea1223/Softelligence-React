
import { useState, useEffect } from "react";




const ListAPI = () => {

    const [fetchedData, setFetchedData] = useState([]);
    



    useEffect(() => {
      fetch("https://rickandmortyapi.com/api/episode")
      .then(response => response.json())
         
      .then(data => setFetchedData(data))
    },[])
   


return(
 fetchedData.results?.map((item) =>
 ( <li key={item.id}>Name: {item.name} <br></br>Air Date: {item.air_date} <br></br>EpisodeNo. : {item.episode} </li>
 )))

}
export default ListAPI;