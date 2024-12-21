export type AmplifyDependentResourcesAttributes = {
  "analytics": {
    "todo": {
      "Id": "string",
      "Region": "string",
      "appName": "string"
    }
  },
  "api": {
    "signup": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "todo": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "todo": {
      "IdentityPoolId": "string",
      "IdentityPoolName": "string"
    }
  },
  "function": {
    "signup": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "userInfo": {
      "Arn": "string",
      "Name": "string",
      "PartitionKeyName": "string",
      "PartitionKeyType": "string",
      "Region": "string",
      "SortKeyName": "string",
      "SortKeyType": "string",
      "StreamArn": "string"
    }
  }
}