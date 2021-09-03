import styled from "styled-components"
import * as BsIcons from 'react-icons/bs'
import { useState } from 'react'

import { likeItem, dislikeItem, deleteItem } from '../../../actions/actionCreators'
import { useDispatch } from "react-redux"
function Card(props) {
  const dispatch = useDispatch()
  const likeDisLike = (id, status) => {
    if (status === false) {
      dispatch(dislikeItem(id))

    }
    else {
      dispatch(likeItem(id))
    }
  }
  const Delete = (id) => {
    dispatch(deleteItem(id))
  }

  return (
    <CardDiv>
      <ImageWrap><Imgtag src={props.data.img} alt="cars" />
        <Like onClick={() => likeDisLike(props.data.id, props.data.like ? false : true)} liked={props.data.like}><BsIcons.BsFillHeartFill /></Like></ImageWrap>
      <CardContent>
        <H3>{props.data.title}</H3>
        <DeletePost onClick={() => Delete(props.data.id)}>Delete this post</DeletePost>
      </CardContent>
    </CardDiv>
  )
}

export default Card


// styled components
// cardwrap
const CardDiv = styled.div`
display:flex;
flex-direction:column;
position:relative;
border-top-right-radius:6px;
border-top-left-radius:6px;
background:rgba(155,155,155,0.4);
height:max-content;
&:hover{
    box-shadow:1px 1px 7px #ffffff;
 }
transition:ease all 0.3s;
`
// card img wrap
const ImageWrap = styled.div`
width:100%;
height:120px;
overflow:hidden;
`
// img
const Imgtag = styled.img`
height:100%;
width:100%;
`
// card Content
const CardContent = styled.div`
width:100%;
padding:10px;
display:flex;
flex-direction:column;
color:#fff;
`
//like 
const Like = styled.div`
height:35px;
width:35px;
position:absolute;
top:5%;
right:5%;
background:grey;
font-size:22px;
margin:auto;
z-index:3;
border-radius:50%;
text-align:center;
transition:all ease-in 0.3s;
  color: ${({ liked }) => (liked ? 'red' : '#fff')};
`
// h3
const H3 = styled.h3`
font-size:18px;
color:#fff;
font-weight:500;
line-height:24px;
`
// delete post btn

export const DeletePost = styled.button`

font-size:14px;
color:blue;
margin-left:auto;
margin-right:auto;
background:#fff;
padding:3px 5px;
outline:none;
user-select:none;
border:none;
&:hover{
  background:blue;
  color:#fff;
}
`

