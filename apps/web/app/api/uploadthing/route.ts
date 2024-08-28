import { createRouteHandler } from 'uploadthing/next';

import { ourFileRouter } from '@chartloapp/uploadthing';

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
