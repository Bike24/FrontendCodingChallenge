
import { Snackbar } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { toggleshowConfirmStatus } from '../app/slices/generalSlice';

export default function MessageComp() {
    const dispatch = useDispatch();
    const { message, showMessage } = useSelector((state: RootState) => state.general);
    const handleClose = () => {
        dispatch(toggleshowConfirmStatus(false));
    }
    return (<Snackbar
        open={showMessage}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
    />)
}