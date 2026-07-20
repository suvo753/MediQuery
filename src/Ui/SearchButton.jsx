'use client';

import { SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function SearchButton() {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.push(`?${params.toString()}`);
  };


  const handleFilter = () => {
  router.push("/tutors");
};

  return (

    <div className="flex justify-between items-center container md:mx-10">


      <div>


    <SearchField className="w-full mt-10">
      <SearchField.Group>
        <SearchField.SearchIcon />

        <SearchField.Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Tutor / Subject..."
        />

        <SearchField.ClearButton />

        <button
          type="button"
          onClick={handleSearch}
          className="btn btn-primary"
        > Search
        </button>
      </SearchField.Group>
    </SearchField>

      </div>


      <div className="mt-10">


    <button onClick={handleFilter} className="btn btn-secondary">Filter</button>

      </div>


    </div>
  );
}