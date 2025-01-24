import PostCards from "@components/PostCar/PostCards";
import SearchBar from "@components/SearchBar/SearchBar";
export default function Blog() {
  return (
    <div className="container mx-auto">
      <div id="search-filters" className="flex flex-col gap-10">
        <h5 className="text-center font-semibold text-2xl lg:font-mostbold lg:text-3xl">
          جستجو میان گنجینه ها
        </h5>
        <SearchBar></SearchBar>
        <PostCards />
      </div>
    </div>
  );
}
