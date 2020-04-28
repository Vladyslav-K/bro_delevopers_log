export const getQueryPage = (locationSearch: string) => {
  const query = new URLSearchParams(locationSearch)
  const queryPage = Number(query.get('page'))

  return queryPage
}
