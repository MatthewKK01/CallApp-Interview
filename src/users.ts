import React from "react";
import create from 'zustand';
import axios from 'axios';



  const useUsers = create((set) => ({
    users: [],
    execute: async (url: string) => {
      const response = await axios.get(url);
      console.log(response);
      set({ users: await response.data})
    },
  }))

  export default useUsers