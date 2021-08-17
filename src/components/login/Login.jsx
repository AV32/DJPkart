import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";
import "./Login.css";

function Login(props) {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({ userEmail: "", userPassword: "" });
  const { signIn } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function collectUserData(event) {
    event.preventDefault();
    signIn();
    handleClose();
  }

  console.log(userData);

  return (
    <div className="login-user">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="userEmail"
            required={true}
            variant="outlined"
            name="userEmail"
            value={userData.userEmail}
            onChange={handleChange}
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            required={true}
            margin="dense"
            id="userPassword"
            name="userPassword"
            value={userData.userPassword}
            variant="outlined"
            onChange={handleChange}
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={collectUserData} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
      <p onClick={handleClickOpen}>Login</p>
    </div>
  );
}

export default Login;
