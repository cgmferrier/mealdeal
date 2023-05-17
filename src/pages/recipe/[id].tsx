'use client';
import { useRouter } from 'next/router';

export default function RecipePage() {
  const { query } = useRouter();
  console.log(query.id);

  return (
    <div>Recipe {query.id}</div>
  )
}
