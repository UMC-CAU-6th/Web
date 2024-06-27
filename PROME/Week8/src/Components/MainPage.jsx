import { useState } from "react";
import { MoviePage } from "./MoviePage";

export const MainPage = () => {
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState(null);

  const debounceSearch = (e) => {
    if (debounce) {
      clearTimeout(debounce);
    }
    setDebounce(
      setTimeout(() => {
        setSearch(e.target.value);
      }, 1000)
    );
  };
  // 민규 코드 (Typescript)
  // function debounce(func: (input?: string) => void, wait: number) {
  //   let timeout: number;
  //   return function (input: string) {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => func.apply(this, [input]), wait);
  //   };
  // }
  return (
    <div>
      <form className="flex justify-center p-5">
        <input
          type={"text"}
          placeholder="검색어를 입력하세요"
          onChange={(e) => {
            debounceSearch(e);
          }}
          className="border-2 border-gray-300 p-2"
        />

        {/* 민규 코드 (Typescript)
        <Input
        onChange={(event) => {
          if (event.target.value === "") {
            debounce(() => {
              setMovieState(undefined);
            }, 1000)(event.target.value);
          } else {
            debounce((input: string) => {
              setLoading(true);
              fetch(
                `https://api.themoviedb.org/3/search/movie?query=${input}`,
                options
              )
                .then((response) => response.json())
                .then((response) => setMovieState(response.results[0]))
                .catch((err) => console.error(err))
                .finally(() => {
                  setLoading(false);
                });
            }, 1000)(event.target.value);
          }
        }}
      ></Input> */}
      </form>
      <MoviePage category={`?query=${search}`} search={true} />
    </div>
  );
};
