import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installing',
        'getting-started/connecting-api-provider',
        'getting-started/your-first-task',
      ],
    },
    {
      type: 'category',
      label: 'Basic Usage',
      items: [
        'basic-usage/the-chat-interface',
        'basic-usage/typing-your-requests',
        'basic-usage/using-tools',
        'basic-usage/context-mentions',
        'basic-usage/modes',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Usage',
      items: [
        'advanced-usage/auto-approving-actions',
        'advanced-usage/custom-modes',
        'advanced-usage/custom-instructions',
        'advanced-usage/large-projects',
        'advanced-usage/prompt-engineering',
        'advanced-usage/model-temperature',
        'advanced-usage/checkpoints',
        'advanced-usage/mcp',
        'advanced-usage/rate-limits-costs',
        'advanced-usage/enhance-prompt',
        'advanced-usage/code-actions',
        'advanced-usage/experimental-features',
        'advanced-usage/local-models',
      ],
    },
    {
      type: 'category',
      label: 'Model Providers',
      items: [
        'providers/anthropic',
        'providers/bedrock',
        'providers/deepseek',
        'providers/vertex',
        'providers/gemini',
        'providers/glama',
        'providers/lmstudio',
        'providers/mistral',
        'providers/ollama',
        'providers/openai',
        'providers/openai-compatible',
        'providers/openrouter',
        'providers/requesty',
        'providers/unbound',
        'providers/vscode-lm',
      ]
    },
    'faq',
    'tutorial-videos',
    'community',
  ],
};

export default sidebars;
