import {
  useEffect,
  useState
} from 'react';

export interface ResponseData {
  certificates: Array<Record<string, unknown>>
  paging: Record<string, number>
}

interface UseIsolationsReturn {
  loading: boolean
  data: ResponseData | null
  error: Error | null
}

type UseIsolationsType = () => UseIsolationsReturn

const useIsolations: UseIsolationsType = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ResponseData | null>(null);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/fakeResponce.json')
      .then(async (response) => {
        return await response.json() as ResponseData;
      })
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          setData(data);
        }, 2000);
      })
      .catch((err) => {
        setError(new Error(err as string));
      });
  }, []);

  return { loading, data, error };
};

export default useIsolations;
