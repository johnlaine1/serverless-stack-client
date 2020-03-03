export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: 'pk_test_OXYYXX7t6gotXXBLKng46mLY',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'jll-serverless-tutorial'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://m41qwmxl54.execute-api.us-east-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_NmAgrCP0z',
    APP_CLIENT_ID: '4tb9u6jmv350srqoihm4c7jkiu',
    IDENTITY_POOL_ID: 'us-east-1:1b949028-a7d4-48a4-b66c-9f25d1eda1d0'
  }
};
