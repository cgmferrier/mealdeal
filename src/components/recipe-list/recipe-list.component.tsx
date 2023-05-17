'use client';

import LoadingSpinner from '@/components/common/loading-spinner/loading-spinner.component';
import { RecipeService } from '@/shared/services/recipe.service';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import './recipe-list.component.scss';

const RecipeList = () => {
  const [ name, setName ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ recipes, setRecipes ] = useState([] as any[]);
  const mealService = new RecipeService();

  useEffect(() => {
    setLoading(true);
    mealService.getRandomRecipes().then(recipes => {
      setLoading(false);
      setRecipes(recipes.recipes);
    });
  }, []);

  const fetchRecipes = () => {
    mealService.getRecipes(name).then(recipes => {
      setLoading(false);
      setRecipes(recipes.results);
    });
  }

  const handleSubmit = (e) => {
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
            <Link href={`/recipe/${id}`}>
              <div className="recipe-title">{title}</div>
              <img className="recipe-img" alt={title} src={image}/>
            </Link>
          </li>
        )
      })}
      </ul>
    </section>
  )
}

export default RecipeList;