import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Stack, Typography } from "@mui/material";

interface ProductBulletProps {
    bullet: string;
}

const ProductBullet = ({ bullet }: ProductBulletProps) => {
    return (
        <Stack direction="row" spacing={2}>
            <TaskAltIcon
                color="primary"
                sx={{
                    width: 40,
                    height: 40,
                }}
            />

            <Typography variant="h5">{bullet}</Typography>
        </Stack>
    );
};

export default ProductBullet;
