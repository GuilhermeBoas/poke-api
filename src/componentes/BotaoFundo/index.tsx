import styled from "styled-components"

const MenuContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 1%;
    
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

        li{
            list-style: none;
            padding: 10px;
            button{
                background-color: transparent;
                border: none;
                display: flex;
                gap: 10px;

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

const BotaoEstilizado = styled.button`
    background-image: linear-gradient(to bottom, #D43B47,#A92F3A);
    border: none;
    padding: 5px;
    border-radius: 10px;
`

const BotaoFundo = ()=>{
    return(
        <MenuContainer>
            
            <ul>
                <li>
                    <button>
                        <img src="/icons/god-icon.png" alt="" />
                        <p>God</p>
                    </button>
                </li>

                <li className="divisor">
                    <button>
                        <img src="/icons/god-icon.png" alt="" />
                        <p>God</p>
                    </button>
                </li>

                <li>
                    <button>
                        <img src="/icons/god-icon.png" alt="" />
                        <p>God</p>
                    </button>
                </li>
            </ul>
              
            <BotaoEstilizado>
                <img src="/menuHamburgue.png" alt="" />
            </BotaoEstilizado>
        </MenuContainer>
    )
}

export default BotaoFundo