interface Params {
  url?: string;
  opts?: any;
  method?: "get" | "post" | "put";
}

export async function useRequestApi({ url, opts, method = "get" }: Params) {
  console.log(url, "??url");

  const config = useRuntimeConfig();
  //   const route = useRoute();
  //   const query = route.params.id;

  const { data } = await useFetch(url, {
    method,
    baseURL: config.public.apiBase,
    // onRequest({ request, options }) {
    //   if (method === "post") {
    //     options.body = { ...opts };
    //     options.query = query;
    //   } else {
    //     options.query = Object.assign(query, { ...opts });
    //   }
    // },
  });

  return data.value;
}
