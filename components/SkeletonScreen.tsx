import React from 'react';

const SkeletonScreen: React.FC<{ isLoading: boolean; children: React.ReactNode }> = ({ isLoading, children }) => {
  if (!isLoading) return <>{children}</>;

  return (
    <div className="animate-pulse space-y-6">
      {/* Image skeleton */}
      <div className="aspect-[16/9] bg-slate-700/40 rounded-2xl"></div>

      {/* Title skeleton */}
      <div className="space-y-3">
        <div className="h-8 bg-slate-700/40 rounded-lg w-3/4"></div>
        <div className="h-4 bg-slate-700/40 rounded-lg w-full"></div>
        <div className="h-4 bg-slate-700/40 rounded-lg w-5/6"></div>
      </div>

      {/* Metadata skeleton */}
      <div className="flex gap-4">
        <div className="h-6 bg-slate-700/40 rounded-full w-20"></div>
        <div className="h-6 bg-slate-700/40 rounded-full w-20"></div>
      </div>

      {/* Button skeleton */}
      <div className="flex gap-4 pt-4">
        <div className="h-12 bg-slate-700/40 rounded-lg flex-1"></div>
        <div className="h-12 bg-slate-700/40 rounded-lg flex-1"></div>
      </div>
    </div>
  );
};

export default SkeletonScreen;
