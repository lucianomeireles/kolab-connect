import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 'kolab-connect',
      region: 'sa-east-1',
      stage: 'dev'
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, 'site', {
        environment: {
          NEXT_PUBLIC_API_BASE: 'https://jsonplaceholder.typicode.com'
        }
      });

      stack.addOutputs({
        SiteUrl: site.url
      });
    });
  }
} satisfies SSTConfig;
