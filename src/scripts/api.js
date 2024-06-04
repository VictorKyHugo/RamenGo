export const getBroths = async () => {
  const response = await fetch("https://api.tech.redventures.com.br/broths", {
    method: "GET",
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
  });

  const data = await response.json();

  return data;
};

export const getProteins = async () => {
  const response = await fetch("https://api.tech.redventures.com.br/proteins", {
    method: "GET",
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
  });

  const data = await response.json();

  return data;
};

export const postOrder = async () => {
  const response = await fetch("https://api.tech.redventures.com.br/orders", {
    method: "POST",
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  return data;
};
