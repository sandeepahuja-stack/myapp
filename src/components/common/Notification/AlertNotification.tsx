import { Alert } from "@mui/material"
import { useState } from "react";

const AlertNotification = ({err}: {err: string})=> {
    const [isError, updateErrorStatus ] = useState(!!err);
    const handleClose = () => {
        updateErrorStatus(false);
    }
    if(err === '' || !isError) return null;
    return <Alert severity="error" data-testid="alert" onClose={handleClose} sx={{
        position: 'fixed',
        top: '20px',
        width: '50%',
        left: '50%',
        transform: 'translateX(-50%)'

    }}>{err}</Alert>
    
}
export default AlertNotification;