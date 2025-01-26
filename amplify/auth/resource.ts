import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    "custom:nome": {
      dataType: "String",
      mutable: true,
      maxLen: 11,
      minLen: 11,
    },    
    "custom:cpf": {
      dataType: "String",
      mutable: true,
      maxLen: 11,
      minLen: 11,
    },
    "custom:telefone": {
      dataType: "Number",
      mutable: true,
      min: 1,
      max: 100,
    },
    "custom:termos": {
      dataType: "Boolean",
      mutable: true,
    },
  },
});
