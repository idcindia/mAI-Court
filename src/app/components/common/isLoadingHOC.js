import React, { useState} from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loaderHolder">
      <div className="loaderMain">
        <Circles
          height="80"
          width="80"
          color="#644D29"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );IsLoadingHOC
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
