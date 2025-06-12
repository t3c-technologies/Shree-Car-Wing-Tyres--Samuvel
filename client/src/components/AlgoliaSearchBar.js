import React, { useState, useRef, useEffect } from 'react';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox, useInstantSearch } from 'react-instantsearch';
import { AppIcon } from '@/lib/icon';
import { useMediaQuery } from '@/components/useMediaQuery';

const EmptyQueryBoundary = ({ children }) => {
  const { results } = useInstantSearch();

  if (!results?.__isArtificial && results?.nbHits === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        <AppIcon icon="lucide:search-x" className="mx-auto h-6 w-6 mb-2" />
        <p>No results found</p>
      </div>
    );
  }

  return children;
};

const Hit = ({ hit }) => (
  <div
    className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
    onClick={() => window.open(hit.url, '_blank')}
    title={hit.name}
  >
    <div className="flex items-center gap-3">
      {hit.image_urls?.[0] && (
        <img
          src={hit.image_urls[0]}
          alt={hit.name}
          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg"
          loading="lazy"
        />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-2">
          <h3 className="text-sm font-medium text-gray-900 truncate">{hit.name}</h3>
          <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium w-fit">
            <AppIcon icon="lucide:tag" className="w-3 h-3" />
            <span>{hit.group}</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 line-clamp-2 mt-1">{hit.description}</p>
      </div>
    </div>
  </div>
);

const AlgoliaSearchBar = ({
  width = "w-64",
  containerClass = "",
  mobileFullWidth = true
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchBoxRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchBoxWidth = isMobile && mobileFullWidth ? 'w-full' : width;

  return (
    <div
      ref={searchBoxRef}
      className={`relative ${searchBoxWidth} ${containerClass}`}
    >
      <InstantSearch
        searchClient={searchClient}
        indexName="tyres"
        future={{
          preserveSharedStateOnUnmount: true
        }}
        initialUiState={{
          tyres: {
            query: searchQuery
          }
        }}
      >
        <div className="relative">
          <SearchBox
            onFocus={() => setIsFocused(true)}
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Search tyres..."
            classNames={{
              root: 'relative w-full',
              form: 'relative',
              input: `w-full px-4 pl-10 py-2 rounded-lg border border-gray-200 pr-10 
                focus:outline-none focus:ring-2 focus:ring-blue-700 
                transition-all duration-300 text-gray-900 placeholder:text-gray-400
                ${isMobile ? 'text-base' : 'text-sm'}`,
              submit: 'hidden',
              reset: 'hidden',
              loadingIndicator: 'hidden'
            }}
          />
          <img
            src="/images/algolia.png"
            alt="Search by Algolia"
            className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-auto opacity-70"
            loading="lazy"
          />
        </div>

        {isFocused && (
          <div className={`fixed md:absolute mt-2 bg-white rounded-lg shadow-lg border border-gray-200 
            overflow-y-auto z-[100]
            ${isMobile ? 'inset-x-4 top-20 max-h-[70vh]' : 'w-full min-w-[300px] max-h-[calc(100vh-200px)]'}`}
          >
            <EmptyQueryBoundary>
              <Hits
                hitComponent={Hit}
                classNames={{
                  root: 'overflow-hidden',
                  list: 'divide-y divide-gray-100',
                  item: 'transition-colors duration-200'
                }}
              />
            </EmptyQueryBoundary>
          </div>
        )}
      </InstantSearch>
    </div>
  );
};

export default AlgoliaSearchBar;