'use client';

import { useDispatch } from 'react-redux';
import { setUrl } from '@chartloapp/state/src/slices/chart';
import toast from 'react-hot-toast';
import { UtButton } from './ut-button';

export function UploadButton() {
  const dispatch = useDispatch();
  return (
    <UtButton
      className="w-fit pt-4 text-center"
      endpoint="csvUploader"
      onClientUploadComplete={(data) => {
        const url = data[0].url;
        if (url) {
          dispatch(setUrl(url));
          toast.success('Upload successful!');
        } else {
          toast.error('No URL received from upload.');
        }
      }}
    />
  );
}
