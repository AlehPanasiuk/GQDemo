import {
  useEffect,
  useState
} from 'react';

interface Step {
  stepName: string
  count: number
}

export type ResponseData = Step[]

interface UseMenuDataReturn {
  loading: boolean
  data: ResponseData | null
  error: Error | null
}

  type UseMenuDataType = () => UseMenuDataReturn

const useMenuData: UseMenuDataType = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ResponseData | null>(null);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/fakeMenuResponce.json')
      .then(async (response) => {
        return await response.json() as ResponseData;
      })
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          setData(data);
        }, 1000);
      })
      .catch((err) => {
        setError(new Error(err as string));
      });
  });

  return { loading, data, error };
};

export default useMenuData;
