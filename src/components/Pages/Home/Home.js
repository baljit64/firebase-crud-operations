import React from 'react'
import Card from './Card'
import { DeletePost } from './Card'
import { Fluid, Container, CardWrap } from './Home.styles'
// import fire from '../fire'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import { useDispatch, useSelector } from 'react-redux'
// import { MDBBtn } from "mdbreact";
// https://database-table1-default-rtdb.firebaseio.com/
import { fetchUser } from '../../../actions/actionCreators'
// import auth from '../../../Reducers/Auth'
function Home() {
  const dispatch = useDispatch()
  const url = "https://images.app.goo.gl/YhXfWu5gHK4G8XkX9"
  const backendData = [
    { id: 1, img: img1, like: true, title: "Grocery List", description: "Milk, Soup, Bread", createdat: "01-18-2021" },
    { id: 4, img: img2, like: false, title: "Math Homework", description: "Remember to finish question 8-10 before monday", createdat: "12-01-2020" },
    { id: 5, img: img3, like: true, title: "Call James", description: "Ask him about the company party.", createdat: "12-30-2020" },
    { id: 3, img: img4, like: false, title: "Call James", description: "Ask him about the  party.", createdat: "12-30-2019" },
    { id: 2, img: img1, like: true, title: "Call James", description: "Ask him about the technology.", createdat: "12-30-2021" }
  ]
  const items = useSelector(state => state.auth.users)
  console.log("fetched", items)
  const dataToRedux = () => {
    dispatch(fetchUser(backendData))
  }

  return (
    <Fluid>
      <Container>
        <CardWrap>
          {items && items.map((m, i) =>
            <Card data={m} key={i} />
          )}
        </CardWrap>
        <DeletePost onClick={dataToRedux}>Show Posts</DeletePost>
      </Container>
    </Fluid>
  )
}

export default Home
