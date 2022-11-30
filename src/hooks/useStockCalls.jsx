import { useDispatch } from "react-redux";
import { fetchStart, fetchFail, getSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCalls = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  //!----------------GET CALLS------------------
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  //!----------------DELETE CALLS------------------
  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} successfuly deleted`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be deleted`);
    }
  };

  //!----------------POST CALLS------------------
  const postStockData = async (url, info) => {
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} successfuly added`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
    }
  };
  //!----------------PUT CALLS------------------
  const putStockData = async (url, info) => {
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successfuly updated`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be updated`);
    }
  };

  return { getStockData, deleteStockData, postStockData, putStockData };
};

export default useStockCalls;
