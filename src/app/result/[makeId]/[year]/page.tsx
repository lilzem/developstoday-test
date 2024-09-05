import { Suspense } from 'react';

import { getMakeIds } from '@/app/api/vehicles';
import { Loading, VehicleList } from '@/components/shared';
import { YEARS } from '@/lib/constants';

export async function generateStaticParams() {
	const makeIds = await getMakeIds();

	if (!makeIds) {
		return;
	}

	const paths = makeIds.flatMap((makeId: string) =>
		YEARS.map((year) => ({
			makeId,
			year,
		}))
	);

	return paths;
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
