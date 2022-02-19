import { IconButton, Tooltip } from '@mui/material';
import { Delete} from '@mui/icons-material';
import { useDispatch} from 'react-redux';
import { TOGGLES_ACTIONS} from 'store/Toggles';


export function DeleteModify() {

    const dispatch = useDispatch()

    const handleClick=() => dispatch(TOGGLES_ACTIONS.setDeleteNotify())
 

  return (
    
      <Tooltip title="Sil">
        <IconButton sx={{position:"relative",
        left:"25px"}}
          onClick={handleClick}
        >
          <Delete sx={{color:"black"}}/>
        </IconButton>
      </Tooltip>
    
  );
};