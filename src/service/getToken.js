export const getToken = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(
      JSON.parse(window.localStorage.getItem("persist:loginRedux")).tokens
    )?.token;
  }
};
