import { FC } from 'react';

import { cn } from '@/lib/utils';
import { Title } from './title';

interface VehicleProps {
	className?: string;
	makeName: string;
	modelName: string;
}

export const Vehicle: FC<VehicleProps> = ({ className, makeName, modelName }) => {
	return (
		<div className={cn('p-8 flex gap-4 border-b items-center', className)}>
			<Title text={makeName} size="md" />
			<Title className="font-semibold" text={modelName} size="lg" />
		</div>
	);
};
