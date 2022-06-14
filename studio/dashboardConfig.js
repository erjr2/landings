export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a84bf3e156736d8845a489',
                  title: 'Sanity Studio',
                  name: 'landings-studio',
                  apiId: 'e5f5bb5a-51e8-421e-b20a-872ae1844c5e'
                },
                {
                  buildHookId: '62a84bf41eba9870c47ab5ad',
                  title: 'Landing pages Website',
                  name: 'landings-web',
                  apiId: '519aac06-6cf0-4ca0-9005-cd384fae0578'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erjr2/landings',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://landings-web.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
