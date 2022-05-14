const prod = {
  url: {
    API_URL: "", // services not ready yet
  },
};

export const dev = {
  url: {
    API_URL: process.env.NEXT_PUBLIC_LOCAL_BASE_API,
  },
};

export const apiConfig = process.env.NODE_ENV === "development" ? dev : prod;
