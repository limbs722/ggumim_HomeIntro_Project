import { useEffect, useState } from 'react';
import { HttpUtil } from '../utils';

interface FetchProps {
  params: {
    url: string;
    method: 'GET';
    params?: object;
  };
}

function useFetch({ params }: FetchProps) {
  const [requestParams, setRequestParams] = useState(params);
  const [isFetching, setIsFetching] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await HttpUtil.requestApi(requestParams);
      let msg: string = '';

      if (res.status !== 200) {
        msg =
          '네트워크 통신 중 오류가 발생 했습니다. 오류 코드 : [' +
          res.stastatus +
          ']';
        return;
      }

      setResponse(res.data);
    };
    getData();
  }, [requestParams]);

  return { response };
}

export default useFetch;
