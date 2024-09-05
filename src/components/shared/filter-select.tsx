import { FC, ReactNode } from 'react';

import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface FilterSelectProps {
	className?: string;
	children: ReactNode;
	placeholder: string;
	selected?: string;
	name?: string;
	onSelect?: (v: string) => void;
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
