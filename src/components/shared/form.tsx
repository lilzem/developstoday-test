'use client';

import { FC, useState } from 'react';

import { Button } from '@/components/ui';
import { FilterSelect } from '@/components/shared/filter-select';
import { SelectItem } from '@/components/ui/select';
import { Vehicle } from '@/entities/vehicle';
import { cn } from '@/lib/utils';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

interface FormProps {
	className?: string;
	data: Vehicle[];
	years: string[];
}

type Form = {
	makeId: string;
	year: string;
};

export const Form: FC<FormProps> = ({ className, data, years }) => {
	const { pending } = useFormStatus();

	const [makeId, setMakeId] = useState<string>('');
	const [year, setYear] = useState<string>('');

	return (
		<form className={cn('flex gap-4', className)}>
			<FilterSelect selected={makeId} onSelect={setMakeId} placeholder="Choose vehicle">
				{data?.map((item: Vehicle) => (
					<SelectItem key={item.MakeId} value={item.MakeId.toString()}>
						{item.MakeName}
					</SelectItem>
				))}
			</FilterSelect>

			<FilterSelect selected={year} onSelect={setYear} placeholder="Choose year">
				{years.map((item: string, index: number) => (
					<SelectItem key={index} value={item}>
						{item}
					</SelectItem>
				))}
			</FilterSelect>

			<Link href={`result/${makeId}/${year}`}>
				<Button disabled={pending || !makeId || !year}>Next</Button>
			</Link>
		</form>
	);
};
