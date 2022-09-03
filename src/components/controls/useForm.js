import { makeStyles } from "@material-ui/core";
import { FormControl } from "@mui/material";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "90%",
      margin: theme.spacing(1)
    }
  }
}));

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const onHandleValueChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  return { values, onHandleValueChange };
};

export function Form(props) {
  const { children, ...other } = props;
  const classes = useStyles();
  return (
    <FormControl sx={{ width: "50%" }} className={classes.root} {...other}>
      {children}
    </FormControl>
  );
}
