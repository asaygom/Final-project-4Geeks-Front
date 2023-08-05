import { useCallback, useMemo, useState, useEffect, useContext } from 'react';
import { Button,Typography, Stack, Box, Container } from '@mui/material';
import BottomNav from '../components/BottomNav';
import { UserSearch } from '../components/UserSearch';
import { UserTable } from '../components/UserTable';
import { Context } from "../store/context";

const data = [
  {
    id: '1',
    name: "John",
    last_name: 'Smith',
    email: 'john.smith@sample.com',
    role: 'Member',
    trainer: 'John Doe',
    is_active: 'True',
    subscription_date: '03/08/23'
  }]

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
  useEffect(()=>{actions.getUsers()},[])
  console.log(store.listOfUsers)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const users = useUsers(page, rowsPerPage);
    const usersIds = useUserIds(users);
    const usersSelection = useSelection(usersIds);
  
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
    <Button variant="text" size="small">Back</Button>
    <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Members
                </Typography>
              </Stack>
              <div>
                <Button
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <UserSearch />
            <UserTable
              count={data.length}
              items={store.listOfUsers.data}
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
    <BottomNav />
  </>
)}

export default MembersList;

