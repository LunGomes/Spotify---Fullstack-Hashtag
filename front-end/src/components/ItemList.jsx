//import React from 'react'

import SingleItem from "./SingleItem";
import { Link, useLocation } from 'react-router-dom';


const ItemList = ({ title, items, itemsArray, path, idPath }) => {
    // console.log(items)

    // console.log(useLocation())
    // const pathname = useLocation().pathname;
    const { pathname } = useLocation(); //conceito de desestruturação
    const isHome = pathname === "/"; // validação por true or false

    const finalItems = isHome ? items : Infinity;
    
    return (
        <>
            {/* Artistas */}
            <div className="item-list">          
                <div className='item-list__header'>
                    <h2>{title} populares </h2>

                    {isHome ? (
                        <Link to={path} className="item-list__link">
                            Mostrar Tudo
                        </Link>
                    ) : (
                        <></>
                    )}
                    
                </div>
        
                <div className="item-list__container"> 
                    {itemsArray.
                    filter((currentValue, index) => index < finalItems)
                    .map((currObj, index) => (
                        <SingleItem 
                        // id={currObj.id}
                        // name={currObj.name}
                        // image={currObj.image}
                        // banner={currObj.banner}
                        idPath={idPath}
                        {...currObj}
                        key={`${title}-${index}`}/>
                        ))}    
                </div>
            </div>
        </>
    )
}

export default ItemList