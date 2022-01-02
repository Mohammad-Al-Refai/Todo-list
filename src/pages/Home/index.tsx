import { useState } from "react";
import { ItemsList } from "../../components/ListItem/index";
import { ListItem } from "../../components/Item/index";
import { SearchBar } from "../../components/SearchBar/index";
import { AddButton } from "../../components/AddButtun/AddButton";
import { connect } from "react-redux";
import { AddItem, DeleteItem, UpdateItemType } from "../../store/Home/Actions";
import { Item } from "../../models/ItemModel";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

function Home(props: IHome) {
  let [isOpen, setIsOpen] = useState(false);
  let [taskName, setTaskName] = useState("");
  let [searchValue, setSearchValue] = useState("");
  let [isSearching, setIsSearching] = useState(false);
  let [searchResult, setSearchResult] = useState([] as Item[]);
  let search = (value: string): Item[] => {
    return props.items.filter(
      (item) =>
        item.title[0] === value[0] ||
        item.title === value ||
        item.type[0] === value[0] ||
        item.title === value
    );
  };
  return (
    <>
      <Modal
        show={isOpen}
        onHide={() => {
          setTaskName("");
          setIsOpen(false);
        }}
      >
        <ModalTitle>
          <div className="p-2">Add Item</div>
        </ModalTitle>
        <ModalBody>
          <InputGroup className="mb-3">
            <FormControl
              onChange={(e) => setTaskName(e.target.value)}
              value={taskName}
              placeholder="Task Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              props.AddItem(new Item(taskName, "TODO"));
              setIsOpen(false);
              setTaskName("");
            }}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
      <ItemsList>
        <div className="d-flex align-items-center">
          <SearchBar
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setIsSearching(e.target.value !== "");
              setSearchResult(search(e.target.value));
            }}
          />
          <AddButton
            onClick={(e) => {
              setIsOpen(true);
            }}
          />
        </div>
        {!isSearching ? (
          props.items.length===0?<p>No items...</p>:props.items.map((item: Item, i) => (
            <ListItem
              key={i}
              onDelete={(v) => {
                props.DeleteItem(v);
              }}
              title={item.title}
              type={item.type}
              onChange={(v) => {
                props.UpdateItemType({
                  item: item,
                  type: v,
                });
              }}
            />
          ))
        ) : searchResult.length === 0 ? (
          <p>No results...</p>
        ) : (
          searchResult.map((item: Item, i) => (
            <ListItem
              key={i}
              onDelete={(v) => {
                props.DeleteItem(v);
              }}
              title={item.title}
              type={item.type}
              onChange={(v) => {
                props.UpdateItemType({
                  item: item,
                  type: v,
                });
              }}
            />
          ))
        )}
      </ItemsList>
    </>
  );
}
// function KeyID(): number {
//   return Math.floor(Math.random() * 9999999999);
// }
let mapStateToProps = (state: any) => {
  return {
    items: state.items,
  };
};
interface IHome {
  AddItem: any;
  items: Item[];
  UpdateItemType(payload: object): void;
  DeleteItem(payload: string): void;
}

export default connect(mapStateToProps, {
  AddItem,
  UpdateItemType,
  DeleteItem,
})(Home);
