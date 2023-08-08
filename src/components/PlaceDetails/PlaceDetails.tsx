import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';

const PlaceDetails = ({ place }: any) => {
	return (
		<Card>
			<CardMedia
				style={{ height: 350 }}
				image={
					place.photo
						? place.photo.images.large.url
						: ''
				}
				title={place.name}
			/>
			<CardContent>
				<Typography gutterBottom variant={'h5'}>
					{place.name}
				</Typography>
				<Box
					display="flex"
					justifyContent="space-between">
					<Typography variant="subtitle1">
						Price
					</Typography>
					<Typography
						gutterBottom
						variant="subtitle1">
						{place.price_level}
					</Typography>
				</Box>
				<Box
					display="flex"
					justifyContent="space-between">
					<Typography variant="subtitle1">
						Ranking
					</Typography>
					<Typography
						gutterBottom
						variant="subtitle1">
						{place.ranking}
					</Typography>
				</Box>
				{place?.awards?.map(
					(award: any, i: any) => (
						<Box
							key={i}
							my={1}
							display="flex"
							justifyContent="space-between"
							alignItems="center">
							<img
								src={award.images.small}
								alt="images"
							/>
							<Typography
								variant="subtitle2"
								color="textSecondary">
								{award.display_name}
							</Typography>
						</Box>
					)
				)}
			</CardContent>
		</Card>
	);
};

export default PlaceDetails;
