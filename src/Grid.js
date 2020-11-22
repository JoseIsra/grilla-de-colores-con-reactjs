import React, {useState} from 'react'
import './Grid.css';

const DEFAULT__CELL = {
    color:'#ffffff',
    on:false
};


function Grid({color}) {
    const[cells, setCells] = useState(Array.from({length:40}, ()=>(DEFAULT__CELL)));


    const updateCells = (index) =>(e) => {
        e.preventDefault();
        //si se presiona click izq o derecho
        if(e.buttons === 1 || e.buttons === 2){
            setCells(cells.map((cell,cellIndex) => {
                if(cellIndex === index){
                    if(e.buttons === 1 ){
                        return {
                            color:color,
                            on:true
                        };
                    }
                    return DEFAULT__CELL;
                }
                return cell;
            }));

        }
    }


    return (
        <div id="supergrid" className="grid">
            {
                cells.map((cell , index) => {
                    return <div 
                    key={index}
                    onMouseDown={updateCells(index)}
                    onMouseOver={updateCells(index)}
                    onContextMenu={(e)=> e.preventDefault()}
                    style={{backgroundColor: cell.on ? cell.color : '#ffffff'  }}
                    className="cellsGrid"></div>
                })
            }
        </div>
    )
}

export default Grid
