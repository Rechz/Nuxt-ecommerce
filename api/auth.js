import { apiWrapper } from "~/api/apiWrapper";
export function useAuthentication() {
  const { $axios } = useNuxtApp();
  const login = async (payload) => {
    return await apiWrapper(() => $axios.post(`/auth/login?username=${payload.name}&password=${payload.password}`));
      }
//     const login = async (payload) => { 
//     return await apiWrapper(() => $axios.post('/users/login',{"email":payload.name,"password":payload.password},{withCredentials:true}));
//   }
  const logout = () => {
    navigateTo('/')
  }
    return { login, logout };
}
