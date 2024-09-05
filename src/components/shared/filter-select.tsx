import { FC, ReactNode } from 'react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Vehicle } from '@/entities/vehicle';

interface FilterSelectProps {
	className?: string;
	children: ReactNode;
	placeholder: string;
	selected?: any;
	name?: string;
	onSelect?: (v?: any) => void;
}

export const FilterSelect: FC<FilterSelectProps> = ({ className, placeholder, selected, onSelect, name, children }) => {
	return (
		<Select name={name} defaultValue={selected} onValueChange={onSelect}>
			<SelectTrigger className={cn('w-[200px]', className)}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>{children}</SelectGroup>
			</SelectContent>
		</Select>
	);
};
