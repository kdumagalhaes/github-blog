export interface ArticleModel {
  id: string
  number: number
  title: string
  date: number
  summary: string
  url: string
}

export const articles: ArticleModel[] = [
  {
    id: '1',
    number: 9,
    title: 'Boas práticas para devs em início de carreira',
    date: 6,
    summary:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...',
    url: 'http://google.com',
  },
  {
    id: '2',
    number: 12,
    title: 'Front-end, Back-end e Full Stack',
    date: 1,
    summary:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...',
    url: 'http://google.com',
  },
  {
    id: '3',
    number: 14,
    title: 'O que são arrays e como utilizá-los no JavaScript',
    date: 0,
    summary:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...',
    url: 'http://google.com',
  },
  {
    id: '4',
    title: 'JavaScript data types and data structures',
    date: 6,
    summary:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...',
    url: 'http://google.com',
  },
  {
    id: '5',
    title: 'JavaScript data types and data structures',
    date: 6,
    summary:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...',
    url: 'http://google.com',
  },
  {
    id: '6',
    title: 'JavaScript data types and data structures',
    date: 6,
    summary:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...',
    url: 'http://google.com',
  },
]
