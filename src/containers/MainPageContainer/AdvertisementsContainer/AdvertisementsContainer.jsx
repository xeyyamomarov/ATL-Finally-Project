import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { MAINPAGE_ACTIONS, MAINPAGE_SELECTORS } from "store/MainPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AdvertisementsTable } from "./AdvertisementsTable";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  head: {
    padding: "16px",
    color: "#424242",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    height: "60px",
  },
  mainCard: {
    marginBottom: "16px",
    boxShadow: "none",
    border: "1px solid #E0E0E0",
    borderRadius: "8px",
  },
});

export const AdvertisementsContainer = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const advertisementsData = useSelector(
    MAINPAGE_SELECTORS.getAdvertisementsData
  );
  const advertisementsLoading = useSelector(
    MAINPAGE_SELECTORS.getAdvertisementsLoading
  );
  const handleClick = () => dispatch(MAINPAGE_ACTIONS.fetchAdvertisements());

  useEffect(() => {
    dispatch(MAINPAGE_ACTIONS.fetchAdvertisements());
  }, [dispatch]);
  return (
    <Card className={classes.mainCard}>
      <Card
        sx={{
          backgroundColor: "#F5F5F5",
          borderBottom: "1px solid #E0E0E0",
          boxShadow: "none",
        }}
      >
        <CardContent className={classes.card}>
          <Typography className={classes.head}>Elanlar</Typography>
          <Typography fontSize="18px" padding="16px" color="#616161">
            <Tooltip title="Refresh">
              <RefreshIcon sx={{ cursor: "pointer" }} onClick={handleClick} />
            </Tooltip>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, marginBottom: 2, boxShadow: "none" }}>
        <CardContent>
          <AdvertisementsTable
            data={advertisementsData}
            loading={advertisementsLoading}
          />
        </CardContent>
      </Card>
    </Card>
  );
};
