export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="hidden lg:flex space-x-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="relative h-[70vh] bg-gray-200 animate-pulse mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute bottom-12 left-0 right-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="space-y-4">
              <div className="h-6 w-64 bg-white/20 rounded animate-pulse"></div>
              <div className="h-12 w-96 bg-white/20 rounded animate-pulse"></div>
              <div className="h-6 w-80 bg-white/20 rounded animate-pulse"></div>
              <div className="h-20 w-full max-w-2xl bg-white/20 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs Skeleton */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex-1 h-12 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>

            {/* Content Skeleton */}
            <div className="space-y-6">
              <div className="h-8 w-64 bg-gray-200 rounded animate-pulse"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-200 rounded-lg animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-200 rounded-xl h-96 animate-pulse"></div>
            <div className="bg-gray-200 rounded-xl h-64 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-800 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 w-32 bg-gray-600 rounded animate-pulse"></div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-4 w-24 bg-gray-600 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}