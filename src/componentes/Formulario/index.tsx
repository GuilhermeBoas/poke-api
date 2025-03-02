import { useState } from "react";
import styled from "styled-components";

const FormularioEstilizado = styled.form`
  margin: auto;
  width: 100%;
  max-width: 350px;
`
const InputPokemon = styled.input`
  margin: 10px auto ;
  border-radius: 16px;
  background-image: url('/icons/search.png');
  background-repeat: no-repeat;
  background-position: left;
  background-size: 20px;
  width: 100%;
  height: 32px;
  text-align: center;
  &::placeholder{
    opacity: 1;
    left: 6%;
  }
`
interface FormularioProps{
  setIdPokemon:React.Dispatch<React.SetStateAction<string | number>>
}

const Formulario = ({setIdPokemon}:FormularioProps) => {
    const [inputValue, setInputlValue] = useState<string>('')
    const aoMudarInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputlValue(e.target.value)
      }

    return (
        <FormularioEstilizado
            onSubmit={(e) => {
                e.preventDefault();
                setIdPokemon(() => (
                    inputValue.trim().replace(' ', ''))
                );
                setInputlValue('')
            }}
        >

            <InputPokemon value={inputValue}
                placeholder='Search'
                type="text"
                onChange={e => aoMudarInput(e)}
            />
        </FormularioEstilizado>
    )
}

export default Formulario