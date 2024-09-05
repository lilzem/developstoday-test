import { Suspense } from 'react';

import { getVehicles } from '@/app/api/vehicles';
import { Loading, VehicleList } from '@/components/shared';
import { Vehicle } from '@/entities/vehicle';
import { YEARS } from '@/lib/constants';

export async function generateStaticParams() {
	const vehicles = await getVehicles();

	if (!vehicles) {
		return;
	}

	return vehicles.map((vehicle: Vehicle, index: number) => ({
		makeId: vehicle.MakeId.toString(),
		year: YEARS[index],
	}));
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
