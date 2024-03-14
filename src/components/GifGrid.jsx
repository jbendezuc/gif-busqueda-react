
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {


  const {images,isLoading} = useFetchGifs(category);  //HOOK PERSONALIZADO
  

  return (
    <>
    <h3>{category}</h3>
    {
      isLoading && (<h2>Cargando...</h2>)
    }
    <div className="card-grid">
      {
        images.map(image => (
          <GifItem key={image.id} {...image} />
        ))

        /* 
        OTRA FORMA DE ENVIAR DATOS CLASICOS
        images.map(image => (
          <GifItem key={image.id} title={image.title} url={image.url} />
        )) */
      }
    </div>
      

      {/* 
        ESTRUCTURA MAP SIMPLE 
      <ol>
      {images.map((image)=>{
        return <li key={image.id}>{image.title}</li>
      })}
      </ol>
      */}
    </>
  )
}


