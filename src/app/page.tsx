import { Container, Form } from '@/components/shared';
import { getVehicles } from './api/vehicles';

export const YEARS = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

export default async function Home() {
	const data = await getVehicles();

	return (
		<Container className="flex justify-center">
			<Form data={data} years={YEARS} />
		</Container>
	);
}
