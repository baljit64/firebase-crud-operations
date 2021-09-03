import styled from 'styled-components';

export const Fluid = styled.div`
width:100%;
background:#000;
`;
export const Container = styled.div`
max-width:1140px;
width:100%;
margin-left:auto;
margin-right:auto;
background:transparent;
padding:0 15px;
`
export const CardWrap = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
gap:10px;
padding:50px 0 ;
min-height:100vh;
@media only screen and (max-width:900px){
  grid-template-columns:repeat(3,1fr)
}
@media only screen and (max-width:767px){
  grid-template-columns:repeat(2,1fr)
}
@media only screen and (max-width:470px){
  grid-template-columns:repeat(1,1fr)
}
`