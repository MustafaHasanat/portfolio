import { Stack } from "@mui/material";

const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <Stack>
            {children}
        </Stack>
    );
}

export default Main;