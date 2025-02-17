# AWS Bedrock

Roo Code supports accessing models through Amazon Bedrock, a fully managed service that makes a selection of high-performing foundation models (FMs) from leading AI companies available via a single API.

**Website:** [https://aws.amazon.com/bedrock/](https://aws.amazon.com/bedrock/)

## Prerequisites

*   **AWS Account:** You need an active AWS account.
*   **Bedrock Access:** You must request and be granted access to Amazon Bedrock.  See the [AWS Bedrock documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html) for details on requesting access.
*   **Model Access:** Within Bedrock, you need to request access to the specific models you want to use (e.g., Anthropic Claude).
* **Install AWS CLI:** Use AWS CLI to configure your account for authentication
    ```bash
     aws configure
    ```

## Getting Credentials

You have two main options for configuring AWS credentials:

1.  **AWS Access Keys (Recommended for Development):**
    *   Create an IAM user with the necessary permissions (at least `bedrock:InvokeModel`).
    *   Generate an access key ID and secret access key for that user.
    *   *(Optional)* Create a session token if required by your IAM configuration.
2.  **AWS Profile:**
    *   Configure an AWS profile using the AWS CLI or by manually editing your AWS credentials file.  See the [AWS CLI documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) for details.

## Supported Models

Roo Code supports the following models through Bedrock:

* **Anthropic:**
  * `anthropic.claude-3-5-sonnet-20241022-v2:0`
  * `anthropic.claude-3-5-haiku-20241022-v1:0`
  * `anthropic.claude-3-opus-20240229-v1:0`
  * `anthropic.claude-3-sonnet-20240229-v1:0`
  * `anthropic.claude-3-haiku-20240307-v1:0`
* **Meta:**
    * `meta.llama3-3-70b-instruct-v1:0`
    * `meta.llama3-2-90b-instruct-v1:0`
    * `meta.llama3-2-11b-instruct-v1:0`
    * `meta.llama3-2-3b-instruct-v1:0`
    * `meta.llama3-2-1b-instruct-v1:0`
    * `meta.llama3-1-405b-instruct-v1:0`
    * `meta.llama3-1-70b-instruct-v1:0`
    * `meta.llama3-1-8b-instruct-v1:0`
* **Amazon**:
    * `amazon.nova-pro-v1:0`
    * `amazon.nova-lite-v1:0`
    * `amazon.nova-micro-v1:0`

Refer to the [Amazon Bedrock documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids-arns.html) for the most up-to-date list of available models and their IDs. Make sure to use the *model ID* when configuring Roo Code, not the model name.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Bedrock" from the "API Provider" dropdown.
3.  **Select Authentication Method:**
    *   **AWS Credentials:**
        *   Enter your "AWS Access Key" and "AWS Secret Key."
        *   (Optional) Enter your "AWS Session Token" if you're using temporary credentials.
        *   Leave "AWS Profile" *blank*.
        *   Set "Use AWS Profile" to *unchecked*.
    *   **AWS Profile:**
        *   Enter your "AWS Profile" name (e.g., "default").
        *   Set "Use AWS Profile" to *checked*.
        *   Leave the Access Key, Secret Key, and Session Token fields *blank*.
4.  **Select Region:** Choose the AWS region where your Bedrock service is available (e.g., "us-east-1").
5.  **(Optional) Cross-Region Inference:** Check "Use cross-region inference" if you want to access models in a region different from your configured AWS region.
6.  **Select Model:** Choose your desired model from the "Model ID" dropdown.  Make sure you use the correct *model ID* (e.g., `anthropic.claude-3-5-sonnet-20241022-v2:0`), not the model name.

## Tips and Notes

*   **Permissions:**  Ensure your IAM user or role has the necessary permissions to invoke Bedrock models.  The `bedrock:InvokeModel` permission is required.
*   **Pricing:**  Refer to the [Amazon Bedrock pricing](https://aws.amazon.com/bedrock/pricing/) page for details on model costs.
*   **Cross-Region Inference:**  Using cross-region inference may result in higher latency.
* **Prompt Caching**: You can enable caching of prompts if you want to use AWS's implementation.