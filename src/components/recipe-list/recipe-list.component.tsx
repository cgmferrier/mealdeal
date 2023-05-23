'use client';

import CustomLink from '@/components/common/custom-link/custom-link.component';
import LoadingSpinner from '@/components/common/loading-spinner/loading-spinner.component';
import { RecipeService } from '@/shared/services/recipe.service';
import { FormEvent, useEffect, useState } from 'react';
import './recipe-list.component.scss';

const RecipeList = () => {
  const [ name, setName ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ recipes, setRecipes ] = useState([] as any[]);
  const recipeService = new RecipeService();

  useEffect(() => {
    setLoading(true);
    recipeService.getRandomRecipes().then(recipes => {
      setLoading(false);
      setRecipes(recipes.recipes);
    });
  }, []);

  const fetchRecipes = () => {
    recipeService.getRecipes(name).then(recipes => {
      setLoading(false);
      setRecipes(recipes.results);
    });
  }

  const goToDetails = () => {
    console.log('hi')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetchRecipes();
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      <ul className="recipe-list">{recipes && recipes.map(({ id, image, title }) => {
        return (
          <li className="recipe" key={id}>
            <CustomLink href={`/recipe/${id}`}>
              <div className="recipe-title">{title}</div>
              <img className="recipe-img" alt={title} src={image}/>
            </CustomLink>
          </li>
        )
      })}
      </ul>
    </section>
  )
}

export default RecipeList;
