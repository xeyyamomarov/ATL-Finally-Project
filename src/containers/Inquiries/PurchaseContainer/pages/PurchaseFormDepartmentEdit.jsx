import { Box, Grid, MenuItem } from "@mui/material";
import { SubmitButton } from "components/Buttons";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { FormHead } from "containers/components";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { useStyles } from "styles/Styles";
import { InfoIcon } from "containers/components/InfoIcon";
import { InfoSection } from "containers/components/InfoSection";


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
  note: "",
  resultText: "",
  result: "",
}

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

export const PurchaseFormDepartmentEdit = () => {
  const classes = useStyles();

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
          <QueryTabs tabs={tabs} value="two" />
          <Box className={classes.container}>
            <Box className={classes.dataContainer}>
              <InfoSection name="Lamiə Səyidova Əliağa" />
              <Box className={classes.formBox}>
                <FormHead header="Departament rəhbərin göndərməsi"
                  actions={
                    <>
                      <InfoIcon />
                    </>
                  }
                />
                <Grid container spacing={2} padding="16px">

                  <Grid item sm={12}>
                    <Field
                      fullWidth
                      disabled
                      name="note"
                      component={TextField}
                      label="Qeyd"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            border: "2px dotted"
                          }
                        }
                      }}
                    />
                  </Grid>

                  <Grid item sm={12}>
                    <Field
                      fullWidth
                      disabled
                      name="resultText"
                      component={TextField}
                      label="Nəticə mətni"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            border: "2px dotted"
                          }
                        }
                      }}
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