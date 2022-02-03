import { useEffect, useState } from 'react';
import { HttpUtil } from '../utils';

interface FetchProps {
  url: string;
  method?: string;
  params?: object;
}

type responseProps = {
  imageUrl: string;
  productList: Array<any>;
};

function useFetch(args: FetchProps) {
  const [requestParams, setRequestParams] = useState(args);
  const [isFetching, setIsFetching] = useState(false);
  const [response, setResponse] = useState<responseProps>();

  useEffect(() => {
    const getData = async () => {
      const res = await HttpUtil.requestApi(requestParams);
      let msg: string = '';
      console.log(res);

      if (res.status !== 200) {
        msg =
          '네트워크 통신 중 오류가 발생 했습니다. 오류 코드 : [' +
          res.stastatus +
          ']';
        return;
      }

      setResponse({
        imageUrl: res.data.imageUrl,
        productList: res.data.productList,
      });
    };
    getData();
  }, [requestParams]);

  return { response };
}

export default useFetch;
