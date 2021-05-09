import React from 'react';
import styled from 'styled-components';


const Login =()=>{
    return(
        <Container>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg'/>
                <SignUp>
                    Get All Three
                </SignUp>
                <Descriotion>
                    dsfkgksjdlfsfhsadfjahsklfisofsafjlwfksdcsd;chsdlfhduifusfh;fu;jfsdh
                </Descriotion>
                <CTAlogoTwo src='/images/cta-logo-two.png'/>
            </CTA>
        </Container>
    )
}
export default Login;

const Container=styled.div `
    position:relative;
    min-height: calc(100vh - 70px);
    display:flex;
    align-items:center;
    justify-content:center;
    
    &:before{
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        background-image:url('/images/login-background.jpg');
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
    
`

const CTA=styled.div `
    max-width: 650px;
    padding:80px 40px;
    width:90%;
    display:flex;
    flex-direction:column;
    

`

const CTALogoOne=styled.img `

`

const SignUp=styled.a `
    width:100%;
    background-color: #0063e5;
    border-radius:4px;
    font-weight:bold;
    padding:17px 0;
    color:#f9f9f9;
    text-align:center;
    font-size:18px;
    cursor:pointer;
    transition: all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;

    &:hover{
        background: #0483ee;

    }
`

const Descriotion=styled.p `
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;

`

const CTAlogoTwo=styled.img `
    
`