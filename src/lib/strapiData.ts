const strapiUrl = import.meta.env.STRAPI_URL;
const strapiToken = import.meta.env.STRAPI_API_TOKEN;

export const fetchData = async (url: string) => {
  const res = await fetch(`${strapiUrl}/api/${url}?populate=*`, {
    headers: { Authorization: `Bearer ${strapiToken}` },
  }).then((res) => res.json());
  return res.data || {};
};
