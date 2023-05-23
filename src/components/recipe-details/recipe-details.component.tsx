import LoadingSpinner from '@/components/common/loading-spinner/loading-spinner.component';
import RecipeSummary from '@/components/recipe-summary/recipe-summary.component';
import { Recipe } from '@/shared/interfaces/recipe.interface';
import { Summary } from '@/shared/interfaces/summary.interface';
import { RecipeService } from '@/shared/services/recipe.service';
import '@/styles/globals.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import './recipe-details.component.scss';

const RecipeDetails = ({ id }: any) => {
  const [ details, setDetails ] = useState<Recipe>();
  const [ summary, setSummary ] = useState<Summary>();
  const recipeService = new RecipeService();

  useEffect(() => {
    recipeService.getRecipe(id).then(({ healthScore, readyInMinutes, servings, ...result}) => {
      setDetails(result as any);
      setSummary({ healthScore, readyInMinutes, servings });
    })
  }, []);

  if (!details || !summary) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <Link href="/" >Back</Link>
      <section className="recipe-details">
        <h2>{details.title}</h2>
        <img alt={details.title} src={details.image} />
        <RecipeSummary { ...summary } />
      </section>
    </div>
  )
}

export default RecipeDetails;
