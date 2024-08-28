import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

export const ourFileRouter = {
  csvUploader: f({ 'text/csv': { maxFileSize: '4MB' } }).onUploadComplete(
    async ({ file }) => {
      console.log('file url', file.url);
      return { url: file.url };
    },
  ),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
