import React from "react";
import { useSelector } from "react-redux";

import { ApplicationState } from "#/core/store/store";
import { Search } from "#/search/routes/search/search";
import { SearchState } from "#/search/store/types";

export function SearchRoute() {
  const { name, series, isLoading } = useSelector<ApplicationState, SearchState>((state) => state.search);

  return <Search name={name} series={series} isLoading={isLoading} />;
}
