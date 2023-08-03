import PropTypes from 'prop-types';
import { Box, Card, Table, TableBody, TableCell, TableHead, TablePagination, TableRow} from '@mui/material';

export const UserTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  return (
    <Card>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Role
                </TableCell>
                <TableCell>
                  Trainer
                </TableCell>
                <TableCell>
                  Active
                </TableCell>
                <TableCell>
                  Subscription date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((user) => {
                const isSelected = selected.includes(user.id);

                return (
                  <TableRow
                    hover
                    key={user.id}
                    selected={isSelected}
                  >
                    <TableCell>
                      {user.name+' '+user.last_name}
                    </TableCell>
                    <TableCell>
                      {user.email}
                    </TableCell>
                    <TableCell>
                      {user.role}
                    </TableCell>
                    <TableCell>
                      {user.trainer}
                    </TableCell>
                    <TableCell>
                      {user.is_active}
                    </TableCell>
                    <TableCell>
                      {user.subscription_date}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

UserTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};