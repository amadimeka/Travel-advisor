import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import List from './components/List/List';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import { getPlaceData } from './components/api';

const App = () => {
	const [places, setPlace] = useState([]);
	const [coord, setCoord] = useState({});

	const [bounds, setBounds] = useState({});
	console.log(coord);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) =>
				setCoord({
					lat: coords.latitude,
					lng: coords.longitude,
				})
		);
	}, []);
	useEffect(() => {
		getPlaceData(bounds.sw, bounds.ne).then(
			(data) => {
				console.log(data);
				setPlace(data);
			}
		);
	}, [bounds, coord]);
	return (
		<React.Fragment>
			<CssBaseline />
			<Header />
			<Grid
				container
				spacing={2}
				style={{ width: '100%' }}>
				<Grid item xs={8} md={4}>
					<List places={places} />
				</Grid>
				<Grid item xs={8} md={8}>
					<Map
						coordinate={coord}
						setCoordinate={setCoord}
						setBounds={setBounds}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default App;
