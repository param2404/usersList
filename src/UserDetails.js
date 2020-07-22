import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade,TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '50vh',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    

    const handleClose = () => {
        setOpen(false);
        props.handleModalClose();
    };

    return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">User Detail</h2>
                    <TextField
                        id="outlined-read-only-input"
                        label="First Name"
                        defaultValue={props.user.firstName}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Last Name"
                        defaultValue={props.user.lastName}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Last Name"
                        defaultValue={props.user.lastName}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Email"
                        defaultValue={props.user.email}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Address"
                        defaultValue={props.user.address}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Contact Number"
                        defaultValue={props.user.contactNumber}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Date Of Birth"
                        defaultValue={props.user.dateOfBirth}
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
