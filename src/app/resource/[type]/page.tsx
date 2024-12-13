import { notFound } from 'next/navigation';

import { resourceType } from '@/constants/resource';

import { ResourceType } from '@/types/resource';

export default async function Resource({ params }: { params: Promise<{ type: ResourceType }> }) {
  const { type } = await params;

  if (!resourceType.includes(type)) return notFound();

  return <div className='flex flex-col items-center pt-6 animate-fade-in'>{type}</div>;
}
