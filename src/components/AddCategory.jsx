import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (value) => {
        setInputValue(value.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <=1) {
            return;
        }

        /* onNewCategory((categories) => [inputValue , ... categories]); */
        onNewCategory(inputValue.trim());           //ESTA FUNCION ES DE AFUERA DEL COMPONENTE MAIN
        setInputValue('');
    }

    return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange}/>
    </form>

  )

}


