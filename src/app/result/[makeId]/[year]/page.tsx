import { Suspense } from 'react';

import { getVehicles } from '@/app/api/vehicles';
import { Loading, VehicleList } from '@/components/shared';
import { Vehicle } from '@/entities/vehicle';

export async function generateStaticParams() {
	const vehicles = await getVehicles();

	if (!vehicles) {
		return;
	}

	return vehicles.map((vehicle: Vehicle) => {
		console.log({ makeId: vehicle.MakeId });

		return {
			makeId: vehicle.MakeId.toString(),
		};
	});
}

async function ResultPage({ params }: { params: { makeId: string; year: string } }) {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<VehicleList makeId={params.makeId} year={params.year} />
			</Suspense>
		</>
	);
}

export default ResultPage;
