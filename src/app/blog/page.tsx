// "use client";
import PostCards from "@components/PostCar/PostCards";
import SearchBar from "@components/SearchBar/SearchBar";

export default function Blog() {
  return (
    <div className="container mx-auto">
      {/* <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" /> */}
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
