export const structure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Homepage')
        .id('homePage')
        .icon(() => '🏠')
        .child(S.document().title('Homepage').schemaType('homePage').documentId('homePage')),
    ])
