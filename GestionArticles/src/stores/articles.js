import { ref } from 'vue'

const articles = ref([
  { id: 1, name: "Article 1", description: "Description de l'article 1", price: 10.99 },
  { id: 2, name: "Article 2", description: "Description de l'article 2", price: 19.99 },
  { id: 3, name: "Article 3", description: "Description de l'article 3", price: 5.99 },
  { id: 4, name: "Article 4", description: "Description de l'article 4", price: 15.99 },
  { id: 5, name: "Article 5", description: "Description de l'article 5", price: 8.99 },
  { id: 6, name: "Article 6", description: "Description de l'article 6", price: 12.99 },
  { id: 7, name: "Article 7", description: "Description de l'article 7", price: 12.99 },
])

export function useArticles() {
  function addArticle(article) {
    const newId = articles.value.length
      ? Math.max(...articles.value.map(a => a.id)) + 1
      : 1
    articles.value.push({ id: newId, ...article })
  }

  function removeArticle(id) {
    articles.value = articles.value.filter(a => a.id !== id)
  }

  return { articles, addArticle, removeArticle }
}