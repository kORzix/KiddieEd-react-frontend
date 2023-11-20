import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useContext } from 'react';
import { PROXY } from "../configs";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext); // Use useContext to access the context

  const popupSuccessful = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'You successfully created the account!',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const signup = async ({ email, password,name, role }) => {
    setIsLoading(true);
    setError(null);
    console.log("useSignup")
    console.log({email, password, name, role})
    try {
      const response = await axios.post(PROXY + "/user/register", {
        email,
        password,
        name,
        role,
      });
      if (response.status === 200) {
        console.log(response.data)
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch({ type: 'LOGIN', payload: response.data.user }); // Use LOGIN type
        popupSuccessful();
      } else {
        console.log(response.data.error);
        setError(response.data.error);
      }
    } catch (error) {
      setError(() => {
        if (error.response) {
          return error.response.data.error;
        } else {
          return 'An error occurred while signing up.';
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
