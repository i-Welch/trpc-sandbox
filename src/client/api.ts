import {
  createTRPCProxyClient,
  httpBatchLink,
} from "../trpc/packages/client/dist";
import { AppRouter } from "../server";

export const g = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3200",
    }),
  ],
});
