import type { Schema, Attribute } from '@strapi/strapi';

export interface TeamSocial extends Schema.Component {
  collectionName: 'components_team_socials';
  info: {
    displayName: 'social';
    icon: 'link';
    description: '';
  };
  attributes: {
    facebook: Attribute.String;
    instagram: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'team.social': TeamSocial;
    }
  }
}
