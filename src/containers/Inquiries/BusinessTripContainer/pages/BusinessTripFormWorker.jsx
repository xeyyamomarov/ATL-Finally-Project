import { useNavigate } from "react-router-dom";
import {
  Box, FormControl, Grid, MenuItem,
} from "@mui/material";
import { SubmitButton } from "components/Buttons";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { FormHead } from "containers/components";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import {
  LocalizationProvider,
} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "formik-mui-lab";
import { useStyles } from "Styles/Styles";

const dayOffTypes = [
  { value: "Tam", label: "Tam gün" },
  { value: "Yarım", label: "Yarım gün" },
  { value: "2 saat", label: "2 saat" }
]

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
  start: new Date(),
  end: new Date(),
  note: "",
  result: "",
}

export const BusinessTripFormWorker = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm()
    navigate("/business-trip/worker/view")
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

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid item sm={12} md={6}>
                      <FormControl fullWidth>
                        <Field
                          name="start"
                          component={DatePicker}
                          label="Başlama tarixi"
                          inputFormat="dd/MM/yyyy"
                          InputAdornmentProps={{ position: "start" }}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item sm={12} md={6}>
                      <FormControl fullWidth>
                        <Field
                          name="end"
                          component={DatePicker}
                          label="Bitmə tarixi"
                          inputFormat="dd/MM/yyyy"
                          InputAdornmentProps={{ position: "start" }}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item sm={12}>
                      <Field
                        fullWidth
                        name="note"
                        select
                        component={TextField}
                        label="Qeyd"
                      >
                        {dayOffTypes.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
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
                  </LocalizationProvider>
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