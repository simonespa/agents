const currentUrl = 'https://bbc.co.uk/news/articles';
const queryString = 'name=JohnDoe&age=30';
const ptrtUrl = `${currentUrl}${encodeURIComponent(`?${queryString}`)}`;
