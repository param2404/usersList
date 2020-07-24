import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Paper, Table, TableBody, TableCell, TableRow, TableContainer, TableHead, TablePagination, IconButton } from '@material-ui/core';
import { usersList } from "../UsersData"
import { Visibility, Delete } from '@material-ui/icons';
import UserDetails from './UserDetails';

const styles = theme => ({
  container: {
    padding:'2rem'
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    border: '1px solid #000',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isLoading: true,
      users: [],
      page: 0,
      rowsPerPage: 5,
      view: false,
      user: {}
    });
  }

  componentDidMount() {
    this.setState({ ...this.state, users: usersList.usersList, isLoading: false });
  }

  handleChangePage = (event, newPage) => {
    this.setState({ ...this.state, page: newPage })
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ ...this.state, page: 0, rowsPerPage: event.target.value })
  };

  onViewOpen = (row) => {
    this.setState({ ...this.state, view: true, user: row })
  }

  onViewClose = () => {
    this.setState({ ...this.state, view: false })
  }

  onDelete = (row) => {
    this.setState({ ...this.state, users: this.state.users.filter((u) => u.userId !== row.userId) })
  }

  render() {

    const { classes } = this.props;
    return (
      <Paper className={classes.container}>
        <h2 className={classes.heading}>Users</h2>{!this.state.isLoading ? <><TableContainer className={classes.table}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell >Serial Number</TableCell>
                <TableCell >First Name</TableCell>
                <TableCell >Last Name</TableCell>
                <TableCell >Email</TableCell>
                <TableCell >Contact no</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.length > 0 && this.state.users.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row, i) => (
                <TableRow key={i}>
                  <TableCell >{row.userId}</TableCell>
                  <TableCell >{row.firstName}</TableCell>
                  <TableCell >{row.lastName}</TableCell>
                  <TableCell >{row.email}</TableCell>
                  <TableCell >{row.contactNumber}</TableCell>
                  <TableCell align="right"><IconButton onClick={() => this.onViewOpen(row)}><Visibility /></IconButton><IconButton onClick={() => this.onDelete(row)}><Delete /></IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={this.state.users.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          /></> : <h5>Loading...Please wait...</h5>}


        {this.state.view && <UserDetails handleModalClose={this.onViewClose} user={this.state.user} />}
      </Paper>
    )
  }

};
export default withStyles(styles, { withTheme: true })(App);