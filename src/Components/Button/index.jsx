import { Button  } from "@mui/material";
export default function ButtonComponent({ children, ...props }) {
    return (
        <Button {...props}>{children}</Button>
    );
}