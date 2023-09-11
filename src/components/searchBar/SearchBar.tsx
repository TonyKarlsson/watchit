"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
type Input = {
  searchTerm: string;
};

type SearchBarProps = {
  setSearchTerm?: (searchTerm: string) => void;
};

export const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
  const { register, handleSubmit } = useForm<Input>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Input> = ({ searchTerm }) => {
    if (searchTerm) {
      router.push(`/search/${searchTerm}`);
    }
  };

  return (
    <div className="mb-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </span>
          <input
            {...register("searchTerm")}
            type="search"
            name="searchTerm"
            className="max-w-sm w-full py-2 rounded-full pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search movie titles"
          />
        </div>
      </form>
    </div>
  );
};
