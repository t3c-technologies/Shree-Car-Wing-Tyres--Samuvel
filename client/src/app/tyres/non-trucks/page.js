"use client";

import { useState, useEffect, useCallback } from "react";
import { Filter, ChevronDown, Search, Shield, RotateCw, X, ChevronRight } from "lucide-react";

const NonTrucksPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    tyreConstruction: [],
    tyrePosition: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tyres, setTyres] = useState([]);
  const [filteredTyres, setFilteredTyres] = useState([]);

  const filterCategories = {
    tyreConstruction: {
      title: "Tyre Construction",
      type: "checkbox",
      options: [
        { id: "RADIAL", label: "Radial" },
        { id: "NYLON", label: "Nylon" },
      ],
    },
    tyrePosition: {
      title: "Tyre Position",
      type: "checkbox",
      options: [
        { id: "DRIVE", label: "Drive" },
        { id: "ALL WHEEL", label: "All Wheel" },
        { id: "FRONT", label: "Front" },
        { id: "TRAILER", label: "Trailer" },
      ],
    }
  };


  useEffect(() => {
    const fetchTyres = async () => {
      try {
        const response = await fetch("/tyres.json");
        const data = await response.json();
        const twoWheelerTyres = data.filter((tyre) => tyre.group === "NON-TRUCKS");
        setTyres(twoWheelerTyres);
        setFilteredTyres(twoWheelerTyres);
        setLoading(false);
      } catch (error) {
        console.error("Error loading tyres:", error);
        setLoading(false);
      }
    };

    fetchTyres();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = tyres.filter((tyre) => {
        const matchesTyreConstruction =
          selectedFilters.tyreConstruction.length === 0 ||
          selectedFilters.tyreConstruction.some((filter) =>
            tyre.tyreConstruction?.includes(filter)
          );

        const matchesTyrePosition =
          selectedFilters.tyrePosition.length === 0 ||
          selectedFilters.tyrePosition.some((filter) =>
            Array.isArray(tyre.tyrePosition)
              ? tyre.tyrePosition.some((position) => filter.includes(position))
              : filter.includes(tyre.tyrePosition)
          );

        const matchesSearchQuery =
          !searchQuery ||
          tyre.name.toLowerCase().includes(searchQuery.toLowerCase());

        return (
          matchesTyreConstruction &&
          matchesTyrePosition &&
          matchesSearchQuery
        );
      });

      setFilteredTyres(filtered);
    };

    applyFilters();
  }, [selectedFilters, searchQuery, tyres]);

  const handleFilterChange = useCallback((category, value, remove = false) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[category] || []; // Ensure the category exists in `selectedFilters`

      return {
        ...prev,
        [category]: remove
          ? currentValues.filter((v) => v !== value) // Remove the value
          : currentValues.includes(value)
            ? currentValues.filter((v) => v !== value) // Toggle off
            : [...currentValues, value], // Add the value
      };
    });
  }, []);


  const resetFilters = useCallback(() => {
    setSelectedFilters({
      tyreConstruction: [],
      tyrePosition: [],
    });
    setSearchQuery("");
  }, []);


  const FilterSection = ({ category, config }) => {
    const handleChange = (value) => handleFilterChange(category, value);

    return (
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">{config.title}</h3>
        <div className="space-y-2">
          {config.options.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type={config.type}
                name={category}
                value={option.id}
                checked={selectedFilters[category]?.includes(option.id)}
                onChange={() => handleChange(option.id)}
                className={`${config.type === "radio"
                    ? "text-blue-700 focus:ring-blue-700"
                    : "rounded text-blue-700 focus:ring-blue-700"
                  }`}
              />
              <span className="text-gray-600 group-hover:text-blue-700 transition-colors">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">

        <div className="mb-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tyre-pattern.png')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Non-Truck Tyres</h1>
            <p className="text-blue-100 text-lg">
              Find the perfect match for your ride. Premium Apollo tyres for
              every riding style.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <button
            className="lg:hidden flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg shadow-sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span className="flex items-center gap-2">
              <Filter size={20} className="text-blue-700" />
              <span className="font-medium">Filter Tyres</span>
            </span>
            <ChevronDown
              className={`transform transition-transform duration-300 ${isFilterOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          <div className={`lg:w-1/4 ${isFilterOpen ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-800 transition-colors"
                >
                  <RotateCw size={16} />
                  Reset All
                </button>
              </div>

              <div className="space-y-6">
                {Object.entries(filterCategories).map(([category, config]) => (
                  <FilterSection key={category} category={category} config={config} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tyres by name or specification..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 
                  focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all duration-300"
              />
            </div>

            {/* Selected Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(selectedFilters).map(([category, value]) => {
                const values = Array.isArray(value) ? value : [value];
                return values
                  .filter((v) => v !== "all")
                  .map((v) => (
                    <div
                      key={`${category}-${v}`}
                      className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                    >
                      <span className="text-sm">
                        {filterCategories[category].options.find((opt) => opt.id === v)?.label}
                      </span>
                      <button
                        onClick={() => handleFilterChange(category, v, true)} // Remove specific filter
                        className="hover:text-blue-900"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ));
              })}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {loading ? (
                <div className="flex justify-center items-center h-64 col-span-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
                </div>
              ) : filteredTyres.length > 0 ? (
                filteredTyres.map((tyre, index) => (
                  <a
                    key={index}
                    target="_blank"
                    href={tyre.url}
                    className="group relative bg-white rounded-2xl p-6 transition-all duration-300 
                      hover:shadow-lg hover:-translate-y-1 border border-gray-100 hover:border-blue-100
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {/* Product Image */}
                    <div className="aspect-square rounded-xl bg-gray-50 mb-4 p-6 flex items-center justify-center 
                      overflow-hidden group-hover:bg-blue-50/50 transition-colors">
                      {tyre.image_urls && tyre.image_urls[0] && (
                        <img
                          src={tyre.image_urls[0] || "/tyre-fallback.jpg"}
                          alt={tyre.name}
                          className="w-full h-full object-contain transform transition-all duration-500 
                          group-hover:scale-110"
                        />
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-2">
                      <h3 className="text-gray-800 font-medium line-clamp-1 group-hover:text-blue-700 
                      transition-colors">
                        {tyre.name}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 h-10">
                        {tyre.tagline || ""}
                      </p>
                    </div>

                    {/* Size Badge */}
                    {tyre.specification_table && tyre.specification_table[0] && (
                      <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-50 
                      px-3 py-1 rounded-full">
                        {/* <span className="font-medium">{tyre.specification_table[0].size}</span> */}
                        {/* <span className="text-gray-400">•</span> */}
                        <span>Available in {tyre.specification_table.length} sizes</span>
                      </div>
                    )}

                    {/* Call to Action */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-700 group-hover:translate-x-1 
                      transition-transform inline-flex items-center gap-1">
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </span>
                      <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center 
                      group-hover:bg-blue-100 transition-colors">
                        <ChevronRight className="w-4 h-4 text-blue-700" />
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-700 transform scale-x-0 
                      group-hover:scale-x-100 transition-transform rounded-b-2xl"></div>
                  </a>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No tyres found
                  </h3>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonTrucksPage;
