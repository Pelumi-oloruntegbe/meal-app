import { createContext, useState, useEffect, useContext } from "react";
const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);

const AppProvider =({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [foods, setFoods] = useState([]);
    const [searchValue, setSearchValue] =useState('');
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    const getData = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(`${url}${searchValue}`);
            const data = await res.json();
            setIsLoading(false);
            if(data.meals) {
                setFoods(data.meals);
            } else{
                setFoods([]);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() =>{
      const timeout=  setTimeout(() =>{
            getData()
        }, 3000);
        return () => clearTimeout(timeout);
    },[searchValue]);
  return <AppContext.Provider value={{isLoading, foods, searchValue, setSearchValue}}>{children}</AppContext.Provider>
}

export default AppProvider;