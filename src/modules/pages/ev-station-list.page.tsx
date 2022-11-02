import { Grid, Typography } from '@mui/material';
import { getEvStations } from "modules/ev-station/ev-station.service";
import { useEffect, useState } from "react";
import { EvStation } from "modules/ev-station/ev-station.model";
import EvStationCard from "modules/ev-station/ev-station-card.component"


export const EvStationListPage = () => {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [evStations, setEvStations] = useState<EvStation[]>([]);
  const Search_Value = "Denver, CO"

  const retrieveEvStations = async () => {
      try {
        const evStations = await getEvStations(Search_Value);
        setEvStations(evStations);
        setError(false);
      } catch (err: any) {
        setError(true);
      }
      finally {
          setIsLoaded(true);
      }
  }

  useEffect(() => {
    retrieveEvStations();
  }, [])

  if (!isLoaded) {
      return <Typography textAlign="center">Loading...</Typography>;
  }

  if (isLoaded && error) {
      return <Typography textAlign="center">Error retrieving listings.</Typography>;
  }

  return (
      <Grid container spacing={1}>
          <Grid item xs={12} >
              <Grid container padding={6} spacing={2}>
              {evStations.map((evStation, index) =>
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <EvStationCard evStation={evStation} />
                </Grid>
              )}
              </Grid>
          </Grid>
      </Grid>
  );
}

export default EvStationListPage;