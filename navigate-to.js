export function navigateTo(endpoint) {
  let finalEndpoint = endpoint;

  if(endpoint.startsWith('http')) {
    const endpointUrl = new URL(endpoint);
    finalEndpoint = endpointUrl.pathname + endpointUrl.search;
  }

  const currUrl = new URL(window.location.href);
  const language = currUrl.searchParams.get('lang');

  let newUrl = new URL(currUrl.origin + finalEndpoint);

  if(language) {
    newUrl.searchParams.append('lang', language);
  }
  
  location.href = newUrl.href;
}
