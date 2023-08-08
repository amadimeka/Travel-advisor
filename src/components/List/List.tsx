import {
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import styled from '@mui/material/styles/styled';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const StyledFormControl = styled(FormControl)(
	({ theme }) => ({
		margin: theme.spacing(1),
		minWidth: 120,
		variant: 'outlined',
		marginBottom: '30px',
	})
);
const Container = styled('div')(({}) => ({
	padding: '25px',
}));

const List = ({ places }: any) => {
	const [type, setType] = useState('');
	const [rating, setRating] = useState('');
	console.log(places);
	return (
		<Container>
			<Typography variant="h6">
				Resturant Hotels and attractions around
				you
			</Typography>
			<StyledFormControl>
				<InputLabel>Type</InputLabel>
				<Select
					value={type}
					onChange={(e) =>
						setType(e.target.value)
					}>
					<MenuItem value="resturant">
						Resturant
					</MenuItem>
					<MenuItem value="hotel">
						Hotels
					</MenuItem>
					<MenuItem value="attraction">
						Attraction
					</MenuItem>
				</Select>
			</StyledFormControl>
			<StyledFormControl>
				<InputLabel>Rating</InputLabel>
				<Select
					value={rating}
					// label="Age"
					onChange={(e) =>
						setRating(e.target.value)
					}>
					<MenuItem value={0}>All</MenuItem>
					<MenuItem value={3}>Above 3.0</MenuItem>
					<MenuItem value={4}>Above 4.0</MenuItem>
					<MenuItem value={4.5}>
						Above 4.5
					</MenuItem>
				</Select>
			</StyledFormControl>
			<Grid
				container
				style={{
					height: '75vh',
					overflow: 'auto',
				}}>
				{places?.map(
					(place: any, index: number) => (
						<Grid item xs={12} key={index}>
							<PlaceDetails place={place} />
						</Grid>
					)
				)}
			</Grid>
		</Container>
	);
};

export default List;
