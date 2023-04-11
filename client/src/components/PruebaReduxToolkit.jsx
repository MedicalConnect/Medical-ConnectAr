import React, {useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { getCharacters } from "../redux/actions/characterActions"
import styles from "./PruebaReduxToolKit.module.css"

function PruebaReduxToolkit() {
    const dispatch = useDispatch()
    const allCharacters = useSelector(state=>state.characters.characters)

    console.log(allCharacters)
   
    useEffect(()=>{
      dispatch(getCharacters())
    },[])

  return (
    <div>
        <h1>CHARACTERS</h1>
        {allCharacters && allCharacters.map((character,i)=>{
            return <div key={i}>
             <h2 className={styles["titulo"]}>{character.name}</h2>
             <img className={styles["imga"]} src={character.image} alt={character.name} />
            </div>
        })}
    </div>
  )
}

export default PruebaReduxToolkit