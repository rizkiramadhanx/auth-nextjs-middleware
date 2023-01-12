import toast, { Toaster } from 'react-hot-toast';
import { useTestMutate } from '../hooks/useTest';

const Test = () => {
  const { mutate, isSuccess, data } = useTestMutate();
  const notify = (e: string) => toast.error(e);

  const onSubmit = () => {
    mutate(undefined, {
      onSuccess: () => {
        console.log('success');
      },
      onError: (e: any, i) => {
        notify(e.msg);
      },
    });
  };
  return (
    <div>
      <p>{isSuccess && JSON.stringify(data)}</p>
      <button className="bg-red-100" onClick={onSubmit}>
        Ja
      </button>
      <Toaster position="top-right" />
    </div>
  );
};

export default Test;
