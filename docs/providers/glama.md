# Glama

Glama provides access to a variety of language models through a unified API, including models from Anthropic, OpenAI, and others.  It offers features like prompt caching and cost tracking.

**Website:** [https://glama.ai/](https://glama.ai/)

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [Glama login page](https://glama.ai/login). Sign in using your Google account.
2.  **Get API Key:** After signing in, click the "Get API Key" button.
3.  **Copy the Key:** Copy the displayed API key.

## Supported Models

Roo Code will automatically try to fetch a list of available models from the Glama API.  Some models that are commonly available through Glama include:

*  **Anthropic Claude models:**  (e.g., `anthropic/claude-3-5-sonnet`)  These are generally recommended for best performance with Roo Code.
*  **OpenAI models:** (e.g., `openai/gpt-4o`)
*   **Other providers:** (e.g., `mistralai/Mistral-7B-Instruct-v0.1`, and other open-source models).
    
Refer to the [Glama documentation](https://glama.ai/docs/category/models) for the most up-to-date list of supported models and their IDs. Use the complete model ID in the form of `{provider}/{model-name}`.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (⚙️) in the Roo Code panel.
2.  **Select Provider:** Choose "Glama" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Glama API key into the "API Key" field.
4.  **Select Model:** Choose your desired model from the "Model ID" dropdown.
    * If the model list doesn't load, make sure your key is added. Roo Code should load the available models. You may try selecting another provider, then switch back to Glama to trigger a refresh.

## Tips and Notes

* **Pricing:** Glama operates on a pay-per-use basis.  Pricing varies depending on the model you choose. Refer to the [Glama pricing information](https://glama.ai/pricing) for details.
* **Prompt Caching:** Glama supports prompt caching, which can significantly reduce costs and improve performance for repeated prompts.
* **Model Specific Information**: Some models, like Claude 3 models, may support additional features like prompt caching. This information will appear below the model selector when using the Glama provider.