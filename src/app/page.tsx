import { Container, Form } from '@/components/shared';
import { getVehicles } from './api/vehicles';
import { YEARS } from '@/lib/constants';

export default async function Home() {
	const data = await getVehicles();

	return (
		<Container className="flex justify-center">
			<Form data={data} years={YEARS} />
		</Container>
	);
}
