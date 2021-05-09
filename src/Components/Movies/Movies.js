import React from 'react';
import styled from 'styled-components';


const Movies =()=>{
    return(
        <Container>
            <h4> Recommended for you</h4>
            <Content>
                <Wrap>
                    <img alt='' src='https://scontent.fkhi15-1.fna.fbcdn.net/v/t1.6435-9/122735881_4261243860572135_5576756425671548679_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH9b_th2L4-h-EepS7oOzM7JRpTh-oUlNolGlOH6hSU2sY5Jvav-lUrSFEkSEKt1Nw4rGIhoa6iN2uyM6VakCpS&_nc_ohc=CPsw1wGoyCQAX_Vy6og&_nc_oc=AQn1oPTjEriWY880sy7ELq7ST5g_uPVa6Gud9pnQm3jWxp5KKNNRtPTQL7ZBP1s0cwg&_nc_ht=scontent.fkhi15-1.fna&oh=a4a2f5597261bef6d14ff510791aca14&oe=60BE48F1'/>
                </Wrap>
                <Wrap>
                    <img alt='' src='https://scontent.fkhi15-1.fna.fbcdn.net/v/t1.6435-9/122735881_4261243860572135_5576756425671548679_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH9b_th2L4-h-EepS7oOzM7JRpTh-oUlNolGlOH6hSU2sY5Jvav-lUrSFEkSEKt1Nw4rGIhoa6iN2uyM6VakCpS&_nc_ohc=CPsw1wGoyCQAX_Vy6og&_nc_oc=AQn1oPTjEriWY880sy7ELq7ST5g_uPVa6Gud9pnQm3jWxp5KKNNRtPTQL7ZBP1s0cwg&_nc_ht=scontent.fkhi15-1.fna&oh=a4a2f5597261bef6d14ff510791aca14&oe=60BE48F1'/>
                </Wrap>
                <Wrap>
                    <img alt='' src='https://scontent.fkhi15-1.fna.fbcdn.net/v/t1.6435-9/122735881_4261243860572135_5576756425671548679_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH9b_th2L4-h-EepS7oOzM7JRpTh-oUlNolGlOH6hSU2sY5Jvav-lUrSFEkSEKt1Nw4rGIhoa6iN2uyM6VakCpS&_nc_ohc=CPsw1wGoyCQAX_Vy6og&_nc_oc=AQn1oPTjEriWY880sy7ELq7ST5g_uPVa6Gud9pnQm3jWxp5KKNNRtPTQL7ZBP1s0cwg&_nc_ht=scontent.fkhi15-1.fna&oh=a4a2f5597261bef6d14ff510791aca14&oe=60BE48F1'/>
                </Wrap>
                <Wrap>
                    <img alt='' src='https://scontent.fkhi15-1.fna.fbcdn.net/v/t1.6435-9/122735881_4261243860572135_5576756425671548679_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeH9b_th2L4-h-EepS7oOzM7JRpTh-oUlNolGlOH6hSU2sY5Jvav-lUrSFEkSEKt1Nw4rGIhoa6iN2uyM6VakCpS&_nc_ohc=CPsw1wGoyCQAX_Vy6og&_nc_oc=AQn1oPTjEriWY880sy7ELq7ST5g_uPVa6Gud9pnQm3jWxp5KKNNRtPTQL7ZBP1s0cwg&_nc_ht=scontent.fkhi15-1.fna&oh=a4a2f5597261bef6d14ff510791aca14&oe=60BE48F1'/>
                </Wrap>

            </Content>

        </Container>
    )
}
export default Movies;


const Container = styled.div `

`

const Content=styled.div `
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
    
`

const Wrap=styled.div `
    padding:0 26px 0;
    border-radius:10px;
    cursor:pointer;
    overflow:hidden;
    border:3px solid rgba(249,249,249,0.1);
    box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px,rgb(0 0 0/73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    img{
        height:100%;
        width:100%;
        object-fit:cover;
    }
    &:hover{
        transform:scale(1.05);
        border-color:rgba(249,249,249,0.8);
        box-shadow:rgb(0 0 0/80%) 0px 30px 22px -10px,rgb(0 0 0/72%) 0px 16px 10px -10px;


    }   
`