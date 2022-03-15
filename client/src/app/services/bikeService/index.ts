import { apolloClient } from "../../graphql";
import { GET_ALL_BIKES } from "./queries";
import { GetBikes_bikes } from "./__generated__/GetBikes";

class BikeService {
  public async getBikes(): Promise<GetBikes_bikes[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_BIKES })
      .catch((err) => {
        throw err;
      });

    if (response && response.data) return response.data as GetBikes_bikes[];

    return [];
  }
}

export default new BikeService();
