export const updateUserProfile = (profileData) => ({
  type: "UPDATE_USER_PROFILE",
  payload: profileData,
});

export const fetchUserDetails = (userId) => {
  return async (dispatch) => {
    try {
      // Implement API call to fetch user details based on userId
      const response = await fetch(
        `API_ENDPOINT_FOR_USER_DETAILS?userId=${userId}`,
      );
      const data = await response.json();

      dispatch({
        type: "FETCH_USER_DETAILS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_USER_DETAILS_FAILURE",
        payload: error.message,
      });
    }
  };
};
