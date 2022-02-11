import React from 'react'
import axios from 'axios'
import { Page } from "../components";

const Home = () => {

React.useEffect(() => {
const fetchPeople = async () => {
  const res = await axios.get("https://mocki.io/v1/2a7e2afa-c7a0-49ab-bb50-bfc0944b3069")
  console.log(res.data)
}  
fetchPeople()
}, [])

  return (
      <Page>
          hello home
      </Page>
  )
}

export default Home;