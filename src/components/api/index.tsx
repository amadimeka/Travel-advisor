import axios from 'axios';

const URL =
	'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlaceData = async (
	sw: { lat: any; lng: any },
	ne: { lat: any; lng: any }
) => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, {
			params: {
				bl_latitude: sw.lat,
				tr_latitude: ne.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
			},
			headers: {
				'X-RapidAPI-Key':
					'a8c6cf8603msh0a435d9e261b56bp1ed541jsnb1587e5dab25',
				'X-RapidAPI-Host':
					'travel-advisor.p.rapidapi.com',
			},
		});
		return data;
	} catch (err) {
		console.log(err);
	}
};
