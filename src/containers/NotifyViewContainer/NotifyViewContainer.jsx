import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormHead } from "containers/components/FormHead";
import { InfoSection } from "containers/components/InfoSection";
import { ResultTable } from "containers/components/ResultTable/ResultTable";
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles({
  container: {
    // display: "flex",
    gap: "16px",
    // flexDirection: "column",
    border:"1px solid #BDBDBD"
  },
  formBox: {
    border: "1px solid #E0E0E0", 
    borderRadius: "4px"
  },
  tableBox: {
    padding: "0 16px",
  }
});


const data=[
  {
    name:"Adı",
    value:"Bayram"
  },
  {
    name:"Təsviri",
    value:"Qurban bayramı"
  }
]

export const NotifyViewContainer = () => {
  const classes = useStyles();

  return (
    <Box sx={{padding:"16px 93px"}}>
    <Box className={classes.container}>
        <FormHead
          header="Elanların təsviri"
          actions={<EditIcon/>}
        />
        <Box className={classes.tableBox}>
          <ResultTable data={data} />
        </Box>
      </Box>
      </Box>
  );
}