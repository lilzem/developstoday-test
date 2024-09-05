import { Vehicle } from '@/entities/vehicle';
import axios from './axios';

export async function getVehicles() {
	try {
		const { data } = await axios.get('/vehicles/GetMakesForVehicleType/car?format=json');

		if (!data) {
			return;
		}

		return data.Results;
	} catch (err) {
		console.log(err);
	}
}

export async function getMakeIds() {
	try {
		const { data } = await axios.get('/vehicles/GetMakesForVehicleType/car?format=json');

		if (!data) {
			return;
		}

		return data.Results.map((item: Vehicle) => item.MakeId.toString());
	} catch (err) {
		console.log(err);
	}
}

export async function getModels(makeId: string, year: string) {
	try {
		const { data } = await axios.get(
			`/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
		);

		if (!data) {
			return;
		}

		return data.Results;
	} catch (err) {
		console.log(err);
	}
}
