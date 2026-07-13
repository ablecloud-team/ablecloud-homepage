import { getCompatibilityCatalogData } from '@/constants/resource';
import { CompatibilityCatalog } from '@/templates/resource';

export default async function Compatibility({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const { categories, labels, sections } = await getCompatibilityCatalogData();
  const resolvedSearchParams = await searchParams;
  const initialCategory =
    categories.find(category => category.key === resolvedSearchParams?.category)?.key ?? 'hypervisor';

  return (
    <CompatibilityCatalog
      categories={categories}
      initialCategory={initialCategory}
      labels={labels}
      sections={sections}
    />
  );
}
