/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    // { type: 'autogenerated', dirName: '.' },
    {
      type: 'doc',
      label: '👋 Introduction',
      id: 'index',
    },

    {
      type: 'doc',
      label: '💪 Why - The Motivation',
      id: 'why',
    },

    {
      type: 'doc',
      label: '📐 Architecture',
      id: 'architecture',
    },

    {
      type: 'category',
      label: '⚙️ How to Run',
      link: {
        slug: 'how-to-run',
        type: 'generated-index',
        title: '⚙️ How to Run Kubernetes Goat',
        description:
          "You can run Kubernetes goat using different ways in various providers and setups like AWS, GCP, Azure, K3S, etc.",
      },
      items: [
        'how-to-run/katacoda',
        'how-to-run/kubernetes',
        'how-to-run/kind',
        'how-to-run/gcp',
        'how-to-run/aws',
        'how-to-run/azure',
        'how-to-run/k3s',
      ],
    },

    {
      type: 'doc',
      label: '⚡ Getting started',
      id: 'getting-started',
    },

    {
      type: 'doc',
      label: '📖 Learning Kubernetes',
      id: 'learning-kubernetes/index',
    },

    {
      type: 'doc',
      label: '📋 Cheat Sheet',
      id: 'cheatsheet',
    },

    {
      type: 'category',
      label: '🚀 Scenarios',
      link: {
        slug: 'scenarios',
        type: 'generated-index',
        title: '🚀 Kubernetes Goat scenarios',
        description:
          "Let's explore the awesome Kubernetes Goat scenarios",
        keywords: ['scenario', 'kubernetes-goat', 'kubernetes-security'],
      },
      items: [
        'scenarios/scenario-1',
        'scenarios/scenario-2',
        'scenarios/scenario-3',
        'scenarios/scenario-4',
        'scenarios/scenario-5',
        'scenarios/scenario-6',
        'scenarios/scenario-7',
        'scenarios/scenario-8',
        'scenarios/scenario-9',
        'scenarios/scenario-10',
        'scenarios/scenario-11',
        'scenarios/scenario-12',
        'scenarios/scenario-13',
        'scenarios/scenario-14',
        'scenarios/scenario-15',
        'scenarios/scenario-16',
        'scenarios/scenario-17',
        'scenarios/scenario-18',
        'scenarios/scenario-19',
        'scenarios/scenario-20',
      ],
    },

    {
      type: 'category',
      label: '📝 Security Reports',
      link: {
        slug: 'security-reports',
        type: 'generated-index',
        title: '📝 Security Reports - Kubernetes Goat',
        description:
          "Let's explore the security reports by scanning Kubernetes Goat Scenarios against popular tools and see what they find.",
        keywords: ['security-reports', 'kubernetes-goat', 'kubernetes-security'],
      },
      items: [
        'security-reports/kics',
        'security-reports/checkov',
      ],
    },

    {
      type: 'doc',
      label: '🛑 Teardown',
      id: 'teardown',
    },

    {
      type: 'doc',
      label: '🎉 Getting Involved',
      id: 'getting-involved/index',
    },

    {
      type: 'doc',
      label: '🎊 Community',
      id: 'community',
    },

    // {
    //   type: 'doc',
    //   label: '🛠️ Troubleshooting',
    //   id: 'troubleshooting/index',
    // },

    {
      type: 'doc',
      label: '🤩 Showcase',
      id: 'showcase',
    },
    {
      type: 'doc',
      label: '❤️ Wall of Love',
      id: 'wall-of-love',
    },

    {
      type: 'doc',
      label: '📚 Resources',
      id: 'resources',
    },

    {
      type: 'doc',
      label: '🙏 Acknowledgments',
      id: 'acknowledgments',
    },

    {
      type: 'doc',
      label: '📢 Sponsors',
      id: 'sponsors',
    },

    {
      type: 'doc',
      label: '⏳ Miscellaneous',
      id: 'miscellaneous/index',
    },

    {
      type: 'doc',
      label: '🙋 FAQ',
      id: 'faq',
    },

  ],
};

module.exports = sidebars;
