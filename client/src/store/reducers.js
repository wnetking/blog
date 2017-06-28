const InitialState = {
  pageData: {
    title: 'Blog',
    content: '<h1>This is blog page</h1>'
  }
}

export const updatePageData = (state = InitialState, action) => {
  switch (action.type) {
    case 'UPDATE_PAGE':
      return {
        ...state,
        pageData: action.pageData
      }

    default:
      return state;
  }
}