import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const AlertPopUp = ({ message }) => {
    return (
        <Snackbar open={true} autoHideDuration={6000}>
            <Alert severity="error" sx={{ width: "100%" }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default AlertPopUp;
