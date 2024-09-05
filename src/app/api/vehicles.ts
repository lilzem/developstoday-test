import axios from './axios';

export async function getVehicles() {
	const { data } = await axios.get('/vehicles/GetMakesForVehicleType/car?format=json');

	if (!data) {
		return;
	}

	return data.Results;
}

export async function getModels(makeId: string, year: string) {
	const { data } = await axios.get(`/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);

	if (!data) {
		return;
	}

	return data.Results;
}
