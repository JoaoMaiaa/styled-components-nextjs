import styled from 'styled-components'

export const Container = styled.div`
    max-width:var(--container);
    margin:auto;
    padding:var(--large) var(--medium);
    display:flex;
    flex-wrap:wrap;
`
export const Wrapper = styled.div`
    border-top-right-radius:12px;
    border-top-left-radius:12px;
    background-color:var(--white);
    color:var(--background);
`

export const HeadingBorder = styled.h1`
    border-left:solid 5px var(--colors-bars);
    padding:0 var(--small);
    margin-bottom:var(--small);
`

export const HeadingBorderBarsTs = styled.h1`
    border-left:solid 5px var(--colors-bars-ts);
    padding:0 var(--small);
    margin-bottom:var(--small);
`

export const HeadingBorderBarsBabel = styled.h1`
    border-left:solid 5px var(--colors-bars-babel);
    padding:0 var(--small);
    margin-bottom:var(--small);
`
export const HeadingBorderBarsComponents = styled.h1`
    border-left:solid 5px var(--colors-bars-components);
    padding:0 var(--small);
    margin-bottom:var(--small);
`

export const HeadingBorderBarsNext = styled.h1`
    border-left:solid 5px var(--colors-bars-next);
    padding:0 var(--small);
    margin-bottom:var(--small);
`

export const Heading = styled.h1`
    padding:var(--small);
    margin-bottom:var(--small);
`

export const Flex = styled.div`
    margin:auto;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    padding:0 var(--medium);
    gap:2rem;
`

export const FlexGithub = styled.div`
    margin:auto;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    padding:0 var(--medium);
    color:grey;
    a{
        margin:0 5px;
        // color:#2c2c2d;
        color:var(--white);
    }
`

export const Paragraph = styled.div`
    margin:0 auto;
    p{
        display:flex;
        height:auto;
        max-width:30rem;
        margin-bottom:var(--large);
    }
`

export const SocialMedia = styled.div`
    padding:0 var(--medium);
    margin:auto;

    h1{
        border-left:solid 5px var(--colors-bars-3-hover);
        padding-left:var(--small);
    }

    ul{
        display:flex;
        gap:var(--small);
        justify-content:center;
        padding:var(--medium) 0 0 0 ;

        li{
            list-style:none;
            a{
                display:flex;
                align-items:baseline;
                text-decoration:none;
                color:var(--white);
                background-color:#2c2c2d;
                padding:0.5rem 1rem;
                border-radius:5px;
                &:hover{
                    background-color:#2a2a2b;
                }
            }
        }
    }
`

export const Button = styled.div`
    display:flex;
    justify-content:center;
    a{
        margin:var(--medium) var(--small);
        text-align:center;
        padding:10px var(--small);
        background:var(--colors-bars-3-hover);
        border-color:var(--colors-bars-3-hover);
        border:0;
        color:var(--background);
        border-radius:5px;
        font-family:'Noto Sans', sans-serif;
        font-size:18px;
        text-decoration:none;
    }
`

export const Info = styled.div`
    margin:auto;
    padding:var(--large) var(--medium);
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    p{
        color:grey;
    }
    img{
        border-radius:10px;
    }
    div{
        margin:var(--small);
    }
`

export const Footer = styled.footer`
    padding:var(--small) var(--medium);
    text-align:center;
    color:grey;
    a{
        // color:var(--colors-bars-3-hover);
        color:var(--white);
    }
`
