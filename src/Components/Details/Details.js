import React from 'react';
import styled from 'styled-components';


const Details =()=>{
    return(
        <Container>
            <Background>
                <img alt='' src='https://www.themoviedb.org/t/p/w780/mEL6An10IrsdgBBtTLbiqElCZTi.jpg'/>

            </Background>   
            <ImageTitle>
                <img alt='' src='https://www.laughingplace.com/w/wp-content/uploads/2018/04/BAO_LOGO_FINAL_updated.jpg'/>
            </ImageTitle>         
            <Controls>
                <PlayButton>
                    <img alt='' src='/images/play-icon-black.png'/>
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img alt='' src='/images/play-icon-white.png'/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupButton>
                    <img alt='' src='/images/group-icon.png'/>
                </GroupButton>
            </Controls>
            <SubTitle>
                2018 * 7m * Family,Fantasy,Kids,Animation
            </SubTitle>
            <Descryption>
                ajhfkasjd.fnasd.,fmas/kld.Fmas.dFM;asdfas
            </Descryption>
        </Container>
    )
}
export default Details;

const Container=styled.div `
    min-height: calc(100vh-70px);
    padding:0 calc(3.5vw+5px);
    position: relative;
`
const Background=styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:-1;
    opacity:0.8;
   

    img{
        height: 100%;
        width: 100%;
        object-fit:cover;
    }
`

const ImageTitle=styled.div `
    min-height:170px;
    min-width:200px;
    height:30vh;
    width:35vw;

    img{
        height:100%;
        width:100%;
        object-fit:contain;
    }


`

const Controls=styled.div `
    display:flex;
    align-items:center;

`

const PlayButton=styled.button `
    border-radius:4px;
    font-size:15px;
    display:flex;
    align-items:center;
    height:56px;
    background:rgb(249,249,249);
    border:none;
    padding:0px 24px;
    margin-right:22px;
    letter-spacing:1.8px;
    cursor:pointer;
    text-transform:uppercase;

    &:hover{
        background:rgb(198,198,198);
    }
`

const TrailerButton=styled(PlayButton)  `
    background:rgba(249,249,249,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    
`

const AddButton=styled.button `
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor:pointer;
    margin-right:16px;

    span{
        font-size:30px;
    }
`

const GroupButton=styled(AddButton) `
    background:rgb(0,0,0)
`

const SubTitle=styled.div `
    color:rgb(249,249,249);
    font-size:15px;
    min-heit:20px;
    margin-top:26;

`

const Descryption=styled.div `
    line-heigth:1.4;
    font-size:20px;
    margin:16px;
    color:rgb(249,249,249);
`