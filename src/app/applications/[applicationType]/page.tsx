import { notFound } from 'next/navigation';

import { applicationList, applicationsType } from '@/constants/applications';

import { ApplicationList } from '@/templates/applications';

import { ApplicationType } from '@/types/applications';

export default async function AblestackService({
  params,
}: {
  params: Promise<{ applicationType: ApplicationType }>;
}) {
  const { applicationType } = await params;

  if (!applicationsType.includes(applicationType)) return notFound();

  return (
    <div className='flex justify-center animate-fade-in mt-12'>
      <ApplicationList applicationList={applicationList[applicationType]} />
    </div>
  );
}
