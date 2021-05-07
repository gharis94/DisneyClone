import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header=()=>{
    return(
        <Nav>
            <Logo src='/images/logo.svg'/>
            <NavMenu>
                <Option to='/'>
                    <img alt='home' src='/images/home-icon.svg'/>
                    <span>Home</span>
                </Option>
                <Option to='/'>
                    <img alt='home' src='/images/search-icon.svg'/>
                    <span>Search</span>
                </Option>
                <Option to='/'>
                    <img alt='home' src='/images/watchlist-icon.svg'/>
                    <span>WATCHLIST</span>
                </Option>
                <Option to='/'>
                    <img alt='orignals' src='/images/original-icon.svg'/>
                    <span>ORIGINALS</span>
                </Option>
                <Option to='/'>
                    <img alt='movies' src='/images/movie-icon.svg'/>
                    <span>MOVIES</span>
                </Option>
                <Option to='/'>
                    <img alt='series' src='/images/series-icon.svg'/>
                    <span>SERIES</span>
                </Option>

            </NavMenu>
            <UserImage src="https://scontent.fkhi15-1.fna.fbcdn.net/v/t1.6435-9/43207538_2457800794245131_5704269408688406528_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEQyEc5_pI3lLhqcMYyLHByuonZw1uZ0ri6idnDW5nSuBvZT43QAWkCJocB8dYdpp1Y7BRlUw7n3itbmeEM9D5-&_nc_ohc=HxwpU0EwEY4AX9ZnV-s&_nc_ht=scontent.fkhi15-1.fna&oh=1ab6342bc0af9b2a986065515e57bffd&oe=60BA222D"/>

            
        </Nav>
    )
}
export default Header;

const Nav= styled.nav `
    height: 70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
    overflow-x:hidden;
    
`
const Logo = styled.img `
    width:80px;

`
const NavMenu =styled.div `
    display:flex;
    flex:1;
    margin-left:20px;
    align-items:center;
    

`

const Option = styled(Link) `
    color:white;
    text-decoration:none;
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img{
        height: 20px;
    }
    span{
        font-size: 13px;
        letter-spacing: 1.24px;
        position:relative;

        &:after{
            content:"";
            height:2px;
            position:absolute;
            background:white;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform:scaleX(0)


        }
        
    }
    &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    
`
const UserImage=styled.img `
    height:48px;
    width:48px;
    border-radius:50%;
    cursor:pointer
`