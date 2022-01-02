
export function ItemsList(props:IItemsList) {
    return <div className="itemsList-container">
       {
           props.children
       }
    </div>
}


interface IItemsList{
    children:any
}