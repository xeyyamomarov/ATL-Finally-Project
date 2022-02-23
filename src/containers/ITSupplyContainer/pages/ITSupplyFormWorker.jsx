import { useNavigate } from "react-router-dom";
import {
  Box, Grid, MenuItem,
  // TextField as MuiTextField
} from "@mui/material";
import { SubmitButton } from "components/Buttons";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { FormHead } from "containers/components";
import { Field, Form, Formik } from "formik";
import { makeStyles } from "@mui/styles";
import { TextField } from "formik-mui";

const useStyles = makeStyles({
  breadcrumbBar: {
    borderBottom: "1px solid #E0E0E0",
    padding: "12px 16px"
  },
  container: {
    padding: "16px 93px",
  },
  dataContainer: {
    display: "flex",
    gap: "16px",
    flexDirection: "column"
  },
  formBox: {
    border: "1px solid #E0E0E0",
    borderRadius: "4px",
  },
  button: {
    textAlign: "end"
  }
})


const resultDatas = [
  { value: "DepartmentHead", label: "Departament rəhbərin göndərməsi" },
  { value: "HR", label: "HR göndərməsi" },
  { value: "Confirmed", label: "Təsdiqləndi" }
]

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "HR göndərməsi" },
]

const initialValues = {
  problem: "",
  result: "",
}


export const ITSupplyFormWorker = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm()
    navigate("/it-supply/worker/saved")
  }

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Box className={classes.breadcrumbBar}>
            <Breadcrumbs />
          </Box>
          <QueryTabs tabs={tabs} value="one"/>
          <Box className={classes.container}>
            <Box className={classes.dataContainer}>
              <Box className={classes.formBox}>
                <FormHead header="Sorğunun formalaşdırılması" />
                <Grid container spacing={2} padding="16px">

                  <Grid item sm={12}>
                    <Field
                      fullWidth
                      name="problem"
                      component={TextField}
                      label="Problemin təsviri"
                    />
                  </Grid>

                  <Grid item sm={12}>
                    <Field
                      fullWidth
                      name="result"
                      select
                      component={TextField}
                      label="Nəticə"
                    >
                      {resultDatas.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>

                </Grid>
              </Box>

              <Box className={classes.button}>
                <SubmitButton text="Yadda saxla və yönləndir" />
              </Box>

            </Box>
          </Box>
        </Form>
      </Formik>
    </Box >
  );
};