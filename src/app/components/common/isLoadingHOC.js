import React, { useState} from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black bg-opacity-50 fixed top-0 left-0 z-50">
      <Circles
        height="80"
        width="80"
        color="#644D29"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
};

const IsLoadingHOC = (WrappedComponent) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(false);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        {isLoading && <Loading />}
        <WrappedComponent
          {...props}
          isLoading={isLoading}
          setLoading={setLoadingState}
        />
      </>
    );
  }
  return HOC;
};

export default IsLoadingHOC;
