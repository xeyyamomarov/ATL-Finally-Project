import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  searchBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: "1px solid #E0E0E0",
    padding: "12px 16px",
    marginBottom: "16px",
  },
  breadcrumbs: {
    fontSize: "14px",
    fontWeight: 500,
    color: '#424242',
  },
  links: {
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: 'none',
    color: '#424242',
    cursor: "pointer",
  },
  text: {
    fontSize: "14px",
    fontWeight: 500,
    color: '#424242',
    padding: "8px 0"
  }
});