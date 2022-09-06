import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { FormControl } from "@mui/material";
import { useState } from "react";
import { updateData } from "../redux/slices/insuranceProfileSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "70%",
      margin: theme.spacing(1)
    }
  }
}));

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const dispatch = useDispatch();

  const onHandleValueChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateData({ fieldName: name, value }));
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
