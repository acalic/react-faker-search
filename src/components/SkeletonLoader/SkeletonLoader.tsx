import './SkeletonLoader.scss';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="skeleton-result">
          <div className="skeleton-line width-sm"></div>
          <div className="skeleton-line width-md"></div>
          <div className="skeleton-line width-lg"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
