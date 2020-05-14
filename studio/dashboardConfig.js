export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5ebd69b69cbc31dd04eba8fd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-2y82o5hn',
                  apiId: '3db187d0-cc90-4059-9644-119966f0604f'
                },
                {
                  buildHookId: '5ebd69b79cbc31dba8ebaa34',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-iqzwbg67',
                  apiId: '4124540a-06be-491d-a035-50d704db375c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/akim-seenk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-iqzwbg67.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
