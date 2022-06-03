import {
  useState,
  ReactNode,
  useContext,
  createContext,
  SetStateAction,
} from 'react';

type SearchContextData = {
  search: string;
  setSearch: (props: SetStateAction<string>) => void;
};

interface SearchProviderProps {
  children: ReactNode;
}

const SearchContext = createContext({} as SearchContextData);

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ setSearch, search }}>
      {children}
    </SearchContext.Provider>
  );
};

function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('Search must exist to use input search');
  }

  return context;
}

export { SearchProvider, useSearch };
