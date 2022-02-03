import axios from 'axios';

interface ArgsProps {
  url: string;
  params?: object;
  method?: string;
}

class HttpUtil {
  async requestApi(args: ArgsProps) {
    function getApi(url: string, params?: object, method?: string) {
      const body: object = {
        url: url,
        method: !method ? 'GET' : method,
      };

      const data: object = !params ? {} : { params: params };

      return axios({ ...body, ...data })
        .then(res => res)
        .catch(err => err.response);
    }

    return await getApi(args.url, args.params, args.method);
  }
}

export default new HttpUtil();
