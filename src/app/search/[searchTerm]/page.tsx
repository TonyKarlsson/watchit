import { Search as SearchComponent } from "@/components/search/Search";

export default function Search({ params }: { params: { searchTerm: string } }) {
  if (!params.searchTerm) return null;

  return <SearchComponent searchTerm={params.searchTerm} />;
}
