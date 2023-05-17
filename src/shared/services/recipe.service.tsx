export class RecipeService {
  apiKey = '11d12885183641b6849b083c5277eb8b';
  baseUrl = 'https://api.spoonacular.com/recipes';

  getRandomRecipes(amount = 10): Promise<{ recipes: any[] }> {
    return fetch(`${this.baseUrl}/random?apiKey=${this.apiKey}&number=${amount}`).then(response => response.json());
  }

  // TODO create interface for Recipe
  getRecipes(name: string, amount = 10): Promise<{ results: any[] }> {
    return fetch(`${this.baseUrl}/complexSearch?apiKey=${this.apiKey}&query=${name}&number=${amount}`).then(response => response.json());
  }

  getRecipe(id: number): Promise<any> {
    return fetch(`${this.baseUrl}/${id}/information`).then(response => response.json());
  }
}
