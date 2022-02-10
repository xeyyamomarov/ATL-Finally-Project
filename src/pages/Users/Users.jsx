import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Table } from "components/Table";
import { Box, Collapse } from "@mui/material";
import { USERS_ACTIONS, USERS_SELECTORS } from "store/Users";
import { AddNewUserDialog, EditUserDialog, PasswordUpdateDialog } from "./components/Dialogs";
import { SearchBar } from "components/SearchBar";
import { SearchForm } from './components/SearchForm';
import { AddButton, SearchButton } from "components/Buttons";
import { UsersTableHeader } from "./UsersTableHeader";
import { TOGGLES_ACTIONS } from "store/Toggles";



const Users = () => {

  const dispatch = useDispatch();
  const { users } = useSelector(USERS_SELECTORS.getUsers);
  const loading = useSelector(USERS_SELECTORS.getUsersLoading);
  const [searchOpen, setSearchOpen] = useState(false);
  const thead = UsersTableHeader();
  const addNewHandleClick = () => dispatch(TOGGLES_ACTIONS.setAddNewDialog())

  useEffect(() => {
    dispatch(USERS_ACTIONS.fetchUsers())
  }, [dispatch])


  return (
    <>
      <SearchBar buttons={
        <>
          <SearchButton onClick={() => {
            setSearchOpen(!searchOpen);
          }} />
          <AddButton onClick={addNewHandleClick} />
        </>
      } />
      <Box padding="16px">
        <Collapse in={searchOpen}>{<SearchForm />}</Collapse>
        <Table thead={thead} tbody={users} loading={loading} pagination />
        <AddNewUserDialog />
        <EditUserDialog />
        <PasswordUpdateDialog />
      </Box>
    </>
  );
}

export default Users;