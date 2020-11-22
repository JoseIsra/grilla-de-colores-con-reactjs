import React, {useState} from 'react'
import './Grid.css';

const DEFAULT__CELL = {
    color:'#ffffff',
    on:false
};


function Grid({color}) {
    const[cells, setCells] = useState(Array.from({length:40}, ()=>(DEFAULT__CELL)));


    const updateCells = (index,  defaultColorCell) =>(e) => {
        e.preventDefault();
        setCells(cells.map((cell,cellIndex) => {
            if(cellIndex === index){
                if(defaultColorCell) return defaultColorCell;
                return {
                    color:color,
                    on:true
                }
            }

            return cell;
        }));
    }

    return (
        <div className="grid">
            {
                cells.map((cell , index) => {
                    return <div 
                    key={index}
                    onClick={updateCells(index)}
                    onContextMenu={updateCells(index, DEFAULT__CELL)}
                    style={{backgroundColor: cell.on ? cell.color : '#ffffff'  }}
                    className="cellsGrid"></div>
                })
            }
        </div>
    )
}

export default Grid
