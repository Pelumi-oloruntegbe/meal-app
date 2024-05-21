import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import ReactPlayer from "react-player/youtube";

const SingleMeal = () => {
    const { mealId } = useParams();
    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
    const finalUrl = `${url}${mealId}`;
    const [isLoading, setIsLoading] = useState(true);
    const [food, setFood] = useState(null);
    const getData = async () =>{
        try {
            const res = await fetch(finalUrl);
            const data = await res.json();
            setIsLoading(false)
            console.log(data);

            if (data.meals) {
                const { strMeal, strTags, strCategory, strMealThumb, strArea, strInstructions, strYoutube, } = data.meals[0];
                setFood({ strMeal, strTags, strCategory, strMealThumb, strArea, strInstructions, strYoutube,});
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getData()
    }, []);

    if(isLoading) {
        return <Loading />
    }
  return (
    <div className="container">
      <img
        src={food.strMealThumb}
        className="w-100 object-fit-cover"
        height={"400px"}
      />
      <div>
        <p className="1h-lg mt-3">
          <span className="bg-success text-white p-2 me-2 rounded-2">
            Name :
          </span>
          {food.strMeal}
        </p>

        <p className="1h-lg">
          <span className="bg-success text-white p-2 me-2 rounded-2">
            Category :
          </span>
          {food.strCategory}
        </p>

        <p className="1h-lg">
          <span className="bg-success text-white p-2 me-2 rounded-2">
            Tags :
          </span>
          {food.strTags}
        </p>

        <p className="1h-lg">
          <span className="bg-success text-white p-2 me-2 rounded-2">
            Area :
          </span>
          {food.strArea}
        </p>

        <p className="1h-lg">
          <span className="bg-success text-white p-2 me-2 rounded-2">
            Instructions :
          </span>
          {food.strInstructions}
        </p>
        <p className="1h-lg">
          <span className="bg-success text-white p-2 me-2 rounded-2">
            Video Instructions :
          </span>
        </p>
        <div className="my-2">
          <ReactPlayer url={food.strYoutube} controls={true} width={'100%'} height={'450px'} playing={false}/>
        </div>
      </div>
    </div>
  );
}

export default SingleMeal;
