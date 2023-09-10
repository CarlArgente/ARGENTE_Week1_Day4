import React, { useState } from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const FormSign = () => {
  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");

  const [firstNameError, setfirstNameError] = useState("");
  const [middleNameError, setmiddleNameError] = useState("");
  const [lastNameError, setlastNameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [addressError, setaddressError] = useState("");
  const [submitError, setsubmitError] = useState();

  const [formValid, setformValid] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    if (e.target.id === "firstName") {
      validateFirstName(e.target.value);
    }
    if (e.target.id === "middleName") {
      validateMiddleName(e.target.value);
    }
    if (e.target.id === "lastName") {
      validateLastName(e.target.value);
    }
    if (e.target.id === "email") {
      validateEmail(e.target.value);
    }
    if (e.target.id === "address") {
      validateAddress(e.target.value);
    }
  };

  const validateFirstName = (firstName) => {
    let formIsValid = formValid;
    let firstNameErrorMessage = "";
    let pattern = /^[A-Za-z\s]*$/;

    if (firstName.trim() === "") {
      formIsValid = false;
      firstNameErrorMessage = "This field is required.";
    } else if (!pattern.test(firstName)) {
      formIsValid = false;
      firstNameErrorMessage = " Name must contains alphabet.";
    } else {
      formIsValid = true;
      firstNameErrorMessage = "";
    }

    setfirstName(firstName);
    setfirstNameError(firstNameErrorMessage);
    setformValid(formIsValid);

    return formIsValid;
  };
  const validateMiddleName = (middleName) => {
    let formIsValid = formValid;
    let middleNameErrorMessage = "";
    let pattern = /^[A-Za-z\s]*$/;

    if (middleName.trim() === "") {
      formIsValid = false;
      middleNameErrorMessage = "This field is required.";
    } else if (!pattern.test(middleName)) {
      formIsValid = false;
      middleNameErrorMessage = " Name must contains alphabet.";
    } else {
      formIsValid = true;
      middleNameErrorMessage = "";
    }

    setmiddleName(middleName);
    setmiddleNameError(middleNameErrorMessage);
    setformValid(formIsValid);

    return formIsValid;
  };
  const validateLastName = (lastName) => {
    let formIsValid = formValid;
    let lastNameErrorMessage = "";
    let pattern = /^[A-Za-z\s]*$/;

    if (lastName.trim() === "") {
      formIsValid = false;
      lastNameErrorMessage = "This field is required.";
    } else if (!pattern.test(lastName)) {
      formIsValid = false;
      lastNameErrorMessage = " Name must contains alphabet.";
    } else {
      formIsValid = true;
      lastNameErrorMessage = "";
    }

    setlastName(lastName);
    setlastNameError(lastNameErrorMessage);
    setformValid(formIsValid);

    return formIsValid;
  };
  const validateEmail = (email) => {
    let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    let formIsValid = formValid;
    let emailErrorMessage = "";

    if (email.trim() === "") {
      formIsValid = false;
      emailErrorMessage = "This field is required.";
    } else if (!pattern.test(email)) {
      formIsValid = false;
      emailErrorMessage = "The email is not valid.";
    } else {
      formIsValid = true;
      emailErrorMessage = "";
    }

    setemail(email);
    setemailError(emailErrorMessage);
    setformValid(false);

    return formIsValid;
  };
  const validateAddress = (address) => {
    let formIsValid = formValid;
    let addressErrorMessage = "";

    if (address.trim() === "") {
      formIsValid = false;
      addressErrorMessage = "This field is required.";
    } else {
      formIsValid = true;
      addressErrorMessage = "";
    }

    setaddress(address);
    setaddressError(addressErrorMessage);
    setformValid(formIsValid);

    return formIsValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateFirstName(firstName) &&
      validateMiddleName(middleName) &&
      validateLastName(lastName) &&
      validateEmail(email) &&
      validateAddress(address)
    ) {
      setOpen(true);
      setsubmitError("");
      
      setfirstName("");
      setmiddleName("");
      setlastName("");
      setemail("");
      setaddress("");

    } else {
      setsubmitError("Please complete all fields.");
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Grid
      item
      xs={6}
      sm={8}
      md={6}
      component={Paper}
      elevation={6}
      square
      sx={{ height: "auto" }}
    >
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography component="h1" variant="h5">
          Employee Information
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                value={firstName}
                type="text"
                autoFocus
                onChange={handleChange}
              />
              <Typography variant="body2" color="error">
                {firstNameError}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="middleName"
                label="Middle Name"
                type="text"
                id="middleName"
                onChange={handleChange}
                value={middleName}
              />
              <Typography variant="body2" color="error">
                {middleNameError}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="Last Name"
                type="text"
                id="lastName"
                onChange={handleChange}
                value={lastName}
              />
              <Typography variant="body2" color="error">
                {lastNameError}
              </Typography>
            </Grid>
          </Grid>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            value={email}
          />
          <Typography variant="body2" color="error">
            {emailError}
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            onChange={handleChange}
            value={address}
          />
          <Typography variant="body2" color="error">
            {addressError}
          </Typography>
          <Button
            type="button"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Successfully added."
            action={action}
          />
          <Typography variant="body1" color="error" sx={{ mt: 3 }}>
            {submitError}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default FormSign;
