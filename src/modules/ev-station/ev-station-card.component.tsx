import { Card, CardContent, CardActionArea, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; //ToDo: Add link to station details
import { EvStation } from "modules/ev-station/ev-station.model";

export interface EvStationCardProps {
    evStation: EvStation;
}

export const EvStationCard = ({ evStation }: EvStationCardProps) => {
    return (
        <Card sx={{ position: 'relative' }}>
            <CardActionArea >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {evStation.attributes.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Status: {evStation.attributes.status}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Hours: {evStation.attributes.hours}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        EV Network: {evStation.attributes.ev_network}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Address: {evStation.attributes.street_address} {evStation.attributes.city}, {evStation.attributes.state} {evStation.attributes.zip_code}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default EvStationCard;