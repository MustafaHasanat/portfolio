import { Alert, AlertColor, Snackbar } from "@mui/material";
import { snackbarActions } from "@/utils/store/store";
import { useSelector, useDispatch } from "react-redux";

const SnackBar = () => {
    const dispatch = useDispatch();

    const snackbarIsOpened = useSelector(
        (state: { snackbarReducer: { isActive: boolean } }) =>
            state.snackbarReducer.isActive
    );

    const snackbarTextValue = useSelector(
        (state: { snackbarReducer: { textValue: string } }) =>
            state.snackbarReducer.textValue
    );

    const snackbarColorScheme: AlertColor = useSelector(
        (state: { snackbarReducer: { colorScheme: AlertColor } }) =>
            state.snackbarReducer.colorScheme
    );

    const handleSnackbarClose = () => {
        dispatch(snackbarActions.setActive(false));
    };

    return (
        <Snackbar
            open={snackbarIsOpened}
            autoHideDuration={4000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
            <Alert onClose={handleSnackbarClose} severity={snackbarColorScheme}>
                {snackbarTextValue}
            </Alert>
        </Snackbar>
    );
};

export default SnackBar;
