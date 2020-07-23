import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, TextField } from '@material-ui/core';


const styles = theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxWidth: '50vh',
    },
});


class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            open: true,
        });
    }

    
    handleClose = () => {
        this.setState({ ...this.state, open: false });
        this.props.handleModalClose();
    };

    render() {
        const { classes, user } = this.props
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={this.state.open}
                onClose={this.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={this.state.open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">User Detail</h2>
                        <TextField
                            id="outlined-read-only-input"
                            label="First Name"
                            defaultValue={user.firstName}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Last Name"
                            defaultValue={user.lastName}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Last Name"
                            defaultValue={user.lastName}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Email"
                            defaultValue={user.email}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Address"
                            defaultValue={user.address}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Contact Number"
                            defaultValue={user.contactNumber}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Date Of Birth"
                            defaultValue={user.dateOfBirth}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                    </div>
                </Fade>
            </Modal>
        );
    }
}

export default withStyles(styles, { withTheme: true })(UserDetails)