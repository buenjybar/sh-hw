import { Order } from "../models/all";

const API_URL = "https://api.shipup.co";

//todo : change this to use authentication
const TOKEN = "lnWvjqugGwUay3jKE8j31w";
export function getAuthToken() {
  return `Bearer ${TOKEN}`;
}

export async function getOrderById(id: string) {
  const req = await fetch(
    `${API_URL}/v2/orders?expand[]=fulfillments.trackers`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: getAuthToken(),
      },
    }
  );

  const data = await req.json();
  const parsed: Order[] = data.data.map((o: any) => ({
    firstName: o.first_name,
    lastName: o.last_name,
    trackers:
      o.fulfillments?.data.map((t: any) => ({
        id: t.id,
        status: t.status_code,
      })) ?? [],
  }));
  return parsed;
}
