import { notFound } from 'next/navigation';

import { applicationNames } from '@/constants/applications';

import { ApplicationNames } from '@/types/applications';

export default async function AblestackService({
  params,
}: {
  params: Promise<{ applicationName: ApplicationNames }>;
}) {
  const { applicationName } = await params;

  if (!applicationNames.includes(applicationName)) return notFound();

  return <></>;
}
