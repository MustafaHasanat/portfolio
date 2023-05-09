import { Doc } from "@/types/doc";
import { Stack } from "@mui/material";

interface DocCardProps {
    doc: Doc;
}

const DocCard = ({ doc }: DocCardProps) => {
    return <Stack>{doc.title}</Stack>;
};

export default DocCard;
