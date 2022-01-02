import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ListItem(props: IItem) {

  
  return (
    <div className="item">
      <div className="item-title">{props.title}</div>  
     <div>
     <Toggle type={props.type}  onClick={(e)=>{
       switch (props.type) {
         case "TODO":
           props.onChange("IN_PROGRESS")
           break;
           case "IN_PROGRESS":
            props.onChange("DONE")
            break;
            case "DONE":
              props.onChange("TODO")
              break;
         default:
           break;
       }
        
      }}/>
      <button className="delete-btn" onClick={
        ()=>{
          props.onDelete(props.title)
        }
      }>Delete</button>
     </div>
    </div>
  );
}
function Toggle(props: IToggle) {
  return (
    <button className={"toggle-" + props.type} onClick={props.onClick}>
      {props.type }
    </button>
  );
}
interface IItem {
  title: string;
  type: "TODO"|"IN_PROGRESS"|"DONE";
  onChange(value:string):void
  onDelete(value:string):void
}
interface IToggle {
  onClick(e:any):void
  type: "TODO"|"IN_PROGRESS"|"DONE";
}
