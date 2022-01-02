export function AddButton(props: IAddButton) {
  return (
    <button className="add-button" onClick={props.onClick}>
      Add
    </button>
  );
}

interface IAddButton {
  onClick(event: any): void;
}
