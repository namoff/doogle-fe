export const DoogleService = (data) => {

  const url = "http://localhost:3000/"

  return fetch(url, {
      method: "POST",
      body: data
  })
  .then(response => {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response;
  })
  .then(response => response.json())
  .then(response => {
      return (
        {
          mode: 'SUCCESS',
          words: response
        }
      );
  })
  .catch( error => {
    const errorMessage = error.message === '404' ? 'ERROR-NOT-FOUND'
                                                 : 'ERROR-UNKNOWN';
    return (
      {
        mode: errorMessage,
        words: []
      }
    );
  })
}
