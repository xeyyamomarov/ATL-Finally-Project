import { useNavigate } from "react-router-dom";
import { Box, Grid, MenuItem } from "@mui/material";
import { SubmitButton } from "components/Buttons";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { FormHead } from "containers/components";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { useStyles } from "Styles/Styles";


const resultDatas = [
  { value: "DepartmentHead", label: "Departament rəhbərin göndərməsi" },
  { value: "Purchase", label: "Satınalma göndərməsi" },
  { value: "Confirmed", label: "Təsdiqləndi" }
]

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "Satınalma göndərməsi" },
]

const initialValues = {
  problem: "",
  result: "",
}


export const PurchaseFormWorker = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm()
    navigate("/purchase/worker/view")
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
          <QueryTabs tabs={tabs} value="one" />
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
                <SubmitButton text="Göndər" />
              </Box>

            </Box>
          </Box>
        </Form>
      </Formik>
    </Box >
  );
};