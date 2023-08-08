import GoogleMapReact from 'google-map-react';

// interface Coord {
// 	lat: number;
// 	long: number;
// }
// interface Props {
// 	coordinate: Coord[];
// 	setCoordinate: () => void;
// 	setBounds: () => void;
// }

const Map = ({
	coordinate,
	setCoordinate,
	setBounds,
}: any) => {
	return (
		<div
			style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: 'AIzaSyDaPNEbVRVNbMn0t5UMUZ6et1e0jIYXIgA',
				}}
				defaultCenter={coordinate}
				center={coordinate}
				defaultZoom={14}
				onChange={(e) => {
					console.log(e);
					setCoordinate({
						lat: e.center.lat,
						lng: e.center.lng,
					});
					setBounds({
						ne: e.marginBounds.ne,
						sw: e.marginBounds.sw,
					});
				}}
				margin={[
					50, 50, 50, 50,
				]}></GoogleMapReact>
		</div>
	);
};

export default Map;
