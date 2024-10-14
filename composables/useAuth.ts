import { useAuthUser } from "./useAuthUser";

export const useAuth = () => {
  const authUser = useAuthUser();
  const cookie = ref(null); // Initialize the cookie variable

  const setUser = (user: any) => {
    authUser.value = user;
  };

  const setCookie = (newCookie: any) => {
    cookie.value = newCookie;
  };

  const login = async (email: string, password: string, rememberMe: boolean) => {
    const data = await $fetch("/auth/login", {
      method: "POST",
      body: {
        email,
        password,
        rememberMe,
      },
    });
    if (data && typeof data === 'object' && 'user' in data) {
      setUser((data as { user: any }).user);
    }

    return authUser;
  };

  const logout = async () => {
    const data = await $fetch("/auth/logout", {
      method: "POST",
    });
    if (data && typeof data === 'object' && 'user' in data) {
      setUser((data as { user: any }).user);
    }
  };

  const me = async () => {
    if (!authUser.value) {
      try {
        const data = await $fetch("/auth/me", {
          headers: useRequestHeaders(["cookie"]) as HeadersInit,
        });

        if (data && typeof data === 'object' && 'user' in data) {
          setUser((data as { user: any }).user);
        }
      } catch (error) {
        setCookie(null);
      }
    }

    return authUser;
  };

  return {
    login,
    logout,
    me,
  };
};


// import { useAuthUser } from "./useAuthUser";

// export const useAuth = () => {
//   const authUser = useAuthUser();

//   const setUser = (user: any) => {
//     authUser.value = user;
//   };

//   const setCookie = (cookie: any) => {
//     cookie.value = cookie;
//   };

//   const login = async (email: string, password: string, rememberMe: boolean) => {
//     const data = await $fetch("/auth/login", {
//       method: "POST",
//       body: {
//         email,
//         password,
//         rememberMe,
//       },
//     });
//     if (data && typeof data === 'object' && 'user' in data) {
//         setUser((data as { user: any }).user);
//       }

//     // setUser(data.user);

//     return authUser;
//   };

//   const logout = async () => {
//     const data = await $fetch("/auth/logout", {
//       method: "POST",
//     });
//     if (data && typeof data === 'object' && 'user' in data) {
//         setUser((data as { user: any }).user);
//       }

//     // setUser(data.user);
//   };

//   const me = async () => {
//     if (!authUser.value) {
//       try {
//         const data = await $fetch("/auth/me", {
//           headers: useRequestHeaders(["cookie"]) as HeadersInit,
//         });

//         if (data && typeof data === 'object' && 'user' in data) {
//             setUser((data as { user: any }).user);
//           }

//         // setUser(data.user);
//       } catch (error) {
//         setCookie(null);
//       }
//     }

//     return authUser;
//   };

//   return {
//     login,
//     logout,
//     me,
//   };
// };