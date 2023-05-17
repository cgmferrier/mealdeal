'use client';
import LoadingSpinner from '@/components/common/loading-spinner/loading-spinner.component';
import RecipeDetails from '@/components/recipe-details/recipe-details.component';
import { useRouter } from 'next/router';

export default function RecipePage() {
  const { query } = useRouter();

  if (!query.id) {
    return <LoadingSpinner />
  }

  return (
    <RecipeDetails id={query.id} />
  )
}
