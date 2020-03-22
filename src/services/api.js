const fetchApi = async (url, method = 'GET') => {
  const response = await fetch(url, {
    method,
  })
  const json = await response.json()

  return json
}

const debug = async state => {
  if (!state) {
    return null
  }

  switch (state) {
    case 'JOIN_GAME_PROMPT':
      return fetchApi('http://www.mocky.io/v2/5e7778d63300004c00099fe9')
    case 'NEW_GAME':
      return fetchApi('http://www.mocky.io/v2/5e7668bc2f00007100986068')
    case 'DID_JOIN_GAME':
      return fetchApi('http://www.mocky.io/v2/5e7781b23300000937099ff7')
    case 'NEW_PLAYER':
      return fetchApi('http://www.mocky.io/v2/5e766fe22f0000f157986078')
    case 'GET_PLAYERS':
      return fetchApi('http://www.mocky.io/v2/5e766f432f00007100986076')
    case 'START_GAME':
      return fetchApi('http://www.mocky.io/v2/5e7671942f00007100986081')
    case 'IMAGE_ROUND':
      return fetchApi('http://www.mocky.io/v2/5e7672be2f00007100986086')
    case 'CAPTION_ROUND':
      return fetchApi('http://www.mocky.io/v2/5e7672df2f0000e757986087')
  }

  return null
}

export { debug }
