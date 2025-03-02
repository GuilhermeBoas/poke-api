import { useState } from "react"
import styled from "styled-components"
const MenuContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 1%;
    
    .hidden{
        display: none;
        
    }

    ul{
        margin: 0;
        padding: 0;
        border-radius: 10px;
        background-image: linear-gradient(to bottom,#A92F3A,#D43B47);
        margin-bottom: 10px;
        
        .divisor{
            border-bottom: 2px solid black;
            border-top: 2px solid black;
        }

        li:nth-child(2){
            border-bottom: 1px solid black;
            border-top: 1px solid black;
        }

        li{
            list-style: none;
            padding: 10px;
            button{
                background-color: transparent;
                border: none;
                display: flex;
                gap: 10px;
                width: 100%;
                justify-content: space-evenly;
                cursor: pointer;
                img{
                    width: 50px;
                }
                p{
                    color: white;
            
                }

            }
        }
    }
`
const BotaoMenuEstilizado = styled.button`
    background-image: linear-gradient(to bottom, #D43B47,#A92F3A);
    border: none;
    padding: 5px;
    border-radius: 10px;   
    cursor: pointer;

    /* &:hover{
        border: 5px solid red;
    } */
`

interface BotaoFundoProps{
    botoes:string[],
    retornoAoClicar:(i:string)=>void
}

const BotaoFundo = ({botoes,retornoAoClicar}:BotaoFundoProps)=>{
    const [isHidden,SetIsHidden]= useState(false)
     
    const aoMudarFundo = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const target = e.target as HTMLElement
        retornoAoClicar(target.id)
    }

    const alternarHidden = ()=>{
        SetIsHidden(anterior=>!anterior)
    }

    return(
        <MenuContainer onMouseLeave={()=>{SetIsHidden(anterior=>!anterior)}}>
            
            <ul className={isHidden?'':'hidden'}>
                
                {botoes.map((titulo,index)=>(
                    
                    <li key={index}>
                        <button onClick={e => aoMudarFundo(e)} id={titulo}>
                            <img id={titulo} src={`https://ia600608.us.archive.org/21/items/icons-pokeapi/${titulo}-icon.png`} alt="" />
                            <p id={titulo}>{titulo}</p>
                        </button>
                    </li>
                    
                ))}
                
            </ul>
              
            <BotaoMenuEstilizado onClick={()=>{alternarHidden()}}>
                <img src="/menuHamburgue.png" alt="" />
            </BotaoMenuEstilizado>
        </MenuContainer>
    )
}

export default BotaoFundo