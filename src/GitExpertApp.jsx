import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

/* 
IMPORTANCION CLASICA DE ARCHIVOS O COMPONENTES
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
 */
export const GitExpertApp = () => {

  const [categories,setCategories] = useState(['One Punch']);

  const onAddCategory = (onNewCategory) => {

      if(categories.includes(onNewCategory)){
        return;
      }

      setCategories([onNewCategory, ...categories])
  }

  return (
    <>

      <h1>GifExpertApp</h1>

      {/* <AddCategory onNewCategory={setCategories} />  OTRA FORMA */}
      < AddCategory onNewCategory={ value => onAddCategory(value)} />

     {/*  <button onClick={onAddCategory}>Agregar</button> OTRA FORMA */}
        {categories.map(category => (
          < GifGrid category={category} key={category} />
        )
        )}

        {/* 
          OTRA FORMA DE MOSTRAR
        {categories.map(category => { 
         return <h1>{category*2}</h1>
        }
        )} */}

    </>
  )
}


