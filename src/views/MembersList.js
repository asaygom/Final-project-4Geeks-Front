import { useCallback, useMemo, useState, useEffect, useContext } from 'react';
import { Button,Typography, Stack, Box, Container } from '@mui/material';
import BottomNav from '../components/BottomNav';
import { SearchBar } from '../components/SearchBar';
import { UserTable } from '../components/UserTable';
import { Context } from "../store/context";
import {useNavigate} from "react-router-dom";
import { TopNav } from '../components/TopNav';

const data = []

function applyPagination(documents, page, rowsPerPage) {
   return documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }

const useSelection = (items = []) => {
    const [selected, setSelected] = useState([]);
  
    useEffect(() => {
      setSelected([]);
    }, [items]);
  
    const handleSelectAll = useCallback(() => {
      setSelected([...items]);
    }, [items]);
  
    const handleSelectOne = useCallback((item) => {
      setSelected((prevState) => [...prevState, item]);
    }, []);
  
    const handleDeselectAll = useCallback(() => {
      setSelected([]);
    }, []);
  
    const handleDeselectOne = useCallback((item) => {
      setSelected((prevState) => {
        return prevState.filter((_item) => _item !== item);
      });
    }, []);
  
    return {
      handleDeselectAll,
      handleDeselectOne,
      handleSelectAll,
      handleSelectOne,
      selected
    };
  };

  const useUsers = (page, rowsPerPage) => {
    return useMemo(
      () => {
        return applyPagination(data, page, rowsPerPage);
      },
      [page, rowsPerPage]
    );
  };
  
  const useUserIds = (users) => {
    return useMemo(
      () => {
        return users.map((user) => user.id);
      },
      [users]
    );
  };
  
const MembersList = () => {
  const { store, actions } = useContext(Context);
  useEffect(()=>{actions.getUsers();actions.getTrainers()},[])
  const navigate=useNavigate()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const users = useUsers(page, rowsPerPage);
    const usersIds = useUserIds(users);
    const usersSelection = useSelection(usersIds);
    const listOfUsersAndTrainers = store.listOfUsers.concat(store.listOfTrainers)
  
    const handlePageChange = useCallback(
      (event, value) => {
        setPage(value);
      },
      []
    );
  
    const handleRowsPerPageChange = useCallback(
      (event) => {
        setRowsPerPage(event.target.value);
      },
      []
    );

return(  
  <>
    <TopNav />
    <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={1}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={2}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Users
                </Typography>
              </Stack>
              <div>
                <Button
                  onClick={()=>navigate('/newuser')}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <SearchBar />
            <UserTable
              count={data.length}
              items={listOfUsersAndTrainers}
              onDeselectAll={usersSelection.handleDeselectAll}
              onDeselectOne={usersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={usersSelection.handleSelectAll}
              onSelectOne={usersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={usersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    <BottomNav navToggle="users"/>
  </>
)}

export default MembersList;