import LoadingSpinner from '@/components/common/loading-spinner/loading-spinner.component';
import { RecipeService } from '@/shared/services/recipe.service';
import '@/styles/globals.scss';
import { Interweave } from 'interweave';
import { useEffect, useState } from 'react';

const RecipeDetails = ({ id }) => {
  const [ details, setDetails ] = useState();
  const [ summary, setSummary ] = useState();
  const recipeService = new RecipeService();

  useEffect(() => {
    recipeService.getRecipe(id).then((result: any) => {
      setDetails(result);
      setSummary(result.summary);
    })
  }, []);

  if (!details) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <h1>{details.title}</h1>
      <img alt={details.title} src={details.image} />
      <Interweave content={summary}/>
    </div>
  )
}

export default RecipeDetails;
