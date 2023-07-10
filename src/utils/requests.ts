const API_URL = "https://api.shipup.co";

//todo : change this to use authentication
const TOKEN = "lnWvjqugGwUay3jKE8j31w";
export function getAuthToken() {
  return `Bearer ${TOKEN}`;
}

export async function getOrderById(id: string) {
  return await fetch(`${API_URL}/v2/orders`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: getAuthToken(),
    },
  });
}
