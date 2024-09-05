import { FC } from 'react';

import { getModels } from '@/app/api/vehicles';
import { Model } from '@/entities/model';
import { cn } from '@/lib/utils';
import { Vehicle } from './vehicle';

interface VehicleListProps {
	className?: string;
	makeId: string;
	year: string;
}

export const VehicleList: FC<VehicleListProps> = async ({ className, makeId, year }) => {
	const models = await getModels(makeId, year);

	return (
		<div className={cn('flex flex-col gap-1', className)}>
			{models.map((model: Model) => (
				<Vehicle key={model.Make_Id} makeName={model.Make_Name} modelName={model.Model_Name} />
			))}
		</div>
	);
};
