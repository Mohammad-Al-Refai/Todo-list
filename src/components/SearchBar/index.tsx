

export function SearchBar(props: ISearchBar) {
  return (
    <div className="searchBar-container">
      <input
      placeholder="Search"
        className="searchBar"
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
interface ISearchBar {
  onChange(event: any): void;
  value: string;
}
