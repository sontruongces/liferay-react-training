import api from "./apis";

export const addInsurance = async (data) => {
  const response = await api.post("/o/c/insurances", data);
  return response;
};
