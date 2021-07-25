const setupTags = recipes => {
  const allTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firsTag] = a
    const [secondTag] = b
    return firsTag.localeCompare(secondTag)
  })
  // console.log(newTags)
  return newTags
}

export default setupTags
