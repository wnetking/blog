const InitialState = {
  pageData: {
    title: '',
    content: ''
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
