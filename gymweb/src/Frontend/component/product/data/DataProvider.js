import React,{createContext,useState} from 'react';

export const DataContext=createContext();

const DataProvider=(props)=>{

    const [products,setProducts]=useState([
        {
            id : 1,
            product_name:"Tay to ",
            description:"Tay cực to thì em mới thích",
            area:"tay",
            level:1,
            price :350
        },
        {
            id : 2,
            product_name:"Tay to",
            description:"Chân to đứng vứng trong tâm trí em",
            area:"chan",
            level:1,
            price :351
        },
        {
            id : 3,
            product_name:"Ngực to",
            description:"To hơn ngực em",
            area:"nguc",
            level:1
    ,        price :350
        },
        {
            id : 4,
            product_name:"Mông to",
            description:"Giàu sang phú quý",
            area:"mong",
            level:1,
            price :350
        },
        {
            id : 5,
            product_name:"Bụng to",
            description:"Sơ gan",
            area:"bung",
            level:1,
            price :350
        },
        {
            id : 6,
            product_name:"Vai to",
            description:"Gánh vác cuộc đời em",
            area:"vai",
            level:1,
            price :350
        },
    ])

    return(
        <DataContext.Provider value={[products,setProducts]}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;